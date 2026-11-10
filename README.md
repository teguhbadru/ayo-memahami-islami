# Ruang Cendikia

**Mendengar. Memahami. Meneladani.**

Satu cerita, satu percakapan, satu pelajaran kebaikan.

Ruang Cendikia adalah prototipe aplikasi aktivitas cerita dan adab Islami untuk orang tua dan anak usia 6–9 tahun. Orang tua membacakan cerita dan pertanyaan, anak mendengarkan serta menjawab secara lisan tanpa harus memegang layar.

## Versi awal

- 5 tingkat pemahaman, 15 cerita asli dari modul *Ayo Memahami! Edisi Islami* oleh Syahrul Ilmi, tanpa mengubah teks maupun urutannya.
- Beranda baru, katalog cerita, dan halaman aktivitas mobile-friendly.
- Alur **Mendengar → Memahami → Meneladani**: cerita, pertanyaan satu per satu, panduan jawaban, refleksi, nilai adab, dan tantangan kebaikan.
- Tidak perlu membuat akun atau mengisi kuis. Progres cerita disimpan secara lokal melalui `localStorage` dengan kunci `ruang_cendikia_progress_v1`, termasuk migrasi progres lokal dari aplikasi lama.
- Konten asli ada di `src/content.js`; aksi adab spesifik ada di `src/App.jsx`.
- Belum ada sistem pembayaran, langganan, atau proteksi konten premium. Materi dan hak merek perlu ditinjau sebelum dipasarkan.

## Menjalankan

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Teknologi: React + Vite + Tailwind CSS. Kode Supabase warisan masih ada pada repository untuk kompatibilitas/riwayat proyek, tetapi fitur baru ini tidak memerlukan login maupun koneksi cloud.

## Struktur

- `src/content.js`: data tingkat, cerita, pertanyaan, nilai kehidupan, refleksi, dan hikmah
- `src/App.jsx`: pengalaman pengguna, narasi, aktivitas, dan progres lokal
- `src/style.css`: visual responsif
- `index.html`: identitas situs

Koleksi dan konten versi ini perlu melalui peninjauan pedagogis serta validasi materi Islami sebelum peluncuran produk komersial.
