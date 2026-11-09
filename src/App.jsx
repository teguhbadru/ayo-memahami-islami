import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth, AuthScreen, AccountBar } from './auth.jsx';

// Data lengkap 15 cerita berdasarkan modul 48 halaman
const LEVELS = [
  {
    level: 1,
    title: "Tingkat 1: Menemukan Fakta",
    desc: "Anak belajar menemukan informasi yang tertulis jelas di dalam bacaan.",
    color: "from-emerald-500 to-teal-600",
    badgeColor: "bg-emerald-100 text-emerald-800",
    stories: [
      {
        id: "1.1",
        title: "Bantuan untuk Nenek",
        category: "Tingkat 1: Menemukan Fakta",
        text: "Sepulang sekolah, Zaid melihat Nenek Fatimah berjalan pelan. Tangan Nenek membawa tas belanja yang besar.\n\n\"Assalamualaikum, Nek. Boleh Zaid bantu?\" tanya Zaid.\n\n\"Waalaikumsalam, Nak. Boleh,\" jawab Nenek.\n\nZaid membawakan tas itu sampai ke rumah Nenek. Nenek tersenyum dan berkata, \"Jazakallahu khairan, Zaid.\"\n\nZaid pulang dengan hati senang.",
        newWords: [{ term: "jazakallahu khairan", def: "semoga Allah membalasmu dengan kebaikan" }],
        lifeValue: "Tolong-menolong",
        lifeValueDesc: "Menolong tidak harus dengan hal besar. Membawakan tas pun sudah bernilai kebaikan.",
        reflect: "Kalau ada yang kesulitan di dekatmu, apa yang bisa kamu lakukan?",
        pearl: "\"Tolong-menolonglah kamu dalam kebaikan dan takwa.\" (QS. Al-Ma'idah: 2)",
        questions: [
          { q: "Siapa yang dibantu oleh Zaid?", type: "essay", answer: "Nenek Fatimah" },
          { q: "Apa yang dibawa oleh Nenek?", type: "mc", options: ["A. Tas sekolah", "B. Tas belanja yang besar", "C. Kardus kecil"], answer: "B" },
          { q: "Zaid membawakan tas itu sampai ke rumah Nenek.", type: "tf", answer: "Benar" },
          { q: "Apa yang Zaid ucapkan saat bertemu Nenek?", type: "essay", answer: "Assalamualaikum" }
        ]
      },
      {
        id: "1.2",
        title: "Bekal Aisyah",
        category: "Tingkat 1: Menemukan Fakta",
        text: "Aisyah membawa bekal roti isi cokelat ke sekolah. Saat istirahat, ia melihat Umar duduk sendiri. Umar lupa membawa bekal. Aisyah membagi rotinya menjadi dua.\n\n\"Bismillah,\" ucap mereka bersama-sama sebelum makan. Mereka makan sambil tertawa. Aisyah merasa senang.",
        newWords: [{ term: "bismillah", def: "dengan menyebut nama Allah" }],
        lifeValue: "Berbagi",
        lifeValueDesc: "Berbagi membuat makanan terasa lebih nikmat dan hati terasa lebih hangat.",
        reflect: "Pernahkah kamu berbagi dengan temanmu? Ceritakan.",
        pearl: "\"Makanan untuk satu orang cukup untuk dua orang.\" (HR. Bukhari dan Muslim)",
        questions: [
          { q: "Apa bekal Aisyah?", type: "mc", options: ["A. Nasi goreng", "B. Roti isi cokelat", "C. Mi goreng"], answer: "B" },
          { q: "Siapa yang duduk sendiri saat istirahat?", type: "essay", answer: "Umar" },
          { q: "Umar membawa bekal yang sangat banyak.", type: "tf", answer: "Salah" },
          { q: "Apa yang mereka ucapkan sebelum makan?", type: "essay", answer: "Bismillah" }
        ]
      },
      {
        id: "1.3",
        title: "Salman Berkata Jujur",
        category: "Tingkat 1: Menemukan Fakta",
        text: "Salman bermain bola di dalam rumah. Bola itu mengenai toples gula. Prang! Toples itu pecah.\n\nSalman takut dan ingin bersembunyi. Tetapi ia ingat pesan Ibu bahwa kejujuran membawa kepada kebaikan. Salman pun mengaku kepada Ibu. Ibu tersenyum dan memeluknya.",
        newWords: [{ term: "mengaku", def: "mengatakan hal yang sebenarnya" }],
        lifeValue: "Jujur",
        lifeValueDesc: "Berkata jujur kadang membuat takut, tetapi hati kita jadi tenang sesudahnya.",
        reflect: "Apa yang kamu rasakan setelah berkata jujur?",
        pearl: "\"Hendaklah kamu berlaku jujur, karena kejujuran membawa kepada kebaikan.\" (HR. Bukhari dan Muslim)",
        questions: [
          { q: "Apa yang dimainkan Salman di dalam rumah?", type: "essay", answer: "Bola" },
          { q: "Apa yang pecah?", type: "mc", options: ["A. Piring", "B. Toples gula", "C. Gelas"], answer: "B" },
          { q: "Salman bersembunyi dan tidak mengaku.", type: "tf", answer: "Salah" },
          { q: "Apa yang dilakukan Ibu setelah Salman mengaku?", type: "essay", answer: "Tersenyum dan memeluknya" }
        ]
      }
    ]
  },
  {
    level: 2,
    title: "Tingkat 2: Ide Pokok, Urutan, dan Kosakata",
    desc: "Anak belajar menangkap inti cerita, menyusun urutan kejadian, dan memahami arti kata dari konteksnya.",
    color: "from-blue-500 to-indigo-600",
    badgeColor: "bg-blue-100 text-blue-800",
    stories: [
      {
        id: "2.1",
        title: "Biji Kecil Pak Darso",
        category: "Tingkat 2: Ide Pokok, Urutan, dan Kosakata",
        text: "Dengan membaca bismillah, Pak Darso menanam biji jagung di kebunnya. Setiap pagi ia menyiram tanah itu. Hari pertama, tidak ada apa-apa. Hari kedua, tidak ada apa-apa juga. Pak Darso tetap sabar.\n\nSeminggu kemudian, tunas kecil muncul dari tanah. Beberapa bulan kemudian, pohon jagung itu tinggi dan berbuah banyak. Pak Darso berkata, \"Alhamdulillah.\" Kesabarannya terbayar.",
        newWords: [
          { term: "tunas", def: "tanaman kecil yang baru tumbuh" },
          { term: "terbayar", def: "mendapat hasil yang sepadan" }
        ],
        lifeValue: "Sabar",
        lifeValueDesc: "Hasil yang baik sering datang pelan-pelan. Orang sabar tidak berhenti di tengah jalan.",
        reflect: "Hal apa yang pernah kamu tunggu dengan sabar?",
        pearl: "\"Sesungguhnya Allah bersama orang-orang yang sabar.\" (QS. Al-Baqarah: 153)",
        questions: [
          { q: "Cerita ini paling cocok bercerita tentang...", type: "mc", options: ["A. Pak Darso yang sabar menanam jagung", "B. Cara memasak jagung", "C. Kebun yang sangat luas"], answer: "A" },
          { q: "Berapa lama waktu sampai tunas kecil muncul?", type: "essay", answer: "Seminggu" },
          { q: "Apa arti kata \"tunas\"?", type: "mc", options: ["A. Tanaman kecil yang baru tumbuh", "B. Buah jagung", "C. Air untuk menyiram"], answer: "A" },
          { q: "Pak Darso berhenti menyiram karena hari pertama tidak ada apa-apa.", type: "tf", answer: "Salah" }
        ]
      },
      {
        id: "2.2",
        title: "Fahri Merapikan Kamar",
        category: "Tingkat 2: Ide Pokok, Urutan, dan Kosakata",
        text: "Kamar Fahri sangat berantakan. Mainan berserakan di lantai. Buku menumpuk di atas kasur. Ibu berkata, \"Islam mengajarkan kita menjaga kebersihan. Ayo, rapikan kamarmu.\"\n\nMula-mula, Fahri mengumpulkan mainan ke dalam kotak. Lalu ia menyusun buku di rak. Terakhir, ia menyapu lantai. Kamar Fahri menjadi bersih dan nyaman. Fahri bangga karena menyelesaikannya sendiri.",
        newWords: [{ term: "berserakan", def: "tersebar tidak teratur di mana-mana" }],
        lifeValue: "Tanggung Jawab dan Kebersihan",
        lifeValueDesc: "Merapikan barang sendiri adalah latihan pertama menjadi anak yang bertanggung jawab.",
        reflect: "Tugas apa di rumah yang bisa kamu kerjakan tanpa disuruh?",
        pearl: "\"Bersuci adalah separuh dari iman.\" (HR. Muslim)",
        questions: [
          { q: "Cerita ini paling cocok bercerita tentang...", type: "mc", options: ["A. Fahri merapikan kamarnya", "B. Fahri bermain bola", "C. Ibu memasak di dapur"], answer: "A" },
          { q: "Di mana buku-buku menumpuk sebelum dirapikan?", type: "essay", answer: "Di atas kasur" },
          { q: "Apa arti kata \"berserakan\"?", type: "mc", options: ["A. Rapi di tempatnya", "B. Tersebar tidak teratur", "C. Bersih sekali"], answer: "B" },
          { q: "Fahri merapikan kamarnya dengan bantuan Ibu.", type: "tf", answer: "Salah" }
        ]
      },
      {
        id: "2.3",
        title: "Pak Joko dan Kue Pisang",
        category: "Tingkat 2: Ide Pokok, Urutan, dan Kosakata",
        text: "Setiap sore, Pak Joko menjual kue pisang di depan masjid. Suatu hari, seorang anak bernama Dita ingin membeli kue pisang. Uang Dita hanya cukup untuk satu kue kecil. Dita hampir menangis.\n\nPak Joko tersenyum dan memberinya tiga kue pisang. \"Ambillah, Nak,\" katanya. \"Jazakallahu khairan, Pak,\" kata Dita. Dita pulang dengan gembira. Pak Joko juga ikut bahagia.",
        newWords: [{ term: "gembira", def: "sangat senang" }],
        lifeValue: "Murah Hati",
        lifeValueDesc: "Kebaikan kecil dari orang dewasa bisa menjadi kenangan indah bagi seorang anak.",
        reflect: "Kebaikan kecil apa yang bisa kamu berikan kepada orang lain hari ini?",
        pearl: "\"Senyummu di hadapan saudaramu adalah sedekah.\" (HR. Tirmidzi)",
        questions: [
          { q: "Cerita ini paling cocok bercerita tentang...", type: "mc", options: ["A. Pak Joko yang berbaik hati kepada Dita", "B. Cara membuat kue pisang", "C. Masjid yang sangat besar"], answer: "A" },
          { q: "Pak Joko berjualan apa, dan di mana?", type: "essay", answer: "Kue pisang di depan masjid" },
          { q: "Apa arti kata \"gembira\"?", type: "mc", options: ["A. Sangat senang", "B. Sangat takut", "C. Sangat lelah"], answer: "A" },
          { q: "Dita membayar tiga kue pisang itu dengan uangnya.", type: "tf", answer: "Salah" }
        ]
      }
    ]
  },
  {
    level: 3,
    title: "Tingkat 3: Sebab-Akibat dan Perasaan Tokoh",
    desc: "Anak belajar memahami mengapa sesuatu terjadi dan apa yang dirasakan tokoh.",
    color: "from-amber-500 to-orange-600",
    badgeColor: "bg-amber-100 text-amber-800",
    stories: [
      {
        id: "3.1",
        title: "Layang-Layang Dimas",
        category: "Tingkat 3: Sebab-Akibat dan Perasaan Tokoh",
        text: "Dimas membuat layang-layang sendiri dari kertas dan bambu. Sore harinya, ia membawa layang-layang itu ke lapangan. Angin bertiup kencang, dan layang-layang Dimas terbang tinggi. Tiba-tiba benangnya putus! Layang-layang itu jatuh di atas pohon besar.\n\nDimas terduduk lesu. Melihat itu, Bayu mendekat. \"Jangan sedih, insya Allah kita bisa mengambilnya bersama,\" kata Bayu. Mereka mencari bambu panjang dan menggapai layang-layang itu hingga berhasil turun. Dimas tersenyum lebar.",
        newWords: [
          { term: "lesu", def: "tidak bersemangat" },
          { term: "menggapai", def: "menjangkau" }
        ],
        lifeValue: "Pantang Menyerah dan Persahabatan",
        lifeValueDesc: "Masalah terasa lebih ringan kalau dihadapi bersama teman yang baik.",
        reflect: "Kapan temanmu pernah membantumu? Apa yang kamu rasakan?",
        pearl: "\"Tidak sempurna iman seseorang hingga ia mencintai untuk saudaranya apa yang ia cintai untuk dirinya.\" (HR. Bukhari dan Muslim)",
        questions: [
          { q: "Mengapa layang-layang Dimas jatuh?", type: "essay", answer: "Karena benangnya putus" },
          { q: "Bagaimana perasaan Dimas saat layang-layangnya jatuh?", type: "mc", options: ["A. Gembira", "B. Sedih dan lesu", "C. Marah kepada Bayu"], answer: "B" },
          { q: "Apa arti kata \"lesu\"?", type: "mc", options: ["A. Tidak bersemangat", "B. Sangat cepat", "C. Sangat senang"], answer: "A" },
          { q: "Dimas membeli layang-layang itu di toko.", type: "tf", answer: "Salah" }
        ]
      },
      {
        id: "3.2",
        title: "Sepatu Baru Rani",
        category: "Tingkat 3: Sebab-Akibat dan Perasaan Tokoh",
        text: "Rani memakai sepatu lama milik kakaknya. Di sekolah, teman-temannya memakai sepatu baru mengilap. Rani menunduk malu. Pulang sekolah, ia bertemu Pak Ali, penjual koran tanpa alas kaki di bawah terik matahari.\n\nRani terdiam melihat kaki Pak Ali, lalu melihat sepatunya. Malam harinya, Rani berkata kepada Ibu, \"Bu, sepatuku masih bagus. Alhamdulillah, aku punya sepatu.\" Ibu memeluk Rani bangga.",
        newWords: [
          { term: "pudar", def: "warnanya berkurang atau memucat" },
          { term: "bersyukur", def: "berterima kasih atas apa yang dimiliki" }
        ],
        lifeValue: "Bersyukur",
        lifeValueDesc: "Rasa cukup membuat kita bahagia. Ada banyak orang yang memiliki lebih sedikit daripada kita.",
        reflect: "Apa tiga hal yang kamu syukuri hari ini?",
        pearl: "\"Jika kamu bersyukur, pasti Kami akan menambah (nikmat) kepadamu.\" (QS. Ibrahim: 7)",
        questions: [
          { q: "Mengapa Rani menyembunyikan kakinya di bawah meja?", type: "essay", answer: "Karena malu sepatunya sudah tua dan pudar" },
          { q: "Bagaimana perasaan Rani sesudah bertemu Pak Ali?", type: "mc", options: ["A. Semakin iri", "B. Sadar dan bersyukur", "C. Marah kepada Ibu"], answer: "B" },
          { q: "Apa arti kata \"bersyukur\"?", type: "mc", options: ["A. Berterima kasih atas apa yang dimiliki", "B. Meminta barang baru", "C. Menyembunyikan sesuatu"], answer: "A" },
          { q: "Sepatu Rani baru dibeli minggu lalu.", type: "tf", answer: "Salah" }
        ]
      },
      {
        id: "3.3",
        title: "Hutan Kecil Pak Ujang",
        category: "Tingkat 3: Sebab-Akibat dan Perasaan Tokoh",
        text: "Pak Ujang rajin merawat hutan kecil di belakang desa. Banyak warga menertawakannya. \"Untuk apa repot-repot?\" kata mereka. Pak Ujang menjawab, \"Alam ini amanah dari Allah.\"\n\nSuatu musim hujan, desa-desa sebelah mengalami banjir karena hutan mereka gundul. Namun, desa Pak Ujang aman karena akar pohon menahan air. Sejak itu, semua warga ikut menanam pohon bersama Pak Ujang.",
        newWords: [
          { term: "bibit", def: "tanaman muda yang siap ditanam" },
          { term: "gundul", def: "tidak berpohon" }
        ],
        lifeValue: "Peduli Lingkungan",
        lifeValueDesc: "Merawat alam hari ini berarti menjaga keselamatan kita di masa depan.",
        reflect: "Apa yang bisa kamu lakukan untuk menjaga lingkungan di sekitarmu?",
        pearl: "\"Tidaklah seorang muslim menanam tanaman... melainkan itu menjadi sedekah baginya.\" (HR. Bukhari & Muslim)",
        questions: [
          { q: "Mengapa desa Pak Ujang aman dari banjir?", type: "essay", answer: "Karena akar pohon menahan air dan menjaga tanah" },
          { q: "Mengapa desa-desa di sebelah mengalami banjir?", type: "mc", options: ["A. Hutan mereka sudah gundul", "B. Sungai terlalu kecil", "C. Tidak punya rumah"], answer: "A" },
          { q: "Apa arti kata \"gundul\"?", type: "mc", options: ["A. Tidak berpohon", "B. Penuh pohon", "C. Sangat basah"], answer: "A" }
        ]
      }
    ]
  },
  {
    level: 4,
    title: "Tingkat 4: Menyimpulkan dan Memprediksi",
    desc: "Anak belajar memahami hal yang tidak ditulis langsung (tersirat) dan menebak kelanjutan cerita.",
    color: "from-purple-500 to-pink-600",
    badgeColor: "bg-purple-100 text-purple-800",
    stories: [
      {
        id: "4.1",
        title: "Dompet di Jalan",
        category: "Tingkat 4: Menyimpulkan dan Memprediksi",
        text: "Sepulang sekolah, Arif menemukan dompet berisi uang dan foto nenek. Uang itu cukup untuk membeli sepak bola impiannya. Namun ia teringat pesan Ustaz bahwa barang temuan adalah amanah.\n\nArif mencari pemiliknya sesuai kartu nama: Ibu Salma di Gang Melati. Sore itu, Ibu Salma membuka pintu dan matanya berkaca-kaca, \"Dompet ini berisi uang obatku.\" Arif pulang tanpa bola, tetapi hatinya terasa ringan.",
        newWords: [
          { term: "menggenggam", def: "memegang erat" },
          { term: "amanah", def: "sesuatu yang dipercayakan dan wajib dijaga" }
        ],
        lifeValue: "Amanah dan Jujur",
        lifeValueDesc: "Menjaga amanah menuntut pengorbanan, tetapi memberi ketenangan hati yang luar biasa.",
        reflect: "Seandainya kamu jadi Arif, apa yang akan kamu lakukan?",
        pearl: "\"Sesungguhnya Allah menyuruh kamu menyampaikan amanat kepada yang berhak menerimanya.\" (QS. An-Nisa: 58)",
        questions: [
          { q: "Apa saja isi dompet yang ditemukan Arif?", type: "essay", answer: "Uang, kartu, dan foto seorang nenek" },
          { q: "Mengapa Arif berdiri lama sambil menggenggam dompet itu?", type: "mc", options: ["A. Ia bimbang antara memakai uangnya atau mengembalikannya", "B. Ia sedang lelah", "C. Ia lupa arah jalan pulang"], answer: "A" },
          { q: "Apa arti \"hatinya terasa ringan\"?", type: "mc", options: ["A. Arif merasa lega karena berbuat benar", "B. Arif sedang sakit", "C. Dompet itu sangat ringan"], answer: "A" },
          { q: "Menurutmu, apa yang mungkin dilakukan Ibu Salma setelah itu?", type: "essay", answer: "Berterima kasih dan mendoakan Arif" }
        ]
      },
      {
        id: "4.2",
        title: "Lomba Menggambar",
        category: "Tingkat 4: Menyimpulkan dan Memprediksi",
        text: "Sari mengikuti lomba menggambar dan membuat masjid di tengah sawah. Saat pengumuman, temannya Lia yang juara pertama. Dada Sari sesak dan matanya panas.\n\nNamun ia menarik napas, berdoa, lalu berdiri dan bertepuk tangan paling keras. \"Selamat, Lia!\" bisiknya. Sari menyadari menang atau kalah, ia tetap bangga karena sudah berusaha sebaik mungkin.",
        newWords: [
          { term: "sesak", def: "dada terasa berat, biasanya karena sedih" },
          { term: "lapang", def: "tenang dan tidak sempit" }
        ],
        lifeValue: "Sportivitas dan Menahan Diri",
        lifeValueDesc: "Menang atau kalah, yang terpenting kita sudah berusaha dan tetap menghargai orang lain.",
        reflect: "Pernahkah kamu kalah dalam lomba? Apa yang kamu lakukan?",
        pearl: "\"Orang yang kuat bukanlah yang menang bergulat, tetapi yang mampu menahan dirinya saat marah.\" (HR. Bukhari)",
        questions: [
          { q: "Siapa juara pertama lomba menggambar itu?", type: "essay", answer: "Lia" },
          { q: "Kalimat \"matanya terasa panas dan dadanya sesak\" menunjukkan Sari merasa...", type: "mc", options: ["A. Sedih dan kecewa", "B. Sangat gembira", "C. Lapar"], answer: "A" },
          { q: "Apa pesan utama cerita ini?", type: "mc", options: ["A. Hanya juara yang dibanggakan", "B. Berusaha sebaik mungkin dan menghargai orang lain lebih penting daripada menang", "C. Gambar masjid lebih indah"], answer: "B" }
        ]
      },
      {
        id: "4.3",
        title: "Celengan Kaleng Ayu",
        category: "Tingkat 4: Menyimpulkan dan Memprediksi",
        text: "Ayu menabung di celengan kaleng demi sepeda merah muda impiannya, serta rutin berinfak di Jumat. Di kantin, ia tergoda es krim cokelat, namun ia menahan diri dan memasukkan uangnya kembali ke saku.\n\nTiga bulan kemudian, celengan dibuka dan Ayah menambah sisanya. \"Hari ini kita beli sepedamu,\" kata Ayah dengan gembira.",
        newWords: [
          { term: "menyisihkan", def: "memisahkan sebagian untuk disimpan" },
          { term: "infak", def: "menyumbangkan sebagian harta di jalan kebaikan" }
        ],
        lifeValue: "Hemat dan Gemar Berinfak",
        lifeValueDesc: "Menahan keinginan kecil hari ini membantu meraih impian, dan berbagi membuat harta berkah.",
        reflect: "Apa yang ingin kamu miliki? Bagaimana caramu menabungnya?",
        pearl: "\"Janganlah kamu jadikan tanganmu terbelenggu pada lehermu...\" (QS. Al-Isra': 29)",
        questions: [
          { q: "Selain menabung, apa yang Ayu lakukan setiap hari Jumat?", type: "essay", answer: "Memasukkan sedikit uang ke kotak infak masjid" },
          { q: "Mengapa Ayu memasukkan uangnya kembali ke saku?", type: "mc", options: ["A. Ia memilih menahan diri demi sepeda impiannya", "B. Es krimnya habis", "C. Uangnya tidak cukup"], answer: "A" },
          { q: "Ayu membeli sepeda itu seluruhnya dengan uangnya sendiri.", type: "tf", answer: "Salah" }
        ]
      }
    ]
  },
  {
    level: 5,
    title: "Tingkat 5: Menilai, Meringkas, dan Menghubungkan",
    desc: "Anak belajar meringkas, memberi pendapat dengan alasan, dan menghubungkan isi cerita dengan pengalamannya.",
    color: "from-rose-600 to-red-700",
    badgeColor: "bg-rose-100 text-rose-800",
    stories: [
      {
        id: "5.1",
        title: "Persiapan Pak Kasim",
        category: "Tingkat 5: Menilai, Meringkas, dan Menghubungkan",
        text: "Pak Kasim memperbaiki atap rumah dan menyiapkan kayu bakar saat kemarau. Pak Rudi menertawakannya dan memilih bersantai. Saat hujan lebat turun tanpa henti, atap Pak Rudi bocor dan kayunya basah.\n\nDengan malu, Pak Rudi meminta berteduh di rumah Pak Kasim. Pak Kasim menyambutnya hangat dan berjanji membantu perbaikan esok hari. Pak Rudi belajar arti tidak menunda pekerjaan.",
        newWords: [
          { term: "bocor", def: "tembus air karena ada lubang" },
          { term: "menunda", def: "menangguhkan atau mengerjakan nanti" }
        ],
        lifeValue: "Bersiap dan Bekerja Keras",
        lifeValueDesc: "Bersantai itu boleh, tetapi masa depan perlu dipersiapkan sejak sekarang.",
        reflect: "Apa yang bisa kamu persiapkan hari ini agar esok lebih mudah?",
        pearl: "\"Hendaklah setiap orang memperhatikan apa yang telah diperbuatnya untuk hari esok.\" (QS. Al-Hasyr: 18)",
        questions: [
          { q: "Ceritakan kembali isi cerita dengan 2-3 kalimat.", type: "essay", answer: "Pak Kasim bersiap menghadapi musim hujan, sementara Pak Rudi mengejeknya. Saat hujan datang, rumah Rudi bocor dan ia ditolong oleh Kasim." },
          { q: "Menurutmu, apakah Pak Kasim bersikap baik kepada Pak Rudi?", type: "essay", answer: "Ya, karena dia tetap menolong meski pernah ditertawakan." },
          { q: "Mengapa sikap Pak Rudi berubah di akhir cerita?", type: "mc", options: ["A. Ia belajar pentingnya bersiap dan tidak menunda pekerjaan", "B. Ia mendapat kayu bakar gratis", "C. Ia takut kepada hujan"], answer: "A" }
        ]
      },
      {
        id: "5.2",
        title: "Kebun Masjid Desa Tirta",
        category: "Tingkat 5: Menilai, Meringkas, dan Menghubungkan",
        text: "Warga Desa Tirta sempat berdebat sengit karena masing-masing ingin fungsi kebun masjid berbeda (sayur, buah, taman baca). Pak Lurah mengajak bermusyawarah.\n\nNenek Ratih mengusulkan agar lahan dibagi tiga bagian. Semua sepakat. Hasil panen kebun itu akhirnya dibagikan kepada tetangga yang membutuhkan.",
        newWords: [
          { term: "mengalah", def: "mengurungkan keinginan demi kebaikan bersama" },
          { term: "bermusyawarah", def: "berunding untuk mencapai kesepakatan" }
        ],
        lifeValue: "Musyawarah dan Saling Menghargai",
        lifeValueDesc: "Perbedaan pendapat bisa menjadi kekuatan jika semua mau mendengarkan dan mencari jalan tengah.",
        reflect: "Bagaimana caramu menyelesaikan masalah ketika berbeda pendapat dengan teman?",
        pearl: "\"Bermusyawaratlah dengan mereka dalam urusan itu.\" (QS. Ali Imran: 159)",
        questions: [
          { q: "Tulis ringkasan cerita dengan 3 kalimat.", type: "essay", answer: "Warga berbeda keinginan membuat kebun. Pak Lurah menengahi dengan musyawarah. Nenek Ratih mengusulkan lahan dibagi tiga." },
          { q: "Mengapa masalah warga akhirnya selesai?", type: "essay", answer: "Karena mereka bermusyawarah dan mencari jalan tengah." },
          { q: "Apa yang paling menggambarkan sikap Nenek Ratih?", type: "mc", options: ["A. Suka mengatur", "B. Bijak mencari jalan tengah", "C. Tidak peduli"], answer: "B" }
        ]
      },
      {
        id: "5.3",
        title: "Tugas Kelompok Rendi",
        category: "Tingkat 5: Menilai, Meringkas, dan Menghubungkan",
        text: "Saat kerja kelompok poster kebersihan, Beni main game dan Wulan lupa. Tika kesal dan ingin melapor guru. Rendi bersabar dan mengajak mereka esoknya tanpa marah.\n\nAkhirnya Beni dan Wulan datang membantu, poster mendapat nilai terbaik. Rendi membuktikan bahwa kerja sukses diraih tanpa saling menyalahkan.",
        newWords: [
          { term: "kerangka", def: "bagian dasar atau garis besar" },
          { term: "menyalahkan", def: "mengatakan orang lain bersalah" }
        ],
        lifeValue: "Kerja Sama dan Saling Memaafkan",
        lifeValueDesc: "Kerja sama berhasil bukan karena tidak ada masalah, tetapi karena kita tidak saling menyalahkan.",
        reflect: "Peran apa yang biasanya kamu ambil dalam kerja kelompok?",
        pearl: "\"Sesungguhnya orang-orang mukmin itu bersaudara, maka damaikanlah...\" (QS. Al-Hujurat: 10)",
        questions: [
          { q: "Ceritakan kembali isi cerita dengan 3 kalimat.", type: "essay", answer: "Dua anggota kelompok tidak hadir. Rendi mengajak mereka dengan sabar tanpa marah. Tugas selesai dengan baik." },
          { q: "Bagaimana pendapatmu tentang tindakan Rendi?", type: "mc", options: ["A. Tepat, karena ia menyelesaikan masalah dengan sabar", "B. Kurang tepat, seharusnya langsung melapor", "C. Tidak penting"], answer: "A" },
          { q: "Mengapa \"tidak saling menyalahkan\" penting dalam kerja kelompok?", type: "essay", answer: "Agar suasana tetap tenang dan pekerjaan cepat selesai bersama." }
        ]
      }
    ]
  }
];

