import {extraLevel1} from "./newStories1";
import {extraLevel2} from "./newStories2";
import {extraLevel3} from "./newStories3";
import {extraLevel4} from "./newStories4";
import {extraLevel5} from "./newStories5";

export const LEVELS = [
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

// Append 17 newly written, level-aligned stories to each original set of three.
// The fifteen original stories above are not changed.
[extraLevel1,extraLevel2,extraLevel3,extraLevel4,extraLevel5].forEach((extras,i)=>{
  if (extras.length!==17 || LEVELS[i].stories.length!==3) throw new Error("Unexpected story count at level "+(i+1));
  LEVELS[i].stories.push(...extras);
});
if(LEVELS.some(level=>level.stories.length!==20)) throw new Error("Every level must contain 20 stories");
