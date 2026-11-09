import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const AuthContext = createContext(null);
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    })
  : null;

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(Boolean(supabase));

  useEffect(() => {
    if (!supabase) return;
    let alive = true;
    supabase.auth.getSession().then(async ({ data }) => {
      if (!alive) return;
      setSession(data.session);
      if (data.session?.user) {
        const { data: p } = await supabase.from('profiles').select('*').eq('id', data.session.user.id).maybeSingle();
        if (alive) setProfile(p);
      }
      if (alive) setLoading(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      if (!nextSession) {
        setProfile(null);
        setLoading(false);
      } else {
        // Fetch profile outside the auth callback to avoid blocking Supabase's auth lock.
        setTimeout(() => {
          supabase.from('profiles').select('*').eq('id', nextSession.user.id).maybeSingle()
            .then(({ data }) => setProfile(data));
        }, 0);
      }
    });
    return () => { alive = false; listener.subscription.unsubscribe(); };
  }, []);

  const value = useMemo(() => ({
    supabase,
    session,
    user: session?.user ?? null,
    profile,
    loading,
    isConfigured: Boolean(supabase),
    refreshProfile: async () => {
      if (!supabase || !session?.user) return;
      const { data } = await supabase.from('profiles').select('*').eq('id', session.user.id).maybeSingle();
      setProfile(data);
    },
    signOut: () => supabase?.auth.signOut()
  }), [session, profile, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthScreen() {
  const { supabase } = useAuth();
  const [mode, setMode] = useState('signin');
  const [name, setName] = useState('');
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setBusy(true); setError(''); setMessage('');
    try {
      if (mode === 'signup') {
        const { data, error: e } = await supabase.auth.signUp({
          email, password,
          options: { data: { full_name: name.trim(), role } }
        });
        if (e) throw e;
        if (!data.session) setMessage('Pendaftaran berhasil. Periksa email untuk mengonfirmasi akun, lalu masuk kembali.');
        else setMessage('Akun berhasil dibuat. Selamat belajar!');
      } else {
        const { error: e } = await supabase.auth.signInWithPassword({ email, password });
        if (e) throw e;
      }
    } catch (e) { setError(e.message || 'Terjadi kesalahan. Coba lagi.'); }
    finally { setBusy(false); }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-red-100 p-7 md:p-9">
        <div className="text-center mb-7">
          <div className="inline-flex bg-[#B70912] text-white text-2xl font-black p-3 rounded-2xl mb-3">📖 AM</div>
          <h1 className="text-2xl font-extrabold text-slate-900">Ayo Memahami!</h1>
          <p className="text-sm text-slate-500 mt-1">Edisi Islami · Ruang belajar bersama</p>
        </div>
        <div className="grid grid-cols-2 bg-slate-100 p-1 rounded-xl mb-6">
          <button type="button" onClick={() => {setMode('signin');setError('');setMessage('');}} className={`py-2 rounded-lg text-sm font-bold ${mode==='signin'?'bg-white text-[#B70912] shadow':'text-slate-500'}`}>Masuk</button>
          <button type="button" onClick={() => {setMode('signup');setError('');setMessage('');}} className={`py-2 rounded-lg text-sm font-bold ${mode==='signup'?'bg-white text-[#B70912] shadow':'text-slate-500'}`}>Daftar</button>
        </div>
        <form onSubmit={submit} className="space-y-4">
          {mode === 'signup' && <>
            <label className="block text-sm font-semibold text-slate-700">Nama lengkap
              <input required value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400" placeholder="Nama kamu"/>
            </label>
            <label className="block text-sm font-semibold text-slate-700">Daftar sebagai
              <select value={role} onChange={e=>setRole(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 bg-white">
                <option value="student">Siswa</option><option value="parent">Orang tua</option><option value="teacher">Guru</option>
              </select>
            </label>
          </>}
          <label className="block text-sm font-semibold text-slate-700">Email
            <input required type="email" autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400" placeholder="nama@email.com"/>
          </label>
          <label className="block text-sm font-semibold text-slate-700">Kata sandi
            <input required minLength={6} type="password" autoComplete={mode==='signup'?'new-password':'current-password'} value={password} onChange={e=>setPassword(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400" placeholder="Minimal 6 karakter"/>
          </label>
          {error && <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-3">{error}</p>}
          {message && <p role="status" className="text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl p-3">{message}</p>}
          <button disabled={busy} className="w-full bg-[#B70912] hover:bg-red-800 disabled:opacity-60 text-white font-bold rounded-xl py-3.5 shadow-lg">{busy?'Memproses...':mode==='signup'?'Buat Akun':'Masuk ke Aplikasi'}</button>
        </form>
        <p className="text-xs text-center text-slate-400 mt-6">Progres belajar tersimpan dengan aman di akun masing-masing.</p>
      </div>
    </div>
  );
}

export function AccountBar({ onDashboard }) {
  const { user, profile, signOut } = useAuth();
  if (!user) return null;
  const roleName = profile?.role === 'parent' ? 'Orang tua' : profile?.role === 'teacher' ? 'Guru' : 'Siswa';
  return (
    <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2 bg-white/95 border-b border-red-100">
      <div className="text-xs text-slate-600">
        <strong className="text-slate-800">{profile?.full_name || user.email}</strong>
        <span className="ml-2 rounded-full bg-amber-100 text-amber-900 px-2 py-1">{roleName}</span>
        {profile?.role === 'student' && profile?.link_code && <span className="ml-2">Kode keluarga: <strong className="tracking-wider">{profile.link_code}</strong></span>}
      </div>
      <div className="flex gap-2">
        {(profile?.role === 'parent' || profile?.role === 'teacher') && <button onClick={onDashboard} className="text-xs font-bold text-[#B70912] border border-red-200 rounded-lg px-3 py-1.5">Dashboard {roleName}</button>}
        <button onClick={() => signOut()} className="text-xs font-semibold text-slate-600 hover:text-red-700 px-2 py-1.5">Keluar</button>
      </div>
    </div>
  );
}
