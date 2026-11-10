import React, { useEffect, useMemo, useState } from "react";
import { LEVELS } from "./content";
import { BrandMark, StoryArt } from "./Visuals";
import { CommerceHome, PlansView } from "./Commerce";
import { DISCUSSION_EXAMPLES } from "./discussion";

const TOTAL = LEVELS.reduce((sum, level) => sum + level.stories.length, 0);
const ALL = LEVELS.flatMap(level => level.stories.map(story => ({...story, levelNum: level.level, levelName: level.title.split(": ").slice(1).join(": ")})));
const VALID_IDS = new Set(ALL.map(story => story.id));

const LEVEL_DETAILS = [
  { icon: "🔎", short: "Menemukan Fakta", sub: "Mengingat siapa, apa, dan di mana", color: "mint" },
  { icon: "🧩", short: "Ide Pokok & Urutan", sub: "Menangkap inti dan alur cerita", color: "peach" },
  { icon: "💭", short: "Sebab-Akibat & Perasaan", sub: "Memahami alasan dan empati", color: "lavender" },
  { icon: "🌱", short: "Menyimpulkan & Memprediksi", sub: "Menarik makna dan kemungkinan", color: "blue" },
  { icon: "🌟", short: "Menilai & Menghubungkan", sub: "Mengaitkan cerita dengan kehidupan", color: "yellow" },
];

const PRACTICES = {
  "1.1": { task: "Bantu satu pekerjaan kecil di rumah tanpa diminta.", tip: "Ajak anak menyebutkan siapa yang membutuhkan bantuan dan mengapa." },
  "1.2": { task: "Sisihkan sedikit makanan atau camilan untuk dibagikan kepada anggota keluarga.", tip: "Bahas bagaimana perasaan teman ketika ada orang yang mau berbagi." },
  "1.3": { task: "Ceritakan satu kejadian hari ini dengan jujur, meskipun sempat melakukan kesalahan.", tip: "Sampaikan bahwa berkata jujur patut dihargai, bahkan saat anak melakukan kesalahan." },
  "2.1": { task: "Rawat satu tanaman kecil bersama selama beberapa hari.", tip: "Hubungkan urutan peristiwa dalam cerita dengan pentingnya kesabaran." },
  "2.2": { task: "Rapikan tempat tidur atau mainan sendiri sebelum diingatkan.", tip: "Tanyakan apa yang dilakukan tokoh lebih dulu, lalu apa hasilnya." },
  "2.3": { task: "Berikan bantuan sederhana kepada seseorang hari ini.", tip: "Ajak anak menceritakan kembali peristiwa yang paling penting." },
  "3.1": { task: "Ajak teman atau saudara bekerja sama menyelesaikan satu hal sederhana.", tip: "Tanyakan mengapa tokoh bertindak begitu dan bagaimana perasaan temannya." },
  "3.2": { task: "Sebutkan tiga hal yang disyukuri hari ini.", tip: "Bantu anak membedakan keinginan, kebutuhan, dan rasa syukur." },
  "3.3": { task: "Pungut sampah di tempat yang aman dan buang ke tempat sampah.", tip: "Bicarakan dampak kebiasaan kecil terhadap lingkungan sekitar." },
  "4.1": { task: "Kembalikan barang yang dipinjam dan pastikan sampai kepada pemiliknya.", tip: "Jelaskan bahwa amanah berarti menjaga kepercayaan walau tidak diawasi." },
  "4.2": { task: "Ucapkan selamat kepada seseorang atas keberhasilannya.", tip: "Biarkan anak menebak pilihan baik yang bisa dilakukan saat kalah." },
  "4.3": { task: "Sisihkan sebagian uang saku untuk tabungan atau infak bersama keluarga.", tip: "Ajak anak menghubungkan rencana menabung dengan keputusan sehari-hari." },
  "5.1": { task: "Siapkan satu kebutuhan esok hari sebelum tidur.", tip: "Tanyakan pelajaran yang bisa diterapkan anak dari persiapan tokoh." },
  "5.2": { task: "Buat satu keputusan keluarga kecil lewat musyawarah.", tip: "Latih anak mendengar pendapat yang berbeda sebelum menyampaikan pendapatnya." },
  "5.3": { task: "Kerjakan tugas rumah bersama, lalu saling mengucapkan terima kasih.", tip: "Diskusikan bagaimana cara meminta maaf, memaafkan, dan berbagi tanggung jawab." },
};