function AyoMemahamiAppInner() {
  const { supabase, user, profile, isConfigured } = useAuth();
  const [showAdultDashboard, setShowAdultDashboard] = useState(false);
  const [linkedStudents, setLinkedStudents] = useState([]);
  const [linkCode, setLinkCode] = useState('');
  const [linkMessage, setLinkMessage] = useState('');
  const [linkError, setLinkError] = useState('');
  const [linkBusy, setLinkBusy] = useState(false);
  const [currentView, setCurrentView] = useState("home"); // home, levels, story, monitor, certificate
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [userScores, setUserScores] = useState({}); // { "1.1": 5, "1.2": 4, ... }
  const [parentMode, setParentMode] = useState(false);
  const [answersState, setAnswersState] = useState({});
  const [checkedState, setCheckedState] = useState({});
  const [showFeedback, setShowFeedback] = useState({});

  // Load local guest progress or cloud progress for the signed-in student.
  useEffect(() => {
    if (user && profile?.role === 'student' && supabase) {
      supabase.from('student_progress').select('story_id,score').eq('student_id', user.id)
        .then(({ data, error }) => {
          if (error) console.error('Gagal memuat progres cloud:', error.message);
          else if (data) setUserScores(Object.fromEntries(data.map(row => [row.story_id, row.score])));
        });
      return;
    }
    if (!user) {
      const saved = localStorage.getItem("ayo_memahami_scores");
      if (saved) { try { setUserScores(JSON.parse(saved)); } catch (e) { console.error(e); } }
    }
  }, [user?.id, profile?.role, supabase]);

  const saveScore = async (storyId, score) => {
    const updated = { ...userScores, [storyId]: score };
    setUserScores(updated);
    if (user && profile?.role === 'student' && supabase) {
      const { error } = await supabase.from('student_progress').upsert(
        { student_id: user.id, story_id: storyId, score, completed_at: new Date().toISOString() },
        { onConflict: 'student_id,story_id' }
      );
      if (error) setShowFeedback(prev => ({...prev, [storyId]: 'Nilai belum tersinkron. Periksa koneksi lalu coba lagi.'}));
    } else {
      localStorage.setItem("ayo_memahami_scores", JSON.stringify(updated));
    }
  };

  const loadLinkedStudents = async () => {
    if (!supabase || !user) return;
    const { data: links, error } = await supabase.from('student_links').select('student_id').eq('adult_id', user.id);
    if (error) { setLinkError(error.message); return; }
    const ids = (links || []).map(x => x.student_id);
    if (!ids.length) { setLinkedStudents([]); return; }
    const results = await Promise.all([
      supabase.from('profiles').select('id,full_name,link_code').in('id', ids),
      supabase.from('student_progress').select('student_id,story_id,score,completed_at').in('student_id', ids)
    ]);
    const students = results[0].data || [];
    const progress = results[1].data || [];
    setLinkedStudents(students.map(student => ({
      ...student, progress: progress.filter(p => p.student_id === student.id)
    })));
  };

  useEffect(() => { if (showAdultDashboard && user) loadLinkedStudents(); }, [showAdultDashboard, user?.id]);

  const connectStudent = async (event) => {
    event.preventDefault(); setLinkBusy(true); setLinkError(''); setLinkMessage('');
    const { error } = await supabase.rpc('link_student_by_code', { p_code: linkCode });
    if (error) setLinkError(error.message);
    else { setLinkMessage('Siswa berhasil dihubungkan.'); setLinkCode(''); await loadLinkedStudents(); }
    setLinkBusy(false);
  };

  const handleAnswerChange = (storyId, qIdx, val) => {
    setAnswersState(prev => ({
      ...prev,
      [`${storyId}_${qIdx}`]: val
    }));
  };

  const handleCheckQuiz = (story) => {
    let correctCount = 0;
    story.questions.forEach((q, idx) => {
      const userAns = answersState[`${story.id}_${idx}`];
      if (userAns && userAns.trim().toLowerCase() === q.answer.trim().toLowerCase()) {
        correctCount++;
      } else if (q.type === 'mc' && userAns === q.answer) {
        correctCount++;
      } else if (q.type === 'tf' && userAns === q.answer) {
        correctCount++;
      } else if (q.type === 'essay' && userAns && userAns.length > 2) {
        // give credit for sensible essay answers
        correctCount++;
      }
    });
    const finalScore = Math.min(5, Math.max(1, Math.round((correctCount / story.questions.length) * 5)));
    saveScore(story.id, finalScore);
    setCheckedState(prev => ({ ...prev, [story.id]: true }));
    setShowFeedback(prev => ({ ...prev, [story.id]: `Luar biasa! Skor latihan kamu: ${finalScore} / 5` }));
  };

  const totalCompletedStories = Object.keys(userScores).length;

  if (isConfigured && !user) {
    return <AuthScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-slate-800 font-sans selection:bg-red-500 selection:text-white pb-16">
      {/* HEADER / NAVIGATION BAR */}
      {user && <AccountBar onDashboard={() => setShowAdultDashboard(true)} />}
      <header className="bg-gradient-to-r from-[#B70912] to-red-800 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentView("home")}>
            <div className="bg-white text-[#B70912] font-black p-2 rounded-xl shadow-md text-xl tracking-wider">
              📖 AM
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight">Ayo Memahami! Edisi Islami</h1>
              <p className="text-xs text-red-200">Modul Membaca Bertahap Usia 6-9 Tahun</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-2 md:mt-0">
            <button
              onClick={() => setCurrentView("home")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${currentView === 'home' ? 'bg-white/20 text-white font-bold' : 'hover:bg-white/10'}`}
            >
              Beranda
            </button>
            <button
              onClick={() => setCurrentView("levels")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${currentView === 'levels' ? 'bg-white/20 text-white font-bold' : 'hover:bg-white/10'}`}
            >
              5 Tingkat
            </button>
            <button
              onClick={() => setCurrentView("monitor")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${currentView === 'monitor' ? 'bg-white/20 text-white font-bold' : 'hover:bg-white/10'}`}
            >
              📊 Pemantauan
            </button>
            <button
              onClick={() => setCurrentView("certificate")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${currentView === 'certificate' ? 'bg-white/20 text-white font-bold' : 'hover:bg-white/10'}`}
            >
              🏆 Sertifikat
            </button>
            <button
              onClick={() => setParentMode(!parentMode)}
              className={`ml-2 px-3 py-1.5 rounded-lg text-xs font-bold border transition ${parentMode ? 'bg-amber-400 text-slate-900 border-amber-300' : 'bg-red-900/50 text-amber-200 border-red-700'}`}
              title="Aktifkan kunci jawaban dan panduan orang tua"
            >
              👨‍🏫 {parentMode ? "Mode Ortu: ON" : "Mode Ortu"}
            </button>
          </div>
        </div>
      </header>


      {showAdultDashboard && (
        <div className="fixed inset-0 z-[70] bg-slate-950/60 p-4 overflow-y-auto">
          <div className="max-w-4xl mx-auto my-8 bg-white rounded-3xl shadow-2xl p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between gap-3">
              <div><h2 className="text-2xl font-extrabold text-slate-900">Dashboard Pendamping</h2><p className="text-sm text-slate-500">Pantau kemajuan siswa yang terhubung dengan akun ini.</p></div>
              <button onClick={() => setShowAdultDashboard(false)} className="rounded-xl bg-slate-100 px-4 py-2 font-bold">Tutup ✕</button>
            </div>
            <form onSubmit={connectStudent} className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex flex-col sm:flex-row gap-3">
              <input value={linkCode} onChange={e=>setLinkCode(e.target.value)} placeholder="Masukkan kode keluarga siswa" className="flex-1 min-w-0 rounded-xl border border-amber-300 px-4 py-3 uppercase tracking-widest" required />
              <button disabled={linkBusy} className="bg-[#B70912] text-white font-bold px-5 py-3 rounded-xl disabled:opacity-60">{linkBusy?'Menghubungkan...':'Hubungkan Siswa'}</button>
            </form>
            {linkMessage && <p className="text-sm text-emerald-700">{linkMessage}</p>}
            {linkError && <p className="text-sm text-red-700">{linkError}</p>}
            {!linkedStudents.length ? <div className="text-center py-10 text-slate-500">Belum ada siswa terhubung. Minta kode keluarga dari akun siswa.</div> :
              <div className="grid md:grid-cols-2 gap-4">{linkedStudents.map(student => (
                <div key={student.id} className="border border-slate-200 rounded-2xl p-5">
                  <h3 className="font-bold text-lg text-slate-900">{student.full_name}</h3>
                  <p className="text-xs text-slate-500 mb-3">Selesai {student.progress.length}/15 cerita</p>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-3"><div className="h-full bg-emerald-500" style={{width: (Math.min(100,student.progress.length/15*100)) + '%'}} /></div>
                  <div className="grid grid-cols-3 gap-2">{student.progress.map(p=><div key={p.story_id} className="bg-slate-50 rounded-lg p-2 text-center"><p className="text-xs text-slate-500">{p.story_id}</p><p className="font-bold text-[#B70912]">{p.score}/5</p></div>)}</div>
                </div>
              ))}</div>}
          </div>
        </div>
      )}

      {/* MAIN CONTAINER */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        
        {/* VIEW 1: HOME (DASHBOARD) */}
        {currentView === "home" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Hero Section */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-red-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-55 -z-0 pointer-events-none"></div>
              <div className="relative z-10 max-w-2xl">
                <span className="inline-block bg-red-100 text-[#B70912] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  🌟 Belajar Memahami Bacaan Bertahap
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
                  Membaca Bukan Sekadar Bisa, Tapi <span className="text-[#B70912]">Memahami & Merenungkan!</span>
                </h2>
                <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
                  Selamat datang di aplikasi interaktif <strong className="text-slate-800">Ayo Memahami! Edisi Islami</strong>. Disusun oleh Syahrul Ilmi untuk anak usia 6-9 tahun. Dilengkapi cerita Islami pilihan, kotak kata baru, latihan kuis, mutiara hikmah, dan lembar pemantauan.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setCurrentView("levels")}
                    className="bg-[#B70912] hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-red-500/30 transition transform hover:-translate-y-0.5 flex items-center space-x-2"
                  >
                    <span>🚀 Mulai Belajar Sekarang</span>
                  </button>
                  <button
                    onClick={() => setCurrentView("monitor")}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3.5 rounded-2xl transition flex items-center space-x-2 border border-slate-200"
                  >
                    <span>📈 Lihat Kemajuan ({totalCompletedStories}/15 Cerita)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick 5 Levels Overview */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">✨ Tangga 5 Tingkat Pemahaman</h3>
                <button onClick={() => setCurrentView("levels")} className="text-sm font-semibold text-[#B70912] hover:underline">
                  Lihat Semua Cerita &rarr;
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {LEVELS.map((lvl) => (
                  <div
                    key={lvl.level}
                    onClick={() => { setSelectedLevel(lvl); setCurrentView("levels"); }}
                    className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition cursor-pointer border border-slate-100 flex flex-col justify-between group"
                  >
                    <div>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${lvl.color} text-white font-bold flex items-center justify-center text-lg mb-3 shadow-md group-hover:scale-105 transition`}>
                        {lvl.level}
                      </div>
                      <h4 className="font-bold text-slate-800 text-base mb-1">{lvl.title}</h4>
                      <p className="text-xs text-slate-500 line-clamp-3">{lvl.desc}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#B70912]">
                      <span>{lvl.stories.length} Cerita</span>
                      <span>&rarr;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips for Parents Banner */}
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl p-6 md:p-8 border border-amber-200 text-amber-900">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">💡</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Panduan Singkat untuk Orang Tua & Guru</h4>
                  <p className="text-sm text-amber-800 leading-relaxed mb-3">
                    Gunakan pola 3 sesi per cerita: Sesi 1 (Baca & kenali), Sesi 2 (Jawab mandiri), dan Sesi 3 (Bahas Mutiara Hikmah). Jangan lupa biasakan anak mencari bukti di teks dengan pertanyaan <span className="italic">"Dari mana kamu tahu?"</span>.
                  </p>
                  <button
                    onClick={() => setParentMode(true)}
                    className="bg-amber-800 text-amber-100 hover:bg-amber-900 text-xs font-bold px-4 py-2 rounded-xl transition"
                  >
                    Aktifkan Mode Ortu untuk Kunci Jawaban
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: LEVELS & STORY LIST */}
        {currentView === "levels" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <button
                  onClick={() => setCurrentView("home")}
                  className="text-sm text-slate-500 hover:text-[#B70912] font-medium mb-1 inline-flex items-center"
                >
                  &larr; Kembali ke Beranda
                </button>
                <h2 className="text-3xl font-extrabold text-slate-900">Pilih Tingkatan & Cerita</h2>
              </div>
            </div>

            <div className="space-y-8">
              {LEVELS.map((lvl) => (
                <div key={lvl.level} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                  <div className={`bg-gradient-to-r ${lvl.color} px-6 py-4 text-white flex flex-col md:flex-row md:items-center justify-between`}>
                    <div>
                      <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Tingkat {lvl.level}
                      </span>
                      <h3 className="text-xl font-bold mt-1">{lvl.title}</h3>
                      <p className="text-xs text-white/90 mt-0.5">{lvl.desc}</p>
                    </div>
                  </div>

                  <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {lvl.stories.map((story) => {
                      const isDone = userScores[story.id] !== undefined;
                      return (
                        <div
                          key={story.id}
                          onClick={() => { setSelectedLevel(lvl); setSelectedStory(story); setCurrentView("story"); }}
                          className="bg-slate-50 hover:bg-red-50/50 rounded-2xl p-5 border border-slate-200 hover:border-red-300 transition cursor-pointer flex flex-col justify-between group relative"
                        >
                          {isDone && (
                            <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded-full">
                              Skor: {userScores[story.id]}/5 ⭐
                            </span>
                          )}
                          <div>
                            <span className="text-xs font-bold text-slate-400 group-hover:text-[#B70912]">Cerita {story.id}</span>
                            <h4 className="font-bold text-slate-900 text-lg mt-1 mb-2 group-hover:text-[#B70912] transition">{story.title}</h4>
                            <p className="text-xs text-slate-600 line-clamp-2">{story.text}</p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#B70912]">
                            <span>Nilai: {story.lifeValue}</span>
                            <span>Baca Cerita &rarr;</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: STORY & QUIZ */}
        {currentView === "story" && selectedStory && (
          <div className="space-y-6 animate-fadeIn max-w-3xl mx-auto">
            {/* Navigation back */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentView("levels")}
                className="text-sm text-slate-500 hover:text-[#B70912] font-medium inline-flex items-center"
              >
                &larr; Kembali ke Daftar Cerita
              </button>
              <span className="bg-red-100 text-[#B70912] text-xs font-bold px-3 py-1 rounded-full">
                {selectedStory.category}
              </span>
            </div>

            {/* Story Card */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-red-100 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-slate-400">Cerita {selectedStory.id}</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">{selectedStory.title}</h2>
              </div>

              {/* Story Body Text */}
              <div className="prose text-slate-700 text-base md:text-lg leading-relaxed whitespace-pre-line bg-orange-50/40 p-6 rounded-2xl border border-orange-100">
                {selectedStory.text}
              </div>

              {/* New Words Box */}
              {selectedStory.newWords && selectedStory.newWords.length > 0 && (
                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200">
                  <h4 className="font-bold text-amber-900 text-sm mb-2">📚 Kata Baru</h4>
                  <ul className="space-y-1">
                    {selectedStory.newWords.map((nw, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-amber-800">
                        <strong className="text-amber-950 font-semibold">{nw.term}</strong> = {nw.def}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Life Value & Reflection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-[#B70912] text-sm mb-1">🌟 Nilai Kehidupan: {selectedStory.lifeValue}</h4>
                  <p className="text-xs md:text-sm text-slate-700">{selectedStory.lifeValueDesc}</p>
                </div>
                <div className="bg-teal-50 p-5 rounded-2xl border border-teal-100">
                  <h4 className="font-bold text-teal-800 text-sm mb-1">💭 Renungkan</h4>
                  <p className="text-xs md:text-sm text-slate-700 italic">{selectedStory.reflect}</p>
                </div>
              </div>

              {/* Pearl of Wisdom (Mutiara Hikmah) */}
              <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-6 rounded-2xl shadow-md">
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">💎 Mutiara Hikmah</span>
                <p className="text-sm md:text-base font-medium italic mt-2 text-slate-100">{selectedStory.pearl}</p>
              </div>

              {/* QUIZ SECTION ("Ayo Jawab!") */}
              <div className="pt-6 border-t border-slate-200 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">✍️ Ayo Jawab!</h3>
                  {userScores[selectedStory.id] !== undefined && (
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                      Tersimpan: {userScores[selectedStory.id]}/5 ⭐
                    </span>
                  )}
                </div>

                <div className="space-y-6">
                  {selectedStory.questions.map((q, qIdx) => (
                    <div key={qIdx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                      <p className="font-semibold text-slate-800 text-sm md:text-base">
                        {qIdx + 1}. {q.q}
                      </p>

                      {/* Multiple Choice */}
                      {q.type === 'mc' && (
                        <div className="space-y-2">
                          {q.options.map((opt, oIdx) => {
                            const isSelected = answersState[`${selectedStory.id}_${qIdx}`] === opt[0];
                            return (
                              <button
                                key={oIdx}
                                onClick={() => handleAnswerChange(selectedStory.id, qIdx, opt[0])}
                                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition border ${isSelected ? 'bg-red-500 text-white border-red-600 shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* True / False */}
                      {q.type === 'tf' && (
                        <div className="flex space-x-3">
                          {['Benar', 'Salah'].map((tfVal) => {
                            const isSelected = answersState[`${selectedStory.id}_${qIdx}`] === tfVal;
                            return (
                              <button
                                key={tfVal}
                                onClick={() => handleAnswerChange(selectedStory.id, qIdx, tfVal)}
                                className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition border ${isSelected ? 'bg-[#B70912] text-white border-red-700 shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                              >
                                {tfVal}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Essay */}
                      {q.type === 'essay' && (
                        <input
                          type="text"
                          placeholder="Tulis jawabanmu di sini..."
                          value={answersState[`${selectedStory.id}_${qIdx}`] || ''}
                          onChange={(e) => handleAnswerChange(selectedStory.id, qIdx, e.target.value)}
                          className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      )}

                      {/* Parent / Teacher Answer Key Preview */}
                      {parentMode && (
                        <div className="mt-2 p-3 bg-amber-100 rounded-xl text-xs text-amber-900 border border-amber-300">
                          <strong>🔑 Kunci Jawaban Ortu:</strong> {q.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Submit Quiz Button */}
                <div className="pt-4 flex flex-col items-center space-y-3">
                  <button
                    onClick={() => handleCheckQuiz(selectedStory)}
                    className="w-full bg-[#B70912] hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-red-500/30 transition transform hover:-translate-y-0.5 text-center"
                  >
                    Periksa Jawaban & Simpan Nilai 🎯
                  </button>

                  {showFeedback[selectedStory.id] && (
                    <div className="w-full p-4 bg-emerald-50 text-emerald-800 rounded-2xl font-bold text-center border border-emerald-200 animate-bounce">
                      {showFeedback[selectedStory.id]}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 4: LEMBAR PEMANTAUAN (MONITORING) */}
        {currentView === "monitor" && (
          <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <button
                  onClick={() => setCurrentView("home")}
                  className="text-sm text-slate-500 hover:text-[#B70912] font-medium mb-1 inline-flex items-center"
                >
                  &larr; Kembali ke Beranda
                </button>
                <h2 className="text-3xl font-extrabold text-slate-900">📈 Lembar Pemantauan Kemajuan</h2>
              </div>
              <button
                onClick={() => {
                  if (confirm("Reset seluruh skor kemajuan?")) {
                    setUserScores({});
                    localStorage.removeItem("ayo_memahami_scores");
                  }
                }}
                className="text-xs text-red-600 hover:underline font-semibold"
              >
                Reset Data
              </button>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Catatan Skor Per Cerita (Target /5)</h3>
                  <p className="text-xs text-slate-500">Selesaikan ke-15 cerita untuk membuka sertifikat Pemikir Cerdas!</p>
                </div>
                <div className="bg-red-100 text-[#B70912] px-4 py-2 rounded-2xl font-bold text-sm">
                  Total Selesai: {totalCompletedStories} / 15
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
                      <th className="p-4">No</th>
                      <th className="p-4">Judul Cerita</th>
                      <th className="p-4">Tingkat</th>
                      <th className="p-4 text-center">Skor (Maks 5)</th>
                      <th className="p-4 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {LEVELS.flatMap(lvl => lvl.stories).map((story, idx) => {
                      const score = userScores[story.id];
                      return (
                        <tr key={story.id} className="hover:bg-slate-50 transition">
                          <td className="p-4 font-bold text-slate-400">{idx + 1}</td>
                          <td className="p-4 font-bold text-slate-800">{story.id} - {story.title}</td>
                          <td className="p-4 text-slate-500 text-xs">{story.category.split(':')[0]}</td>
                          <td className="p-4 text-center font-bold text-[#B70912]">
                            {score !== undefined ? `${score} ⭐` : "-"}
                          </td>
                          <td className="p-4 text-center">
                            {score !== undefined ? (
                              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">Selesai</span>
                            ) : (
                              <span className="bg-slate-100 text-slate-500 text-xs font-medium px-2.5 py-1 rounded-full">Belum</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 5: CERTIFICATE */}
        {currentView === "certificate" && (
          <div className="space-y-6 animate-fadeIn max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentView("home")}
                className="text-sm text-slate-500 hover:text-[#B70912] font-medium mb-1 inline-flex items-center"
              >
                &larr; Kembali ke Beranda
              </button>
            </div>

            {/* Certificate Card */}
            <div className="bg-gradient-to-br from-amber-50 via-white to-amber-100 p-8 md:p-12 rounded-3xl shadow-2xl border-8 border-amber-300 relative text-center space-y-6">
              <div className="absolute top-4 left-4 text-3xl">🌙</div>
              <div className="absolute top-4 right-4 text-3xl">⭐</div>

              <div className="space-y-2">
                <span className="bg-red-100 text-[#B70912] font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest">
                  Sertifikat Penghargaan Resmi
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#B70912] tracking-wide pt-2 font-serif">
                  PEMIKIR CERDAS
                </h2>
                <p className="text-amber-900 font-medium italic text-lg">Barakallahu fiik</p>
              </div>

              <div className="py-4 space-y-3">
                <p className="text-sm text-slate-600">Diberikan dengan bangga kepada anak hebat:</p>
                <div className="inline-block border-b-2 border-slate-800 px-8 py-1">
                  <span className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">Anak Shaleh / Shalehah</span>
                </div>
                <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed pt-2">
                  yang telah menyelesaikan 5 tingkat dan 15 cerita dalam modul <strong className="text-slate-900">"Ayo Memahami!"</strong> dan kini mampu memahami, menilai, serta merenungkan bacaan.
                </p>
              </div>

              <div className="pt-6 border-t border-amber-200 flex justify-between items-center text-xs md:text-sm text-slate-600 font-medium">
                <div>
                  <p>Tanggal: {new Date().toLocaleDateString('id-ID')}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900">Syahrul Ilmi</p>
                  <p>Pustaka Hasan Cendikia</p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => window.print()}
                  className="bg-[#B70912] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-2xl shadow-lg transition"
                >
                  🖨️ Cetak / Simpan Sertifikat
                </button>
              </div>
            </div>
          </div>
        )}

      </main>


      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto px-4 mt-16 pt-6 border-t border-slate-200 text-center text-xs text-slate-500 space-y-1">
        <p>Ayo Memahami! Modul Latihan Memahami Bacaan Bertahap Edisi Islami oleh Syahrul Ilmi.</p>
        <p>Dirancang khusus untuk anak usia 6-9 tahun (Kelas 1-3 SD).</p>
      </footer>
    </div>
  );
}

export default function AyoMemahamiApp() {
  return <AuthProvider><AyoMemahamiAppInner /></AuthProvider>;
}
