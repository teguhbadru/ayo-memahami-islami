# Ayo Memahami! Edisi Islami

Aplikasi belajar memahami bacaan bertahap untuk anak usia 6–9 tahun.

## Fitur
- 5 tingkat pemahaman dan 15 cerita Islami
- Latihan pilihan ganda, benar/salah, dan esai
- Kata baru, nilai kehidupan, refleksi, dan mutiara hikmah
- Akun siswa, orang tua, dan guru (Supabase Auth)
- Sinkronisasi skor siswa ke database cloud
- Kode keluarga untuk menghubungkan akun orang tua/guru dengan siswa
- Dashboard pemantauan siswa yang terhubung
- Mode tamu dengan penyimpanan lokal jika Supabase belum dikonfigurasi
- Sertifikat yang dapat dicetak

## Menjalankan lokal
```bash
npm install
cp .env.example .env.local
npm run dev
```

Isi `.env.local` dengan URL dan publishable/anon key dari Supabase.

## Mengaktifkan login dan database cloud
1. Buat atau pilih project Supabase.
2. Buka **SQL Editor** di dashboard Supabase.
3. Jalankan seluruh isi `supabase/schema.sql`.
4. Tambahkan environment variables berikut ke Vercel untuk Production, Preview, dan Development:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Redeploy aplikasi.

**Penting:** jangan pernah memasukkan `service_role` key ke variabel `VITE_*` atau ke kode browser. Gunakan hanya publishable/anon key; keamanan data dijaga melalui Row Level Security.
