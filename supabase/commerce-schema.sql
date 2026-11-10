-- RUANG CENDEKIA: prepared schema for a dedicated Supabase project.
-- This file is a draft. Do not run against the Bisaprint database.
-- Payments must be confirmed by server-side verified webhooks, never the browser.
-- The auth schema is managed by Supabase.

create table if not exists public.rc_plans (
  id text primary key,
  label text not null,
  price_idr integer,
  is_available boolean not null default false,
  created_at timestamptz not null default now(),
  constraint positive_price check (price_idr is null or price_idr >= 0)
);
alter table public.rc_plans enable row level security;

-- Public can view listed plan metadata but never mutate pricing.
create policy "Read published plans" on public.rc_plans
  for select to anon, authenticated using (true);

create table if not exists public.rc_orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan_id text not null references public.rc_plans(id),
  merchant_order_id text unique,
  payment_provider text,
  payment_reference text unique,
  amount_idr integer not null check (amount_idr >= 0),
  status text not null default 'pending'
    check (status in ('pending','paid','expired','failed','refunded')),
  created_at timestamptz not null default now(),
  paid_at timestamptz,
  updated_at timestamptz not null default now()
);
create index if not exists rc_orders_user_idx on public.rc_orders(user_id,created_at desc);
alter table public.rc_orders enable row level security;
create policy "Read own orders" on public.rc_orders for select to authenticated
  using (user_id = (select auth.uid()));
-- No client INSERT, UPDATE or DELETE policies: backend with properly secured
-- credentials writes orders and updates payment state.

create table if not exists public.rc_entitlements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan_id text not null references public.rc_plans(id),
  active_from timestamptz not null default now(),
  expires_at timestamptz,
  revoked_at timestamptz,
  granted_by_order uuid unique references public.rc_orders(id),
  created_at timestamptz not null default now()
);
create index if not exists rc_entitlements_lookup_idx on public.rc_entitlements(user_id,plan_id);
alter table public.rc_entitlements enable row level security;
create policy "Read own entitlements" on public.rc_entitlements for select to authenticated
  using (user_id = (select auth.uid()));
-- A successful client-side button click must NEVER grant an entitlement.

-- Optional product-publication metadata. Not actual paid story content.
create table if not exists public.rc_catalog_status (
  id text primary key,
  published_story_count integer not null default 0 check (published_story_count >= 0),
  planned_story_count integer,
  status text not null default 'beta',
  updated_at timestamptz not null default now()
);
alter table public.rc_catalog_status enable row level security;
create policy "Read catalogue status" on public.rc_catalog_status
  for select to anon, authenticated using (true);

-- No insert of prices or product promises here until owner confirms them.
-- Production checklist:
-- 1. Create separate Supabase project Ruang Cendekia.
-- 2. Configure email auth and RLS; verify no data access across accounts.
-- 3. Implement server-only checkout creation and provider webhook verification.
-- 4. Idempotently set paid and grant entitlement inside a database transaction.
-- 5. Never embed protected paid story fulltext in public JS bundles.
-- 6. Add cancellation/refund policy and customer support channels.
