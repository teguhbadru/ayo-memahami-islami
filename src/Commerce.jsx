import React, {useState} from "react";
import {BrandMark,StoryArt} from "./Visuals";
import {LEVELS} from "./content";
import "./commerce.css";

export const LAUNCH = {
  brand:"Ruang Cendekia",
  freeStories:100,
  plannedStories:100,
  releaseStage:"beta",
  // Checkout is intentionally disabled until a verified merchant payment gateway,
  // secure entitlement backend, final catalogue and consumer terms are configured.
  paymentReady:false,
  checkoutUrl:null,
  announcedPrice:null,
};

function Arrow(){return <span aria-hidden="true">↗</span>}
function Pill({children}){return <span className="co-pill">{children}</span>}

const faqs = [
  ["Apakah anak harus melihat layar?","Tidak. Orang tua memegang HP, membacakan cerita dan pertanyaan. Anak cukup mendengar dan menjawab secara lisan."],
  ["Untuk usia berapa?","Materi awal dirancang sebagai aktivitas bersama untuk anak sekitar 6–9 tahun. Orang tua bisa memilih tingkat yang paling sesuai, tanpa harus terburu-buru."],
  ["Apakah perlu membuat akun?","Tidak untuk versi beta. Kamu bisa langsung membaca cerita tanpa login. Tanda cerita yang selesai disimpan di browser perangkatmu."],
  ["Apakah sudah ada 100 cerita?","Ya. Sekarang tersedia 100 cerita dalam 5 tingkat, masing-masing 20 cerita. Koleksi dibuka gratis selama masa beta untuk evaluasi penggunaan keluarga."],
  ["Bagaimana cara membeli paket premium?","Paket premium dan pembayaran belum dibuka. Kami sedang menyiapkan materi, harga final, syarat pembelian, dan sistem akses yang aman. Saat ini semua 100 cerita versi beta bisa dicoba secara gratis."],
  ["Apa yang dilakukan pada tahap Meneladani?","Orang tua mengajak anak membahas satu nilai adab, memberikan contoh situasi nyata di rumah atau sekolah, lalu menawarkan aktivitas kebaikan kecil yang aman dan sesuai kemampuan anak."]
];

const principles=[
 {k:"01",symbol:"◉",title:"Mendengar",body:"Orang tua membacakan kisah. Anak menyimak tanpa harus sibuk dengan layar."},
 {k:"02",symbol:"❋",title:"Memahami",body:"Pertanyaan sederhana mengajak anak mengingat, berpikir, dan mengungkapkan pendapat."},
 {k:"03",symbol:"✦",title:"Meneladani",body:"Cerita diterjemahkan menjadi obrolan keluarga dan satu langkah kebaikan sehari-hari."}
];

const audience=[
 {icon:"📖",title:"Cerita yang singkat",sub:"Disusun untuk dinikmati dalam sesi santai bersama anak."},
 {icon:"💬",title:"Panduan ngobrol",sub:"Pertanyaan, petunjuk jawaban, dan contoh dialog untuk orang tua."},
 {icon:"🌱",title:"Adab yang dekat",sub:"Tema rumah, teman, sekolah, kejujuran, syukur, dan kebaikan."},
 {icon:"📍",title:"Belajar bertahap",sub:"5 tingkat pemahaman yang dapat dipilih sesuai kesiapan anak."}
];

const tiers=[
 ["01","Menemukan Fakta","Siapa, apa, dan di mana", "🔎"],
 ["02","Ide Pokok & Urutan","Mengikuti alur dan inti", "📚"],
 ["03","Sebab-Akibat","Memahami perasaan tokoh", "💛"],
 ["04","Menyimpulkan","Menduga langkah selanjutnya", "🌿"],
 ["05","Menilai & Menghubungkan","Mengambil hikmah dari cerita", "✨"]
];

function Headline({label,title,sub}) {
 return <div className="co-section-heading"><span className="co-label">{label}</span><h2>{title}</h2>{sub&&<p>{sub}</p>}</div>
}

