-- Ayo Memahami! Edisi Islami — Supabase schema
-- Run this file in Supabase SQL Editor before enabling cloud accounts.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default 'Pengguna',
  role text not null default 'student' check (role in ('student','parent','teacher')),
  link_code text unique,
  created_at timestamptz not null default now()
);

create table if not exists public.student_links (
  id uuid primary key default gen_random_uuid(),
  adult_id uuid not null references public.profiles(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (adult_id, student_id),
  check (adult_id <> student_id)
);

create table if not exists public.student_progress (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  story_id text not null,
  score integer not null check (score between 1 and 5),
  completed_at timestamptz not null default now(),
  unique (student_id, story_id)
);

create or replace function public.create_profile_for_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, role, link_code)
  values (
    new.id,
    coalesce(nullif(new.raw_user_meta_data->>'full_name',''), 'Pengguna'),
    case when new.raw_user_meta_data->>'role' in ('student','parent','teacher')
      then new.raw_user_meta_data->>'role' else 'student' end,
    upper(encode(gen_random_bytes(4), 'hex'))
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_profile on auth.users;
create trigger on_auth_user_created_profile
  after insert on auth.users
  for each row execute procedure public.create_profile_for_new_user();

create or replace function public.link_student_by_code(p_code text)
returns table(student_id uuid, student_name text)
language plpgsql security definer set search_path = public
as $$
declare
  v_adult uuid := auth.uid();
  v_student public.profiles%rowtype;
begin
  if v_adult is null then raise exception 'Silakan masuk terlebih dahulu.'; end if;
  if not exists (select 1 from public.profiles p where p.id = v_adult and p.role in ('parent','teacher')) then
    raise exception 'Hanya akun orang tua atau guru yang dapat menghubungkan siswa.';
  end if;
  select * into v_student from public.profiles p
    where p.link_code = upper(trim(p_code)) and p.role = 'student';
  if not found then raise exception 'Kode siswa tidak ditemukan. Periksa kembali kodenya.'; end if;
  insert into public.student_links(adult_id, student_id)
    values (v_adult, v_student.id) on conflict (adult_id, student_id) do nothing;
  return query select v_student.id, v_student.full_name;
end;
$$;

alter table public.profiles enable row level security;
alter table public.student_links enable row level security;
alter table public.student_progress enable row level security;

drop policy if exists "profiles readable by owner or linked adult" on public.profiles;
create policy "profiles readable by owner or linked adult" on public.profiles
  for select using (
    id = auth.uid() or exists (
      select 1 from public.student_links l
      where l.student_id = profiles.id and l.adult_id = auth.uid()
    )
  );

drop policy if exists "profile owner can update own profile" on public.profiles;
create policy "profile owner can update own profile" on public.profiles
  for update using (id = auth.uid()) with check (id = auth.uid());

drop policy if exists "linked adults and students can read links" on public.student_links;
create policy "linked adults and students can read links" on public.student_links
  for select using (adult_id = auth.uid() or student_id = auth.uid());

drop policy if exists "students and linked adults can read progress" on public.student_progress;
create policy "students and linked adults can read progress" on public.student_progress
  for select using (
    student_id = auth.uid() or exists (
      select 1 from public.student_links l
      where l.student_id = student_progress.student_id and l.adult_id = auth.uid()
    )
  );

drop policy if exists "students can insert own progress" on public.student_progress;
create policy "students can insert own progress" on public.student_progress
  for insert with check (
    student_id = auth.uid() and exists (
      select 1 from public.profiles p where p.id = auth.uid() and p.role = 'student'
    )
  );

drop policy if exists "students can update own progress" on public.student_progress;
create policy "students can update own progress" on public.student_progress
  for update using (student_id = auth.uid()) with check (student_id = auth.uid());

grant select, update on public.profiles to authenticated;
grant select on public.student_links to authenticated;
grant select, insert, update on public.student_progress to authenticated;
grant execute on function public.link_student_by_code(text) to authenticated;
