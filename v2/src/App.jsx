import React,{useEffect,useMemo,useState} from "react";
import {LEVELS} from "./data/content";
import {DISCUSSION_EXAMPLES} from "./data/discussion";
import {SceneArt,BrandIcon,ILLUSTRATED_STORIES} from "./Art";
import "./styles.css";
import "./reference-composite.css";

const ALL=LEVELS.flatMap(level=>level.stories);
const STAGES=[{slug:"mendengar",label:"Mendengar"},{slug:"memahami",label:"Memahami"},{slug:"meneladani",label:"Meneladani"}];
const FOCUS=["Menemukan Fakta","Ide Pokok & Urutan","Sebab-Akibat & Perasaan","Menyimpulkan & Memprediksi","Menilai & Menghubungkan"];
const DESCRIPTIONS=["Menemukan siapa, apa, dan di mana dalam cerita.","Mengurutkan peristiwa, inti cerita, dan kosakata.","Memahami penyebab, akibat, dan perasaan tokoh.","Menarik kesimpulan dan membayangkan kelanjutan cerita.","Menilai pilihan tokoh dan menerapkan hikmahnya."];
const OLD_TASKS={
"1.1":"Bantu satu orang di rumah membawa barang ringan atau merapikan sesuatu.",
"1.2":"Bagikan sesuatu dengan izin orang tua kepada saudara atau teman.",
"1.3":"Sampaikan sesuatu dengan jujur meskipun terasa sulit.",
"2.1":"Rawat tanaman bersama keluarga dan perhatikan perubahannya.",
"2.2":"Rapikan satu area kecil di kamarmu tanpa perlu diminta.",
"2.3":"Tawarkan makanan atau bantuan kecil kepada anggota keluarga.",
"3.1":"Tawarkan bantuan kepada teman yang sedang kesulitan.",
"3.2":"Sebutkan tiga hal yang kamu syukuri hari ini.",
"3.3":"Jaga kebersihan taman atau halaman rumah dengan cara aman.",
"4.1":"Kembalikan barang yang kamu temukan kepada pemilik atau guru.",
"4.2":"Ucapkan selamat kepada teman atas usaha atau prestasinya.",
"4.3":"Sisihkan sedikit uang untuk tujuan tabunganmu.",
"5.1":"Siapkan perlengkapan kegiatan besok dari malam hari.",
"5.2":"Sampaikan pendapat dan dengarkan pendapat anggota keluarga.",
"5.3":"Bagi pekerjaan rumah dengan adil dan saling membantu."
};
const readLocal=(key,fallback)=>{try{let value=JSON.parse(localStorage.getItem(key));return value??fallback}catch{return fallback}};
const getRoute=()=>{
 const p=decodeURIComponent((location.hash||"#/").slice(1)).split("/").filter(Boolean);
 if(p[0]==="cerita"&&p[1])return {page:"story",id:p[1],stage:STAGES.some(x=>x.slug===p[2])?p[2]:"mendengar"};
 if(p[0]==="jelajah")return {page:"library",level:Math.min(5,Math.max(1,Number(p[1])||1))};
 if(p[0]==="perjalanan")return {page:"progress"};
 if(p[0]==="tentang")return {page:"about"};
 return {page:"home"};
};
const linkTo=(path)=>{location.hash="#/"+path;window.scrollTo({top:0,behavior:"smooth"})};
function Button({children,light=false,onClick,className="",...props}){return <button {...props} className={"btn "+(light?"btn-light ":"btn-lime ")+className} onClick={onClick}>{children}</button>}
function Logo({small=false}){return <span className={"brand "+(small?"brand-small":"")}><BrandIcon/><span>Ruang<br/><b>Cendekia</b></span></span>}
function StepTabs({id,stage}){return <nav className="step-tabs" aria-label="Tahapan kegiatan">{STAGES.map(item=><button key={item.slug} className={item.slug===stage?"active":""} aria-current={item.slug===stage?"step":undefined} onClick={()=>linkTo("cerita/"+id+"/"+item.slug)}><span className="step-dot">•</span>{item.label}</button>)}</nav>}
function Header({page}){return <header className="site-header"><div className="top-ribbon"/><div className="site-nav"><button className="logo-button" onClick={()=>linkTo("")} aria-label="Ke beranda Ruang Cendekia"><Logo small/></button><nav aria-label="Navigasi utama"><button className={page==="home"?"current":""} onClick={()=>linkTo("")}>Beranda</button><button className={page==="library"?"current":""} onClick={()=>linkTo("jelajah/1")}>100 Cerita</button><button className={page==="progress"?"current":""} onClick={()=>linkTo("perjalanan")}>Perjalanan Kita</button></nav></div></header>}
function Home({completed,lastStory}){
 const recommend=ALL.find(s=>s.id===lastStory)||LEVELS[0].stories[0];
 const [guideTab,setGuideTab]=useState(null);
 return <main>
  <section className="hero wrap"><div className="hero-card"><div className="hero-side-illustration" aria-hidden="true"><SceneArt story={LEVELS[0].stories[0]}/></div><div className="hero-copy">
   <p className="eyebrow"><span className="blue-dot">●</span> CERITA & AKTIVITAS ADAB UNTUK KELUARGA</p>
   <h1>Satu cerita kecil.<br/>Makna yang besar.</h1>
   <h2>Mendengar. Memahami. Meneladani.</h2>
   <p className="hero-desc">Waktu berkualitas untuk orang tua dan anak, melalui cerita Islami, percakapan hangat, dan aksi kebaikan yang sederhana.</p>
   <Button onClick={()=>linkTo("jelajah/1")}>Mulai Sekarang <span className="circle-arrow">›</span></Button>
  </div></div></section>
  <section className="guide-panel wrap"><h2><span className="guide-emblem">☺</span> Panduan Singkat untuk Aba & Umma</h2>
    <div className="guide-grid guide-quick-links">
      <button className={guideTab==="cara"?"open":""} onClick={()=>setGuideTab(guideTab==="cara"?null:"cara")} aria-expanded={guideTab==="cara"}><span>▤</span> Cara Menggunakan</button>
      <button className={guideTab==="alur"?"open":""} onClick={()=>setGuideTab(guideTab==="alur"?null:"alur")} aria-expanded={guideTab==="alur"}><span>♧</span> Alur 3 Tahap</button>
      <button className={guideTab==="manfaat"?"open":""} onClick={()=>setGuideTab(guideTab==="manfaat"?null:"manfaat")} aria-expanded={guideTab==="manfaat"}><span>🌱</span> Manfaat untuk Anak</button>
    </div>
    {guideTab&&<div className="guide-expanded">
      {guideTab==="cara"&&<p><b>Mulai dengan satu cerita.</b> Pilih tingkat, bacakan cerita dengan tenang, lalu gunakan pertanyaan sebagai bahan obrolan. Anak tidak harus menatap layar atau mengetik jawaban.</p>}
      {guideTab==="alur"&&<p><b>Mendengar → Memahami → Meneladani.</b> Orang tua membacakan, menanyakan isi cerita secara lisan, lalu mengajak anak membahas contoh situasi dan satu tindakan kebaikan sederhana.</p>}
      {guideTab==="manfaat"&&<p><b>Belajar bersama tanpa tekanan nilai.</b> Cerita dirancang untuk melatih menyimak, bernalar sesuai tingkat, berbicara tentang perasaan, dan mengenali contoh adab sehari-hari.</p>}
    </div>}
  </section>
  <section className="home-content wrap">
    <div className="section-heading"><div><span className="kicker">100 CERITA · 5 TINGKAT</span><h2>Temukan cerita yang cocok.</h2><p>Setiap tingkat memiliki 20 cerita dengan pertanyaan yang semakin mendalam.</p></div><button className="subtle-link" onClick={()=>linkTo("jelajah/1")}>Lihat semua cerita ↗</button></div>
    <div className="level-grid">{LEVELS.map((lvl,i)=><button className="level-tile" key={lvl.level} onClick={()=>linkTo("jelajah/"+lvl.level)}><span className="level-number">TINGKAT {lvl.level}</span><span className="level-art">{["✿","❋","♡","✦","☀"][i]}</span><h3>{FOCUS[i]}</h3><p>{DESCRIPTIONS[i]}</p><span className="level-bottom">20 cerita <b>↗</b></span></button>)}</div>
  </section>
  <section className="spotlight wrap"><div className="spotlight-text"><span className="kicker">MULAI DENGAN SATU KISAH</span><h2>{completed.length?"Lanjutkan momen bercerita.":"Cerita pertama yang hangat."}</h2><p>{recommend.title} mengajak keluarga menemukan makna melalui pertanyaan dan kegiatan kecil.</p><Button onClick={()=>linkTo("cerita/"+recommend.id+"/mendengar")}>Baca {recommend.title} <span>→</span></Button></div><div className="spotlight-art"><SceneArt story={recommend}/></div></section>
 </main>;
}
function Library({level,completed,favorites,toggleFavorite}){
 const [query,setQuery]=useState("");const [filter,setFilter]=useState("semua");
 useEffect(()=>{setQuery("");setFilter("semua")},[level]);
 const levelObj=LEVELS[level-1]||LEVELS[0];
 const filtered=useMemo(()=>levelObj.stories.filter(s=>{
 const term=(s.title+" "+s.lifeValue+" "+s.text).toLowerCase();
 return term.includes(query.toLowerCase().trim())&&(filter==="semua"||(filter==="tersimpan"?favorites.includes(s.id):completed.includes(s.id)));
 }),[level,query,filter,completed,favorites]);
 return <main className="wrap library-page">
 <div className="section-top"><div><div className="level-badge"><b># Tingkat {level}</b><span>• {FOCUS[level-1]}</span></div><p>│ {levelObj.desc}</p></div><Logo/></div>
 <div className="level-switch" aria-label="Pilih tingkat">{LEVELS.map(l=><button key={l.level} className={l.level===level?"active":""} onClick={()=>linkTo("jelajah/"+l.level)}>Tingkat {l.level}</button>)}</div>
 <div className="library-title">Yuk, pilih ceritanya <span>({filtered.length})</span></div>
 <div className="library-tools"><label className="search-bar"><span>⌕</span><input placeholder="Cari judul, tema, atau nilai adab..." value={query} onChange={e=>setQuery(e.target.value)} aria-label="Cari cerita"/></label><div className="library-filters"><button className={filter==="semua"?"chosen":""} onClick={()=>setFilter("semua")}>Semua</button><button className={filter==="tersimpan"?"chosen":""} onClick={()=>setFilter("tersimpan")}>Disimpan</button><button className={filter==="selesai"?"chosen":""} onClick={()=>setFilter("selesai")}>Sudah dibaca</button></div></div>
 <div className="folder-board"><div className="folder-grid">{filtered.map(s=><article className="folder-item" key={s.id}>
   <button onClick={()=>linkTo("cerita/"+s.id+"/mendengar")} className="folder-cover has-illustration" aria-label={"Buka cerita "+s.title}><><SceneArt story={s}/><span className="folder-illustration-action">Mulai cerita ↗</span></></button>
   <div className="folder-meta"><span>• CERITA {s.id}</span><span className="folder-mini-tag">NILAI ADAB</span></div>
   <h3><button onClick={()=>linkTo("cerita/"+s.id+"/mendengar")}>{s.title}</button></h3>
   <div className="folder-foot"><span className="value-tag">{s.lifeValue}</span><button className={"favorite "+(favorites.includes(s.id)?"saved":"")} aria-pressed={favorites.includes(s.id)} aria-label={(favorites.includes(s.id)?"Hapus dari":"Simpan ke")+" favorit "+s.title} onClick={()=>toggleFavorite(s.id)}>{favorites.includes(s.id)?"♥":"♡"}</button></div>
   {completed.includes(s.id)&&<span className="done-pill">✓ Sudah dibaca</span>}
  </article>)}{filtered.length===0&&<div className="empty-library"><b>Belum ada cerita yang cocok.</b><p>Coba ubah kata kunci atau filter.</p><button onClick={()=>{setQuery("");setFilter("semua")}}>Tampilkan semua</button></div>}</div></div>
 <p className="library-note">✦ Tidak perlu menyelesaikan semuanya sekaligus. Pilih satu cerita, lalu temukan maknanya bersama.</p>
 </main>;
}
function StoryHeader({story,stage}){const n=Number(story.id.split(".")[0]);const step=STAGES.findIndex(x=>x.slug===stage)+1;return <><div className="section-top story-top"><div><div className="level-badge"><b># Tingkat {n}</b><span>• {FOCUS[n-1]}</span></div><p>│ Cerita {story.id} — {story.title}</p></div><span className="story-page-count">{step} / 3</span></div><div className="story-bar"><button className="story-back" onClick={()=>linkTo("jelajah/"+n)}>← Daftar cerita</button><StepTabs id={story.id} stage={stage}/></div></>}
function getAnswer(q){const str=String(q.answer||"Panduan belum tersedia");if(q.type==="mc"&&/^[A-D]$/i.test(str)&&Array.isArray(q.options)){let opt=q.options.find(x=>x.startsWith(str+"."));return opt||str;}return str}
function Reading({story,fontSize,setFontSize}){
 return <><p className="stage-hint">• Orang tua membacakan cerita dengan tenang. Anak cukup mendengarkan.</p><div className="reading-art"><SceneArt story={story}/></div>
 <article className="reading-paper"><div className="paper-bar"><span>📖 WAKTU BERCERITA</span><div className="font-controls" aria-label="Ukuran teks"><button disabled={fontSize<=16} onClick={()=>setFontSize(Math.max(16,fontSize-2))} aria-label="Perkecil huruf">A−</button><button disabled={fontSize>=26} onClick={()=>setFontSize(Math.min(26,fontSize+2))} aria-label="Perbesar huruf">A+</button></div></div><div className="story-text" style={{fontSize:fontSize+"px"}}>{story.text.split(/\n{2,}/).map((p,i)=><p key={i}>{p}</p>)}</div></article>
 {story.newWords?.length>0&&<details className="story-vocab"><summary>📚 Kosakata dalam cerita</summary><div>{story.newWords.map((word,i)=><p key={i}><b>{word.term}:</b> {word.def}</p>)}</div></details>}
 <div className="story-actions"><Button onClick={()=>linkTo("cerita/"+story.id+"/memahami")}>Lanjut ke Pertanyaan →</Button></div></>;
}
function ParentAdabPreview({story,onOpen}){
 const parent=DISCUSSION_EXAMPLES[story.id]||{};
 const example=story.parentExample||parent.example||"Ajak anak menghubungkan cerita dengan kejadian nyata di rumah atau sekolah.";
 const follow=story.parentFollowUp||parent.followUp||story.reflect;
 const task=story.kindnessTask||OLD_TASKS[story.id]||"Praktikkan satu kebaikan sederhana bersama keluarga.";
 return <aside className="inline-adab"><div className="adab-header"><span className="adab-symbol">◎</span><div><span className="adab-kicker">Nilai Adab</span><h2>{story.lifeValue}</h2></div><span className="adab-step">3 / 3</span></div><p className="adab-description">{story.lifeValueDesc}</p>
 <div className="adab-block"><h3>♧ &nbsp; Contoh Situasi untuk Orang Tua</h3><p className="adab-highlight">{example}</p></div>
 <div className="adab-block"><h3>☏ &nbsp; Pertanyaan Lanjutan</h3><p>{follow}</p></div>
 <div className="adab-block"><h3>☆ &nbsp; Tantangan Kebaikan</h3><p className="adab-highlight">{task}</p></div>
 <button className="adab-more" onClick={onOpen}>Buka tahap Meneladani →</button>
 </aside>;
}
function Understanding({story,notes,setNotes}){
 const [guide,setGuide]=useState(false);useEffect(()=>{setGuide(false)},[story.id]);
 return <><p className="stage-hint">• Tanya jawab lisan. Bacakan pertanyaan dan beri anak waktu menjawab dengan kata-katanya sendiri.</p>
 <div className="qa-grid"><section className="qa-card"><div className="qa-heading"><h2>PERTANYAAN</h2><span>{story.questions.length} pertanyaan</span></div><ol className="questions">{story.questions.map((q,i)=><li key={i}><span className="q-no">{String(i+1).padStart(2,"0")}</span><div><p>{q.q}</p>{q.type==="mc"&&<ul className="choices">{q.options?.map((o,j)=><li key={j}>{o}</li>)}</ul>}{q.type==="tf"&&<small>Jawab lisan: benar atau salah</small>}</div></li>)}</ol></section>
<ParentAdabPreview story={story} onOpen={()=>linkTo("cerita/"+story.id+"/meneladani")}/></div>
 <section className="answer-panel">{!guide?<button className="answer-button" onClick={()=>setGuide(true)} aria-expanded={false}>◉ &nbsp; Lihat panduan jawaban <span>↓</span></button>:<><div className="answer-open"><h2>🔑 Panduan jawaban untuk orang tua</h2>{story.questions.map((q,i)=><div className="answer-row" key={i}><b>{i+1}.</b><span>{getAnswer(q)}</span></div>)}<p>Tidak perlu menuntut anak menjawab dengan kalimat yang persis sama.</p></div><button className="answer-hide" onClick={()=>setGuide(false)} aria-expanded={true}>◉ &nbsp; Sembunyikan panduan ↑</button></>}</section>
 <details className="oral-notes"><summary>Catatan jawaban lisan untuk orang tua (opsional)</summary> <aside className="parent-scores"><h2>CATATAN ORANG TUA</h2><p>Setelah anak menjawab, tandai untuk membantu obrolan. Ini bukan nilai ujian.</p><div className="score-head"><span>NO.</span><span>PAHAM</span><span>BANTU LAGI</span></div>{story.questions.map((q,i)=><div className="score-row" key={i}><span>{i+1}</span><button className={notes[i]==="ya"?"yes selected":"yes"} aria-label={"Pertanyaan "+(i+1)+" dipahami"} aria-pressed={notes[i]==="ya"} onClick={()=>setNotes({...notes,[i]:notes[i]==="ya"?null:"ya"})}>✓</button><button className={notes[i]==="lagi"?"no selected":"no"} aria-label={"Pertanyaan "+(i+1)+" butuh bantuan"} aria-pressed={notes[i]==="lagi"} onClick={()=>setNotes({...notes,[i]:notes[i]==="lagi"?null:"lagi"})}>↻</button></div>)}<div className="parent-note"><b>💬 Tips Aba & Umma</b><p>Hargai usaha anak. Tidak perlu memaksa jawaban persis sama dengan panduan.</p></div></aside></details> <div className="story-actions split"><Button light onClick={()=>linkTo("cerita/"+story.id+"/mendengar")}>← Mendengar</Button><Button onClick={()=>linkTo("cerita/"+story.id+"/meneladani")}>Lanjut ke Meneladani →</Button></div>
 </>;
}
function Reflection({story,completed,onFinish}){
 const parent=DISCUSSION_EXAMPLES[story.id]||{};
 const example=story.parentExample||parent.example||"Ajak anak mencari contoh situasi serupa di rumah atau sekolah.";
 const followUp=story.parentFollowUp||parent.followUp||story.reflect;
 const task=story.kindnessTask||OLD_TASKS[story.id]||"Lakukan satu tindakan kebaikan kecil bersama keluarga.";
 return <><p className="stage-hint">• Hubungkan cerita dengan kehidupan nyata melalui obrolan hangat dan aksi kebaikan.</p>
 <article className="lesson-card"><span className="mini-kicker">✦ NILAI ADAB</span><h2>{story.lifeValue}</h2><p>{story.lifeValueDesc}</p></article>
 <div className="reflection-grid"><article className="reflection-card"><span>💬 OBROLAN BERSAMA</span><h3>Yuk, direnungkan.</h3><p>{story.reflect}</p><small>Pertanyaan terbuka—dengarkan pengalaman anak tanpa terburu-buru menyimpulkan.</small></article><article className="reflection-card"><span>💡 CONTOH UNTUK ORANG TUA</span><h3>Contoh situasi nyata</h3><p>{example}</p><div className="follow-up"><b>Pertanyaan lanjutan</b><p>{followUp}</p></div></article></div>
 <article className="kindness-card"><span>🌱 TANTANGAN KEBAIKAN HARI INI</span><h2>Ayo praktikkan!</h2><p>{task}</p><small>Tantangan ini bersifat pilihan, tidak perlu dipaksakan, dan sebaiknya didampingi orang tua.</small></article>
 <div className="finish-box"><div><h3>{completed?"Cerita ini sudah kamu baca!":"Satu cerita, satu kebaikan."}</h3><p>Menandai selesai hanya menyimpan progres di perangkat ini.</p></div><Button onClick={onFinish}>{completed?"✓ Selesai dibaca":"✓ Tandai Selesai"}</Button></div>
 <div className="story-actions"><Button light onClick={()=>linkTo("cerita/"+story.id+"/memahami")}>← Kembali ke Memahami</Button><Button light onClick={()=>linkTo("jelajah/"+story.id.split(".")[0])}>Pilih cerita lain ↗</Button></div>
 </>;
}
function Story({id,stage,completed,markComplete,setLastRead}){
 const story=ALL.find(s=>s.id===id);
 const [fontSize,setFontSize]=useState(20);const [notes,setNotes]=useState({});
 useEffect(()=>{setNotes({});setLastRead(id)},[id]);
 if(!story)return <main className="wrap missing"><h1>Cerita tidak ditemukan</h1><Button onClick={()=>linkTo("jelajah/1")}>Kembali ke katalog</Button></main>;
 return <main className="wrap story-page"><StoryHeader story={story} stage={stage}/>{stage==="mendengar"?<Reading story={story} fontSize={fontSize} setFontSize={setFontSize}/>:stage==="memahami"?<Understanding story={story} notes={notes} setNotes={setNotes}/>:<Reflection story={story} completed={completed.includes(id)} onFinish={()=>markComplete(id)}/>}</main>;
}
function Progress({completed,favorites,lastRead}){
 return <main className="wrap progress-page"><div className="progress-intro"><span className="kicker">CATATAN CERITA KITA</span><h1>Setiap cerita punya makna.</h1><p>Perjalanan ini bukan tentang cepat menyelesaikan semuanya. Nikmati cerita sesuai kebutuhan keluarga.</p></div>
 <div className="progress-summary"><div><strong>{completed.length}<small> / 100</small></strong><span>Cerita selesai dibaca</span></div><div><strong>{favorites.length}</strong><span>Cerita favorit</span></div><div><strong>{LEVELS.length}</strong><span>Tingkat tersedia</span></div></div>
 <div className="progress-levels">{LEVELS.map(l=>{let done=l.stories.filter(s=>completed.includes(s.id)).length;return <article key={l.level}><div className="progress-row"><div><span>TINGKAT {l.level}</span><h3>{FOCUS[l.level-1]}</h3></div><b>{done} / 20</b></div><div className="progress-track"><div style={{width:done*5+"%"}}/></div><button onClick={()=>linkTo("jelajah/"+l.level)}>Lihat cerita ↗</button></article>})}</div>
 {lastRead&&<div className="resume"><p>Lanjutkan dari cerita terakhir:</p><button onClick={()=>linkTo("cerita/"+lastRead+"/mendengar")}>{ALL.find(s=>s.id===lastRead)?.title||"Lanjutkan membaca"} →</button></div>}
 <p className="storage-note">🔒 Progres disimpan hanya di browser perangkat ini. Jika data browser dihapus, progres tidak dapat dipulihkan. Belum ada sinkronisasi akun.</p>
 </main>;
}
function About(){return <main className="wrap about-page"><span className="kicker">RUANG CENDEKIA 2.0</span><h1>Satu cerita, satu percakapan, satu pelajaran kebaikan.</h1><p>Ruang Cendekia membantu orang tua dan anak usia sekitar 6–9 tahun menemukan makna bersama melalui cerita Islami dan kegiatan adab.</p><div className="about-grid"><article><b>100 cerita</b><p>20 cerita di setiap tingkat pembelajaran.</p></article><article><b>3 tahap</b><p>Mendengar, Memahami, dan Meneladani.</p></article><article><b>Orang tua memandu</b><p>Anak tidak perlu mengetik jawaban di layar.</p></article></div><p className="about-note">Versi beta terbuka. Sistem pembayaran belum aktif. Ilustrasi khusus untuk seluruh 100 cerita masih dikembangkan dan materi masih perlu evaluasi editorial sebelum ditawarkan secara komersial.</p><Button onClick={()=>linkTo("jelajah/1")}>Mulai membaca →</Button></main>}
export default function App(){
 const [route,setRoute]=useState(getRoute);
 const [completed,setCompleted]=useState(()=>readLocal("rc_v2_completed",[]));
 const [favorites,setFavorites]=useState(()=>readLocal("rc_v2_favorites",[]));
 const [lastRead,setLastReadState]=useState(()=>readLocal("rc_v2_last",null));
 useEffect(()=>{const handler=()=>{setRoute(getRoute());window.scrollTo(0,0)};window.addEventListener("hashchange",handler);return()=>window.removeEventListener("hashchange",handler)},[]);
 const persist=(key,value,setter)=>{setter(value);try{localStorage.setItem(key,JSON.stringify(value))}catch{}};
 const toggleFavorite=id=>persist("rc_v2_favorites",favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id],setFavorites);
 const markComplete=id=>{persist("rc_v2_completed",completed.includes(id)?completed:[...completed,id],setCompleted)};
 const setLastRead=id=>{if(!id||id===lastRead)return;persist("rc_v2_last",id,setLastReadState)};
 return <div className="app-shell"><Header page={route.page}/>{route.page==="home"?<Home completed={completed} lastStory={lastRead}/>:route.page==="library"?<Library level={route.level} completed={completed} favorites={favorites} toggleFavorite={toggleFavorite}/>:route.page==="story"?<Story id={route.id} stage={route.stage} completed={completed} markComplete={markComplete} setLastRead={setLastRead}/>:route.page==="progress"?<Progress completed={completed} favorites={favorites} lastRead={lastRead}/>:<About/>}<footer className="site-footer"><div className="wrap footer-inside"><div><Logo small/><p>Mendengar. Memahami. Meneladani.</p><small>Satu cerita, satu percakapan, satu pelajaran kebaikan.</small></div><nav aria-label="Navigasi bawah"><button onClick={()=>linkTo("")}>Beranda</button><button onClick={()=>linkTo("jelajah/1")}>Koleksi Cerita</button><button onClick={()=>linkTo("perjalanan")}>Perjalanan Kita</button><button onClick={()=>linkTo("tentang")}>Tentang</button></nav></div><p className="copyright">© Ruang Cendekia · Beta 2.0 · Aktivitas cerita bersama keluarga</p></footer></div>;
}