function getSaved() {
  try {
    const current = JSON.parse(localStorage.getItem("ruang_cendikia_progress_v1") || "null");
    if (Array.isArray(current)) return [...new Set(current.filter(id => VALID_IDS.has(id)))];
    const old = JSON.parse(localStorage.getItem("ayo_memahami_completed_v1") || "null");
    if (Array.isArray(old)) return [...new Set(old.filter(id => VALID_IDS.has(id)))];
    const scores = JSON.parse(localStorage.getItem("ayo_memahami_scores") || "{}");
    return Object.keys(scores || {}).filter(id => VALID_IDS.has(id));
  } catch { return []; }
}

function Icon({children, className=""}) { return <span className={className} aria-hidden="true">{children}</span>; }

function App() {
  const [view, setView] = useState("home");
  const [activeLevel, setActiveLevel] = useState(0);
  const [activeStory, setActiveStory] = useState(null);
  const [stage, setStage] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showVocabulary, setShowVocabulary] = useState(false);
  const [showParentNotes, setShowParentNotes] = useState(false);
  const [done, setDone] = useState(getSaved);
  const [storySearch, setStorySearch] = useState("");

  useEffect(() => {
    try { localStorage.setItem("ruang_cendikia_progress_v1", JSON.stringify(done)); } catch {}
  }, [done]);

  const navigate = next => { setView(next); window.scrollTo({top:0,behavior:"smooth"}); };
  const explore = level => { setActiveLevel(level); navigate("explore"); };
  const openStory = story => {
    setActiveStory(story); setStage(0); setQuestionIndex(0); setShowAnswer(false);
    setShowVocabulary(false); setShowParentNotes(false); navigate("story");
  };
  const nextStage = next => { setStage(next); setShowAnswer(false); window.scrollTo({top:0,behavior:"smooth"}); };
  const changeQuestion = next => { setQuestionIndex(next); setShowAnswer(false); };
  const markDone = () => {
    if (!activeStory) return;
    setDone(current => current.includes(activeStory.id) ? current : [...current, activeStory.id]);
  };
  const filtered = useMemo(() => LEVELS[activeLevel].stories.filter(s => (s.title+" "+s.lifeValue).toLowerCase().includes(storySearch.toLowerCase())), [activeLevel,storySearch]);
  const practice = activeStory ? (PRACTICES[activeStory.id] ?? {task:activeStory.kindnessTask,tip:activeStory.parentTip}) : null;
  const discussion = activeStory ? (DISCUSSION_EXAMPLES[activeStory.id] ?? {example:activeStory.parentExample,followUp:activeStory.parentFollowUp}) : null;
  const isComplete = activeStory && done.includes(activeStory.id);
  const currentQuestion = activeStory?.questions?.[questionIndex];
  const progress = Math.round(done.length / TOTAL * 100);

  return <div className="rc-app">
    <header className="rc-header">
      <div className="rc-container rc-nav">
        <button type="button" className="rc-brand" onClick={() => navigate("home")} aria-label="Ruang Cendekia, ke beranda">
          <BrandMark size={40} className="rc-logo-mark"/>
          <span>Ruang <span>Cendekia</span></span>
        </button>
        <nav className="rc-links" aria-label="Navigasi utama">
          <button className={view==="home"?"active":""} onClick={() => navigate("home")}>Beranda</button>
          <button className={view==="explore"?"active":""} onClick={() => explore(activeLevel)}>Cerita Gratis</button>
          <button className={view==="pricing"?"active":""} onClick={() => navigate("pricing")}>Paket Keluarga</button>
          <button className={view==="progress"?"active":""} onClick={() => navigate("progress")}>Perjalanan Kita</button>
        </nav>
        <button className="rc-nav-cta" onClick={() => explore(0)}>Mulai Cerita <span aria-hidden="true">↗</span></button>
      </div>
    </header>

    <main>
      {view === "home" && <CommerceHome onExplore={explore} onStory={openStory} onPricing={()=>navigate("pricing")}/>}

      {view === "pricing" && <PlansView onExplore={explore} onHome={()=>navigate("home")}/>}

      {view === "explore" && <section className="rc-container rc-inner-page">
        <div className="rc-page-heading">
          <span className="rc-kicker">KOLEKSI CERITA KITA</span>
          <h1>Pilih cerita, mulai <em>bermakna.</em></h1>
          <p>{TOTAL} cerita dalam 5 tingkatan, masing-masing 20 cerita. Pilih sesuai kesiapan anak; setiap cerita menyimpan pelajaran adab yang bisa dipraktikkan.</p>
        </div>
        <div className="rc-level-tabs" role="group" aria-label="Pilih tingkat pemahaman">
          {LEVELS.map((lvl,i) => <button key={lvl.level} className={activeLevel===i?"chosen":""} onClick={() => {setActiveLevel(i);setStorySearch("");}}>
            <span>{LEVEL_DETAILS[i].icon}</span> Tingkat {i+1}
          </button>)}
        </div>
        <div className={"rc-explore-intro rc-"+LEVEL_DETAILS[activeLevel].color}>
          <div><span>TINGKAT {activeLevel+1} • {LEVELS[activeLevel].stories.length} CERITA</span><h2>{LEVELS[activeLevel].title.split(": ").slice(1).join(": ")}</h2><p>{LEVELS[activeLevel].desc}</p></div>
          <div className="rc-explore-intro-icon">{LEVEL_DETAILS[activeLevel].icon}</div>
        </div>
        <div className="rc-collection-bar">
          <h3>Yuk, pilih ceritanya <span>({filtered.length})</span></h3>
          <label className="rc-search"><span>⌕</span><input value={storySearch} onChange={event=>setStorySearch(event.target.value)} placeholder="Cari judul atau nilai adab..." aria-label="Cari cerita"/></label>
        </div>
        <div className="rc-story-grid">
          {filtered.map((story,index) => <article className="rc-story-card" key={story.id}>
            <div className={"rc-story-thumb rc-"+LEVEL_DETAILS[activeLevel].color}>
              <span className="rc-card-number">CERITA {story.id}</span><StoryArt storyId={story.id} title={story.title} className="rc-story-art"/>
              {done.includes(story.id) && <span className="rc-complete-stamp">✓ Sudah selesai</span>}
            </div>
            <div className="rc-story-content">
              <span className="rc-mini-label">NILAI ADAB</span><div className="rc-story-value">{story.lifeValue}</div>
              <h3>{story.title}</h3><p>{story.text}</p>
              <button className="rc-card-cta" onClick={() => openStory(story)}>Mulai cerita <span>↗</span></button>
            </div>
          </article>)}
          {filtered.length===0 && <div className="rc-empty">Cerita tidak ditemukan. Coba kata kunci lain.</div>}
        </div>
        <p className="rc-explore-hint">💡 Tips: Tidak harus menuntaskan satu tingkat dalam sehari. Yang penting, anak nyaman bercerita bersama.</p>
      </section>}

      {view === "story" && activeStory && <section className="rc-container rc-story-page">
        <button className="rc-back" onClick={() => explore(Number(activeStory.id.split(".")[0])-1)}>← Kembali ke daftar cerita</button>
        <div className="rc-story-heading">
          <div><span className="rc-eyebrow">TINGKAT {activeStory.id.split(".")[0]} · CERITA {activeStory.id}</span>
            <h1>{activeStory.title}</h1>
            <p>💚 Nilai adab: <strong>{activeStory.lifeValue}</strong></p></div>
          <span className="rc-story-heading-icon">✦</span>
        </div>
        <div className="rc-stage-tabs" role="tablist" aria-label="Tahapan kegiatan">
          {["1 · Mendengar","2 · Memahami","3 · Meneladani"].map((label,i) => <button key={label} role="tab" aria-selected={stage===i} className={stage===i?"selected":""} onClick={() => nextStage(i)}>{label}</button>)}
        </div>

        {stage===0 && <div className="rc-reading-card">
          <div className="rc-reading-illustration"><StoryArt storyId={activeStory.id} title={activeStory.title}/></div>
          <div className="rc-read-head"><span>📖 BACAKAN UNTUK ANAK</span><span>Langkah 1 dari 3</span></div>
          <h2>Yuk, dengarkan ceritanya!</h2>
          <p className="rc-stage-intro">Orang tua membacakan cerita dengan tenang. Anak cukup mendengarkan tanpa perlu memegang atau melihat HP.</p>
          <div className="rc-reading-text">{activeStory.text}</div>
          {activeStory.newWords?.length>0 && <div className="rc-accordion">
            <button onClick={() => setShowVocabulary(!showVocabulary)} aria-expanded={showVocabulary}>📚 Kata baru dalam cerita <span>{showVocabulary?"−":"+"}</span></button>
            {showVocabulary && <div className="rc-accordion-body">{activeStory.newWords.map((w,i)=><p key={i}><strong>{w.term}</strong> — {w.def}</p>)}</div>}
          </div>}
          <div className="rc-stage-bottom"><span>💛 Bacakan perlahan, beri jeda, dan nikmati momen bersama.</span><button className="rc-btn rc-btn-primary" onClick={() => nextStage(1)}>Selesai Membaca, Lanjut Tanya <span>→</span></button></div>
        </div>}

        {stage===1 && <div className="rc-reading-card">
          <div className="rc-read-head"><span>💬 TANYA JAWAB LISAN</span><span>Langkah 2 dari 3</span></div>
          <h2>Yuk, ajak anak bercerita.</h2>
          <p className="rc-stage-intro">Bacakan satu pertanyaan, lalu tunggu jawaban anak. Pertanyaan dan pilihan jawaban hanya untuk dibacakan, bukan diisi di layar.</p>
          <div className="rc-question-track"><div style={{width: ((questionIndex+1)/activeStory.questions.length*100)+"%"}}/></div>
          <div className="rc-question-box">
            <div className="rc-question-illustration"><StoryArt storyId={activeStory.id} title={activeStory.title}/></div>
            <div className="rc-question-meta"><span>PERTANYAAN {questionIndex+1} / {activeStory.questions.length}</span><span>👂 Dengarkan jawabannya</span></div>
            <h3>{currentQuestion?.q}</h3>
            {currentQuestion?.type==="mc" && <div className="rc-options"><p>Jika perlu, bacakan pilihan berikut:</p>{currentQuestion.options?.map((opt,i)=><div key={i}>{opt}</div>)}</div>}
            {currentQuestion?.type==="tf" && <p className="rc-tf">Tanyakan: “Menurutmu, benar atau salah?”</p>}
            {showAnswer && <div className="rc-answer"><strong>🔑 Panduan jawaban untuk orang tua</strong><p>{currentQuestion?.answer}</p><small>Tidak perlu menuntut anak menjawab dengan kalimat yang persis sama.</small></div>}
            <button className="rc-reveal" onClick={() => setShowAnswer(!showAnswer)}>{showAnswer?"🙈 Sembunyikan panduan":"👁 Lihat panduan jawaban"}</button>
          </div>
          <div className="rc-question-nav">
            <button className="rc-btn rc-btn-secondary" disabled={questionIndex===0} onClick={() => changeQuestion(questionIndex-1)}>← Sebelumnya</button>
            {questionIndex < activeStory.questions.length-1 ?
              <button className="rc-btn rc-btn-primary" onClick={() => changeQuestion(questionIndex+1)}>Pertanyaan Berikutnya →</button> :
              <button className="rc-btn rc-btn-primary" onClick={() => nextStage(2)}>Lanjut ke Hikmah →</button>}
          </div>
          <div className="rc-parent-accordion"><button onClick={() => setShowParentNotes(!showParentNotes)} aria-expanded={showParentNotes}>💛 Tips untuk orang tua <span>{showParentNotes?"−":"+"}</span></button>
            {showParentNotes && <div><p>{practice?.tip}</p><p>Jika anak kesulitan, bantu dengan mengingatkan bagian cerita, bukan langsung memberikan jawaban. Hargai setiap usahanya.</p></div>}
          </div>
        </div>}

        {stage===2 && <div className="rc-reading-card">
          <div className="rc-read-head"><span>🌱 NILAI ADAB & AKSI KEBAIKAN</span><span>Langkah 3 dari 3</span></div>
          <h2>Dari cerita, jadi kebaikan.</h2><p className="rc-stage-intro">Setelah anak mendengar dan memahami cerita, mari temukan pelajaran yang bisa dicoba bersama dalam kehidupan nyata.</p>
          <div className="rc-meaning-grid">
            <article className="rc-meaning-card"><span>💚 NILAI ADAB</span><h3>{activeStory.lifeValue}</h3><p>{activeStory.lifeValueDesc}</p></article>
            <article className="rc-meaning-card rc-discussion-card"><span>💬 OBROLAN BERSAMA</span><h3>Yuk, direnungkan!</h3><p>{activeStory.reflect}</p><div className="rc-real-example"><strong>💡 Contoh untuk orang tua</strong><p>{discussion?.example}</p><small><b>Pertanyaan lanjutan:</b> {discussion?.followUp}</small></div></article>
          </div>
          <div className="rc-action-card"><span>✨ TANTANGAN KEBAIKAN HARI INI</span><h3>Satu aksi kecil, satu langkah baik.</h3><p>{practice?.task}</p><small>Aktivitas ini ajakan yang fleksibel, bukan kewajiban atau penilaian terhadap anak.</small></div>
          <div className="rc-quote"><span>✦ MUTIARA HIKMAH</span><p>{activeStory.pearl}</p></div>
          <div className="rc-completion">
            <div><h3>{isComplete?"Hebat, cerita ini sudah selesai bersama!":"Sudah selesai bercerita?"}</h3>
              <p>Tandai aktivitas keluarga ini tanpa skor atau formulir jawaban. Progres tersimpan di browser perangkat ini.</p></div>
            <button className={"rc-btn "+(isComplete?"rc-btn-done":"rc-btn-primary")} onClick={markDone} disabled={isComplete}>{isComplete?"✓ Sudah Selesai":"✓ Tandai Selesai"}</button>
          </div>
          {isComplete && <div className="rc-post-complete"><span>Terima kasih sudah menyediakan waktu untuk bercerita. 💛</span><button onClick={() => explore(Number(activeStory.id.split(".")[0])-1)}>Pilih Cerita Lain →</button></div>}
        </div>}
      </section>}

      {view==="progress" && <section className="rc-container rc-inner-page">
        <div className="rc-page-heading"><span className="rc-kicker">CATATAN KEBERSAMAAN</span><h1>Setiap cerita adalah <em>langkah baik.</em></h1><p>Catat cerita yang sudah dibacakan bersama. Tidak ada nilai dan tidak ada kompetisi—yang penting percakapannya.</p></div>
        <div className="rc-progress-panel">
          <div><span className="rc-mini-label">PERJALANAN KITA</span><h2>{done.length} <small>/ {TOTAL} cerita selesai</small></h2><p>Progres disimpan hanya di browser perangkat ini, tanpa akun dan tanpa sinkronisasi antarperangkat.</p></div>
          <div className="rc-progress-circle" style={{"--pct":progress+"%"}}><span>{progress}%</span></div>
        </div>
        <div className="rc-progress-list">{LEVELS.map((level,i) => <div className="rc-progress-group" key={i}>
          <div className="rc-progress-level"><span>{LEVEL_DETAILS[i].icon}</span><div><strong>Tingkat {i+1}</strong><small>{LEVEL_DETAILS[i].short}</small></div><b>{level.stories.filter(x=>done.includes(x.id)).length} / 3</b></div>
          {level.stories.map(story=><button key={story.id} onClick={()=>openStory(story)} className="rc-progress-row"><span className={done.includes(story.id)?"rc-status done":"rc-status"}>{done.includes(story.id)?"✓":"○"}</span><span>{story.title}</span><small>{done.includes(story.id)?"Sudah selesai":"Belum dibaca"}</small><b>↗</b></button>)}
        </div>)}</div>
        <div className="rc-reset-area"><p>Ingin mulai lagi dari awal?</p><button onClick={()=>{if(window.confirm("Hapus semua tanda cerita selesai di perangkat ini?"))setDone([])}}>Hapus catatan di perangkat</button></div>
      </section>}
    </main>
    <footer className="rc-footer"><div className="rc-container rc-footer-inner">
      <div><span className="rc-footer-brand"><BrandMark size={31}/> Ruang Cendekia</span><p>Ruang bagi orang tua dan anak untuk mendengar, memahami, dan meneladani kebaikan melalui cerita.</p></div>
      <div><strong>Jelajahi</strong><button onClick={() => explore(0)}>Koleksi Cerita</button><button onClick={() => navigate("pricing")}>Paket & Status Premium</button><button onClick={() => navigate("progress")}>Perjalanan Kita</button></div>
      <div><strong>Ruang Cendekia</strong><p>Koleksi memuat 15 cerita asli dari modul Ayo Memahami! Edisi Islami oleh Syahrul Ilmi dan 85 cerita tambahan Ruang Cendekia.</p><p>Beta terbuka: 100 cerita dapat dicoba secara gratis. Paket premium belum menerima pembayaran.</p></div>
    </div><div className="rc-container rc-footer-bottom">© {new Date().getFullYear()} Ruang Cendekia · Satu cerita, satu percakapan, satu pelajaran kebaikan.</div></footer>
  </div>;
}

export default App;
