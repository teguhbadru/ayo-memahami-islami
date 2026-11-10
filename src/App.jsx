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
  const [parentMode, setParentMode] = useState(false);
  const [oralQuestionIndex, setOralQuestionIndex] = useState(0);
  const [showOralAnswer, setShowOralAnswer] = useState(false);
  const [completedStories, setCompletedStories] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("ayo_memahami_completed_v1") || "null");
      const validIds = new Set(LEVELS.flatMap(level => level.stories.map(story => story.id)));
      if (Array.isArray(saved)) return [...new Set(saved.filter(id => validIds.has(id)))];
      // Pertahankan tanda selesai untuk pengguna yang sebelumnya sudah mengerjakan kuis.
      const previous = JSON.parse(localStorage.getItem("ayo_memahami_scores") || "{}");
      return Object.keys(previous || {}).filter(id => validIds.has(id));
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("ayo_memahami_completed_v1", JSON.stringify(completedStories));
    } catch (error) {
      console.error("Tidak dapat menyimpan progres kegiatan:", error);
    }
  }, [completedStories]);

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

  const openStory = (level, story) => {
    setSelectedLevel(level);
    setSelectedStory(story);
    setOralQuestionIndex(0);
    setShowOralAnswer(false);
    setCurrentView("story");
  };

  const changeOralQuestion = (index) => {
    setOralQuestionIndex(index);
    setShowOralAnswer(false);
  };

  const markStoryComplete = () => {
    if (!selectedStory) return;
    setCompletedStories(previous => previous.includes(selectedStory.id)
      ? previous
      : [...previous, selectedStory.id]);
  };

  const totalCompletedStories = completedStories.length;

  // Semua cerita bisa dibaca tanpa akun. Orang tua membimbing pertanyaan secara lisan.

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
              <p className="text-xs text-red-200">Aktivitas menyimak dan memahami cerita bersama anak</p>
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
              📚 Cerita Selesai
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
                  💛 WAKTU BERKUALITAS BERSAMA ANAK
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
                  Cerita Sederhana, <span className="text-[#B70912]">Percakapan Bermakna.</span>
                </h2>
                <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed">
                  <strong className="text-slate-800">Ayo Memahami! Edisi Islami</strong> adalah teman bagi orang tua untuk meluangkan waktu bersama anak usia 6–9 tahun. Bacakan cerita Islami, ajukan pertanyaan, lalu dengarkan jawaban anak secara lisan. Anak bisa berlatih menyimak dan memahami cerita tanpa perlu menatap layar atau mengetik.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1.5 text-xs font-semibold text-amber-900">📖 15 Cerita Islami</span>
                  <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-xs font-semibold text-emerald-800">✨ 5 Tingkatan</span>
                  <span className="rounded-full bg-red-50 border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-800">💛 Tanpa Login</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setCurrentView("levels")}
                    className="bg-[#B70912] hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-red-500/30 transition transform hover:-translate-y-0.5 flex items-center space-x-2"
                  >
                    <span>💛 Mulai Cerita Bersama</span>
                  </button>
                  <button
                    onClick={() => setCurrentView("monitor")}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3.5 rounded-2xl transition flex items-center space-x-2 border border-slate-200"
                  >
                    <span>📖 Cerita Selesai ({totalCompletedStories}/15)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Panduan membaca bersama anak, tanpa harus mengisi kuis */}
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl p-6 md:p-8 border border-amber-200 text-amber-950">
              <div className="flex items-start gap-3 mb-5">
                <span className="text-3xl" aria-hidden="true">💛</span>
                <div>
                  <h3 className="font-bold text-xl mb-1">Cara Menggunakan Bersama Anak</h3>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    Cukup luangkan beberapa menit untuk bercerita dan mengobrol. Orang tua memegang HP, anak cukup mendengarkan dan menjawab secara lisan.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white/75 border border-amber-200 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-amber-800 text-white text-xs font-bold flex items-center justify-center">1</span>
                    <h4 className="font-bold text-sm">Pilih cerita</h4>
                  </div>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    Buka menu <strong>5 Tingkat</strong> dan pilih cerita sesuai kemampuan anak.
                  </p>
                </div>
                <div className="bg-white/75 border border-amber-200 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-amber-800 text-white text-xs font-bold flex items-center justify-center">2</span>
                    <h4 className="font-bold text-sm">Bacakan dan tanyakan</h4>
                  </div>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    Bacakan cerita dengan tenang. Setelah itu bacakan pertanyaan satu per satu dan beri anak waktu untuk berpikir.
                  </p>
                </div>
                <div className="bg-white/75 border border-amber-200 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-full bg-amber-800 text-white text-xs font-bold flex items-center justify-center">3</span>
                    <h4 className="font-bold text-sm">Dengarkan dan diskusikan</h4>
                  </div>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    Dengarkan jawaban anak tanpa terburu-buru membenarkan. Setelahnya, bicarakan nilai kebaikan dan hikmah dari cerita.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-xs text-amber-900 leading-relaxed">
                  💡 <strong>Tips:</strong> Anak tidak harus menjawab sempurna. Aktifkan Mode Ortu untuk melihat panduan jawaban saat mendampingi.
                </p>
                {parentMode ? (
                  <span className="text-xs font-bold text-emerald-800 bg-white/75 border border-emerald-200 rounded-xl px-4 py-2 shrink-0">
                    ✓ Mode Ortu aktif
                  </span>
                ) : (
                  <button onClick={() => setParentMode(true)}
                    className="bg-amber-800 text-white hover:bg-amber-900 text-xs font-bold px-4 py-2.5 rounded-xl transition shrink-0">
                    Aktifkan Mode Ortu
                  </button>
                )}
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
                <h2 className="text-3xl font-extrabold text-slate-900">Pilih Cerita untuk Dibacakan</h2>
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
                      const isDone = completedStories.includes(story.id);
                      return (
                        <div
                          key={story.id}
                          onClick={() => openStory(lvl, story)}
                          className="bg-slate-50 hover:bg-red-50/50 rounded-2xl p-5 border border-slate-200 hover:border-red-300 transition cursor-pointer flex flex-col justify-between group relative"
                        >
                          {isDone && (
                            <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded-full">
                              ✓ Sudah dibaca
                            </span>
                          )}
                          <div>
                            <span className="text-xs font-bold text-slate-400 group-hover:text-[#B70912]">Cerita {story.id}</span>
                            <h4 className="font-bold text-slate-900 text-lg mt-1 mb-2 group-hover:text-[#B70912] transition">{story.title}</h4>
                            <p className="text-xs text-slate-600 line-clamp-2">{story.text}</p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#B70912]">
                            <span>Nilai: {story.lifeValue}</span>
                            <span>Mulai Baca Bersama &rarr;</span>
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

            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-900 leading-relaxed">
              <strong>💛 Untuk orang tua:</strong> Bacakan cerita di bawah ini. Anak cukup mendengarkan.
              Setelah selesai, ajukan pertanyaan satu per satu dan ajak anak mengobrol tentang hikmahnya.
            </div>
            {/* Story Card */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-red-100 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-slate-400">📖 Langkah 1 · Bacakan cerita {selectedStory.id}</span>
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

              {/* Tahap tanya jawab secara lisan, satu soal per layar */}
              <section className="pt-6 border-t border-slate-200 space-y-4" aria-label="Pertanyaan untuk dibacakan orang tua">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#B70912] mb-1">💬 Langkah 2 · Ajak anak menjawab</p>
                    <h3 className="text-xl font-extrabold text-slate-900">Tanyakan Secara Lisan</h3>
                  </div>
                  <span className="rounded-full bg-red-50 text-[#B70912] px-3 py-1.5 text-xs font-bold">
                    Pertanyaan {oralQuestionIndex + 1} dari {selectedStory.questions.length}
                  </span>
                </div>
                <p className="text-sm text-slate-600">
                  Bacakan pertanyaan ini, lalu beri anak waktu menjawab dengan kata-katanya sendiri.
                  Tidak perlu mengetik jawaban atau mengejar nilai.
                </p>
                <div className="h-2 rounded-full bg-red-100 overflow-hidden" aria-hidden="true">
                  <div className="h-full bg-[#B70912] rounded-full transition-all duration-300"
                    style={{width: ((oralQuestionIndex + 1) / selectedStory.questions.length * 100) + '%'}} />
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-200 p-5 md:p-7 space-y-4">
                  <p className="text-xs font-bold tracking-wide uppercase text-amber-900">Bacakan pertanyaan berikut</p>
                  <p className="text-xl md:text-2xl font-bold text-slate-900 leading-relaxed">
                    {selectedStory.questions[oralQuestionIndex]?.q}
                  </p>
                  {selectedStory.questions[oralQuestionIndex]?.type === 'mc' && (
                    <div className="rounded-xl bg-white border border-amber-100 p-4 space-y-2">
                      <p className="text-xs font-bold text-slate-600">Bacakan juga pilihan jawabannya:</p>
                      {selectedStory.questions[oralQuestionIndex].options.map((option, index) => (
                        <p key={index} className="text-sm text-slate-700">{option}</p>
                      ))}
                    </div>
                  )}
                  {selectedStory.questions[oralQuestionIndex]?.type === 'tf' && (
                    <p className="text-sm text-amber-900 font-medium">Tanyakan: “Menurutmu, benar atau salah?”</p>
                  )}

                  {(parentMode || showOralAnswer) ? (
                    <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 space-y-2" role="note">
                      <p className="text-xs font-bold uppercase tracking-wide text-emerald-800">🔑 Panduan jawaban untuk orang tua</p>
                      <p className="font-semibold text-emerald-950">
                        {selectedStory.questions[oralQuestionIndex]?.answer}
                      </p>
                      <p className="text-xs text-emerald-900">Gunakan sebagai panduan diskusi, bukan untuk menuntut anak menjawab persis sama.</p>
                    </div>
                  ) : (
                    <button type="button" onClick={() => setShowOralAnswer(true)}
                      className="w-full sm:w-auto text-sm font-bold text-[#B70912] bg-white border border-red-200 hover:bg-red-50 rounded-xl px-4 py-2.5 transition">
                      👁️ Lihat panduan jawaban
                    </button>
                  )}
                  {!parentMode && showOralAnswer && (
                    <button type="button" onClick={() => setShowOralAnswer(false)}
                      className="text-xs text-slate-500 hover:text-[#B70912] underline">
                      Sembunyikan jawaban
                    </button>
                  )}
                </div>

                <div className="flex items-center justify-between gap-3">
                  <button type="button" disabled={oralQuestionIndex === 0}
                    onClick={() => changeOralQuestion(oralQuestionIndex - 1)}
                    className="px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition">
                    ← Sebelumnya
                  </button>
                  <button type="button" disabled={oralQuestionIndex === selectedStory.questions.length - 1}
                    onClick={() => changeOralQuestion(oralQuestionIndex + 1)}
                    className="px-4 py-3 rounded-xl text-sm font-bold bg-[#B70912] text-white disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed hover:bg-red-800 transition">
                    Pertanyaan Berikutnya →
                  </button>
                </div>
              </section>

              {/* Refleksi setelah orang tua selesai mengajukan pertanyaan */}
              <div className="pt-6 border-t border-slate-200">
                <p className="text-xs font-bold uppercase tracking-widest text-[#B70912] mb-2">💛 Langkah 3 · Diskusikan hikmah bersama</p>
                <p className="text-sm text-slate-600 mb-4">Ajak anak menghubungkan pesan cerita dengan pengalaman sehari-hari.</p>
              </div>
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


              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="font-bold text-emerald-900">Selesai membaca dan berdiskusi?</h4>
                  <p className="text-sm text-emerald-800 mt-1">
                    Tandai aktivitas ini sudah dilakukan bersama. Tidak ada nilai atau jawaban yang perlu dikirim.
                  </p>
                </div>
                {completedStories.includes(selectedStory.id) ? (
                  <span className="shrink-0 rounded-xl bg-white border border-emerald-200 text-emerald-800 font-bold text-sm px-4 py-3">✓ Sudah selesai bersama</span>
                ) : (
                  <button type="button" onClick={markStoryComplete}
                    className="shrink-0 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-5 py-3 transition">
                    ✓ Tandai Cerita Selesai
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* VIEW 4: CATATAN KEGIATAN MEMBACA BERSAMA */}
        {currentView === "monitor" && (
          <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <button onClick={() => setCurrentView("home")}
                  className="text-sm text-slate-500 hover:text-[#B70912] font-medium mb-2">← Kembali ke Beranda</button>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">📚 Catatan Cerita Bersama</h2>
                <p className="text-sm text-slate-600 mt-2">
                  Catatan sederhana cerita yang sudah dibacakan dan didiskusikan bersama anak.
                  Progres tersimpan di browser perangkat ini, tanpa akun.
                </p>
              </div>
              <button onClick={() => {
                if (confirm("Hapus semua tanda cerita yang sudah selesai di perangkat ini?")) {
                  setCompletedStories([]);
                  localStorage.removeItem("ayo_memahami_scores");
                }
              }} className="text-sm text-red-700 border border-red-200 bg-white hover:bg-red-50 rounded-xl px-4 py-2 font-semibold shrink-0">
                Reset Catatan
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-red-100 shadow-sm overflow-hidden">
              <div className="p-5 md:p-6 bg-amber-50 border-b border-amber-100 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Perjalanan Bercerita Bersama</h3>
                  <p className="text-sm text-slate-600">Tidak ada skor. Yang penting waktu bersama dan percakapan yang terjadi.</p>
                </div>
                <div className="bg-[#B70912] text-white px-4 py-2 rounded-2xl font-bold text-sm">
                  {totalCompletedStories} dari 15 cerita
                </div>
              </div>
              <div className="h-2 bg-red-100">
                <div className="h-full bg-[#B70912] transition-all duration-300"
                  style={{width: (totalCompletedStories / 15 * 100) + '%'}} />
              </div>
              <div className="divide-y divide-slate-100">
                {LEVELS.flatMap(level => level.stories.map(story => ({level, story}))).map(({level, story}) => {
                  const done = completedStories.includes(story.id);
                  return (
                    <div key={story.id} className="p-4 md:px-6 flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-xs text-slate-500">Tingkat {level.level} · Cerita {story.id}</p>
                        <h4 className="font-bold text-slate-900">{story.title}</h4>
                        <p className="text-xs text-slate-500">Nilai kehidupan: {story.lifeValue}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 shrink-0">
                        <span className={done
                          ? "bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full"
                          : "bg-slate-100 text-slate-500 text-xs font-medium px-2.5 py-1 rounded-full"}>
                          {done ? "✓ Selesai" : "Belum"}
                        </span>
                        <button type="button" onClick={() => openStory(level, story)}
                          className="rounded-lg border border-red-200 px-3 py-2 text-xs text-[#B70912] font-bold hover:bg-red-50">
                          Buka Cerita →
                        </button>
                      </div>
                    </div>
                  );
                })}
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
        <p>Ayo Memahami! Edisi Islami — Teman bercerita dan berdiskusi bersama anak. Disusun oleh Syahrul Ilmi.</p>
        <p>Untuk pendampingan anak usia 6–9 tahun. Baca bersama, dengarkan, dan renungkan.</p>
      </footer>
    </div>
  );
}

export default function AyoMemahamiApp() {
  return <AuthProvider><AyoMemahamiAppInner /></AuthProvider>;
}
