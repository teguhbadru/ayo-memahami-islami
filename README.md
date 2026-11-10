# Ruang Cendekia

**Mendengar. Memahami. Meneladani.**

Satu cerita, satu percakapan, satu pelajaran kebaikan.

Ruang Cendekia adalah prototipe aplikasi aktivitas cerita dan adab Islami untuk orang tua dan anak usia 6–9 tahun. Orang tua membacakan cerita dan pertanyaan, anak mendengarkan serta menjawab secara lisan tanpa harus memegang layar.

## Fondasi komersial — fase beta

- Landing page benefit-first untuk orang tua, dengan cerita contoh, cara kerja, 5 tingkatan, nilai produk, dan FAQ.
- Navigasi ke katalog 15 cerita gratis, catatan perjalanan, dan halaman status Paket Keluarga.
- Paket Keluarga **belum dijual**. Tidak ada harga palsu, checkout palsu, rekening pembayaran, atau akses premium yang diklaim aktif.
- Jumlah **100 cerita** merupakan target pengembangan (20 per tingkat), **bukan** konten yang telah tersedia.
- Logo favicon diperbarui dari lambang hijau–emas Ruang Cendekia.
- `supabase/commerce-schema.sql` adalah rancangan tabel paket, pesanan, dan hak akses **belum dieksekusi**, untuk dipasang di proyek Supabase **khusus Ruang Cendekia**, bukan database Bisaprint.

### Sebelum membuka transaksi

1. Pastikan hak cipta/hak komersial semua cerita dan ilustrasi, serta cek merek Ruang Cendekia di PDKI.
2. Tetapkan harga final, isi paket, ketentuan akses, kebijakan pembatalan/pengembalian dana, dan kanal layanan pelanggan.
3. Siapkan proyek backend khusus Ruang Cendekia, autentikasi pelanggan, dan aturan akses berbasis RLS.
4. Hubungkan gateway pembayaran resmi di server; verifikasi webhook dan pastikan akses premium diberikan **hanya** setelah pembayaran terverifikasi.
5. Simpan konten premium pada layanan berproteksi; jangan menyertakan teks cerita premium dalam bundel JavaScript publik.
6. Uji alur pemesanan, pembayaran, akses, refund, dan keamanan sebelum mengaktifkan penjualan.
7. Ganti ilustrasi SVG sementara untuk seluruh cerita dengan karya faceless berkualitas setara ilustrasi buku cerita. Tiga contoh artwork awal masih membutuhkan proses publikasi sebagai aset aplikasi.

## Versi awal

- Desain kartu cerita dengan ilustrasi vektor faceless khusus untuk semua 15 cerita; ikon logo didigitalkan dalam format SVG mengikuti bentuk lingkaran hijau dan lengkungan emas dari referensi pengguna.
- 15 contoh obrolan nyata untuk orang tua beserta pertanyaan lanjutan di tahap Meneladani.
- Tampilan cerita, pertanyaan, dan refleksi bergaya kartu serta lebih konsisten pada perangkat seluler.


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