export function CommerceHome({onExplore,onStory,onPricing,onHow}) {
 const [expanded,setExpanded]=useState(-1);
 return <div className="co-landing">
  <section className="co-hero">
   <div className="rc-container co-hero-layout">
    <div className="co-hero-text">
     <div className="co-topnote"><span className="co-note-dot"></span> CERITA & AKTIVITAS ADAB UNTUK KELUARGA</div>
     <h1>Satu cerita kecil.<br/><em>Makna yang besar.</em></h1>
     <p className="co-tagline">Mendengar. Memahami. Meneladani.</p>
     <p className="co-hero-desc">Waktu berkualitas untuk orang tua dan anak, melalui cerita Islami, percakapan hangat, dan aksi kebaikan yang sederhana.</p>
     <div className="co-actions">
      <button className="co-button co-primary" onClick={()=>onStory(LEVELS[0].stories[0])}>Coba Cerita Gratis <Arrow/></button>
      <button className="co-button co-plain" onClick={()=>document.querySelector("#co-how")?.scrollIntoView({behavior:"smooth"})}>Lihat Cara Kerja <span aria-hidden>↓</span></button>
     </div>
     <div className="co-trust"><Pill>✓ {LAUNCH.freeStories} cerita tersedia</Pill><Pill>✓ 5 tingkatan</Pill><Pill>✓ Tanpa wajib login</Pill></div>
    </div>
    <div className="co-hero-art">
     <span className="co-doodle co-doodle-1">✳</span><span className="co-doodle co-doodle-2">✦</span>
     <div className="co-art-paper">
      <div className="co-art-top"><BrandMark size={29}/><span>Ruang cerita bersama</span><span>✿</span></div>
      <StoryArt storyId="1.1" title="Anak menolong nenek" />
      <div className="co-art-caption"><small>CONTOH CERITA</small><strong>Bantuan untuk Nenek</strong><span>💚 Tolong-menolong</span></div>
     </div>
     <div className="co-bubble co-bubble-left">“Kalau kamu jadi Zaid, kamu akan apa?”</div>
     <div className="co-bubble co-bubble-right">💛 Cerita jadi percakapan</div>
    </div>
   </div>
  </section>

  <section className="co-statement"><div className="rc-container"><span>✺</span><p>“Bukan sekadar anak belajar memahami cerita, melainkan <strong>orang tua dan anak menemukan makna bersama.</strong>”</p></div></section>

  <section className="co-section co-light">
   <div className="rc-container">
    <Headline label="KENAPA RUANG CENDEKIA?" title={<>Lebih dari sekadar <em>membaca cerita.</em></>} sub="Setiap sesi punya tiga langkah yang mudah diikuti. Tidak ada tes yang harus diketik anak."/>
    <div className="co-principles">{principles.map(p=><div className="co-principle" key={p.title}><div className="co-step-header"><span className="co-step-symbol">{p.symbol}</span><span>{p.k}/03</span></div><h3>{p.title}</h3><p>{p.body}</p></div>)}</div>
   </div>
  </section>

  <section className="co-section" id="co-how">
   <div className="rc-container co-how-grid">
    <div className="co-how-story">
     <div className="co-sample-card"><div className="co-sample-image"><StoryArt storyId="1.2" title="Berbagi bekal"/></div><div className="co-sample-body"><span className="co-label">TINGKAT 1 · BERBAGI</span><h3>Bekal Aisyah</h3><p>Satu kisah sederhana yang jadi pintu masuk untuk mengobrol tentang berbagi.</p><button onClick={()=>onStory(LEVELS[0].stories[1])}>Baca Cerita <Arrow/></button></div></div>
     <div className="co-sample-floating">💬 “Pernahkah kamu membantu teman?”</div>
    </div>
    <div className="co-how-copy">
     <Headline label="SESEDERHANA ITU" title={<>3 langkah.<br/><em>Satu momen berharga.</em></>} sub="Orang tua memegang perangkat. Anak mendengarkan, berbicara, dan melakukan kebaikan nyata."/>
     <div className="co-how-steps">
      <div><b>01</b><p><strong>Pilih cerita</strong><small>Pilih topik dan tingkat yang cocok untuk anak.</small></p></div>
      <div><b>02</b><p><strong>Bacakan dan tanyakan</strong><small>Baca dengan tenang; diskusikan pertanyaan satu per satu.</small></p></div>
      <div><b>03</b><p><strong>Temukan hikmahnya</strong><small>Gunakan contoh situasi nyata dan tantangan kebaikan hari ini.</small></p></div>
     </div>
     <button className="co-button co-primary" onClick={()=>onExplore(0)}>Jelajahi Semua Cerita <Arrow/></button>
    </div>
   </div>
  </section>

  <section className="co-section co-light">
   <div className="rc-container">
    <Headline label="APA YANG DIDAPAT?" title={<>Semuanya disiapkan untuk <em>orang tua.</em></>} sub="Panduan yang mudah dipakai tanpa perlu mempersiapkan materi dari nol."/>
    <div className="co-benefit-grid">{audience.map(a=><article key={a.title} className="co-benefit"><span>{a.icon}</span><h3>{a.title}</h3><p>{a.sub}</p></article>)}</div>
   </div>
  </section>

  <section className="co-section">
   <div className="rc-container">
    <div className="co-level-heading"><Headline label="BELAJAR BERTAHAP" title={<>5 tingkat untuk <em>bertumbuh.</em></>} sub="Sekarang tersedia 20 cerita pada setiap tingkat—100 cerita dalam 5 tingkatan."/></div>
    <div className="co-level-tiles">{tiers.map((p,i)=><button key={p[0]} onClick={()=>onExplore(i)} className={"co-level-tile co-level-"+i}><span className="co-level-number">TINGKAT {p[0]}</span><span className="co-level-icon">{p[3]}</span><h3>{p[1]}</h3><p>{p[2]}</p><span className="co-level-count">{LEVELS[i].stories.length} cerita tersedia <Arrow/></span></button>)}</div>
   </div>
  </section>

  <section className="co-section co-pricing-anchor" id="co-pricing">
   <div className="rc-container">
    <Headline label="PILIH CARA BERKENALAN" title={<>Mulai gratis. <em>Tumbuh bersama.</em></>} sub="Paket premium sedang disiapkan. Tidak ada pembayaran yang diproses pada versi ini."/>
    <div className="co-plan-grid">
     <article className="co-plan co-plan-free">
      <span className="co-plan-kicker">BISA DICOBA SEKARANG</span><h3>Beta Gratis</h3><p>Coba pengalaman bercerita dan berdiskusi bersama anak.</p><div className="co-plan-price">Gratis <small>selama periode beta</small></div>
      <ul><li>100 cerita dalam 5 tingkatan</li><li>Pertanyaan lisan + panduan jawaban</li><li>Contoh obrolan & aksi kebaikan</li><li>Catatan progres di perangkat</li></ul>
      <button className="co-button co-primary" onClick={()=>onExplore(0)}>Mulai Gratis <Arrow/></button>
     </article>
     <article className="co-plan co-plan-plus">
      <span className="co-plan-kicker">DALAM PENGEMBANGAN</span><h3>Paket Keluarga</h3><p>Rencana fitur tambahan bagi keluarga yang ingin menggunakan Ruang Cendekia lebih rutin.</p><div className="co-plan-price co-not-set">Harga belum ditetapkan</div>
      <ul><li>Materi printable: masih dalam perencanaan</li><li>Panduan aktivitas keluarga tambahan: direncanakan</li><li>Akses keluarga lintas perangkat: direncanakan</li><li>Harga dan manfaat final belum ditetapkan</li></ul>
      <button className="co-button co-outline" onClick={onPricing}>Lihat Status Paket <Arrow/></button>
      <small className="co-disclaimer">Paket premium belum berisi penawaran akses khusus; semua 100 cerita beta saat ini gratis.</small>
     </article>
    </div>
   </div>
  </section>

  <section className="co-section co-light" id="co-faq">
   <div className="rc-container co-faq-layout">
    <div><span className="co-label">TANYA JAWAB</span><h2>Ada yang ingin <em>ditanyakan?</em></h2><p>Informasi tentang cara memakai Ruang Cendekia dan status versi komersial.</p></div>
    <div className="co-faqs">{faqs.map(([q,a],i)=><div className="co-faq" key={q}><button aria-expanded={expanded===i} onClick={()=>setExpanded(expanded===i?-1:i)}><span>{q}</span><b>{expanded===i?"−":"+"}</b></button>{expanded===i&&<p>{a}</p>}</div>)}</div>
   </div>
  </section>

  <section className="co-end"><div className="rc-container co-end-inner"><span className="co-label">WAKTU KECIL, MAKNA BESAR</span><h2>Satu cerita, satu percakapan,<br/>satu pelajaran kebaikan.</h2><p>Mulai dari satu kisah yang kamu bacakan hari ini.</p><button className="co-button co-bright" onClick={()=>onStory(LEVELS[0].stories[0])}>Mulai Cerita Pertama <Arrow/></button><div className="co-end-ornament">☾ ✳ ✦</div></div></section>
 </div>;
}

export function PlansView({onExplore,onHome}) {
 const [faq,setFaq]=useState(-1);
 return <section className="rc-container co-plan-page">
  <button className="rc-back" onClick={onHome}>← Kembali ke Beranda</button>
  <div className="co-plan-intro"><span className="co-label">RUANG CENDEKIA · PAKET</span><h1>Berkenalan sekarang.<br/><em>Tumbuh bersama nanti.</em></h1><p>Ruang Cendekia sedang dalam fase beta terbuka. Seluruh 100 cerita saat ini dapat dicoba secara gratis; paket premium belum dijual.</p></div>
  <div className="co-plan-grid">
   <article className="co-plan co-plan-free"><span className="co-plan-kicker">TERSEDIA</span><h3>Beta Gratis</h3><div className="co-plan-price">Rp0</div><p>100 cerita dengan pertanyaan bertahap, contoh obrolan orang tua, dan tantangan kebaikan.</p><button className="co-button co-primary" onClick={()=>onExplore(0)}>Buka Koleksi Gratis <Arrow/></button></article>
   <article className="co-plan co-plan-plus"><span className="co-plan-kicker">BELUM DIJUAL</span><h3>Paket Keluarga</h3><div className="co-plan-price co-not-set">Segera disiapkan</div><p>Rencana materi printable dan fitur pendamping keluarga di luar 100 cerita beta yang sudah tersedia.</p><span className="co-limited-notice">Kami belum menerima pembayaran atau memproses pesanan premium.</span></article>
  </div>
  <div className="co-prelaunch-info">
   <h2>Sebelum paket berbayar dibuka</h2><p>Tim perlu meninjau kualitas 100 cerita yang sudah disusun, menentukan manfaat premium yang benar-benar berbeda dari versi gratis, menetapkan harga dan syarat pembelian, menghubungkan gateway pembayaran resmi, serta membangun penyimpanan akses premium di server. Paket tidak akan dibuka sebelum proses tersebut siap.</p>
   <button className="co-button co-plain" onClick={onHome}>Kembali ke Beranda →</button>
  </div>
  <div className="co-faqs co-faqs-narrow">{faqs.slice(3,5).map(([q,a],i)=><div className="co-faq" key={q}><button onClick={()=>setFaq(faq===i?-1:i)} aria-expanded={faq===i}><span>{q}</span><b>{faq===i?"−":"+"}</b></button>{faq===i&&<p>{a}</p>}</div>)}</div>
 </section>;
}
