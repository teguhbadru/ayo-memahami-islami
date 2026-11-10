import React from "react";

/** Faithful vector adaptation of the supplied green-circle / golden-arc brand mark. */
export function BrandMark({ size = 44, className = "" }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Lambang Ruang Cendekia, lingkaran hijau di atas lengkungan emas">
    <defs>
      <linearGradient id="rc-arc-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#F5D66B"/><stop offset=".55" stopColor="#FFC12F"/><stop offset="1" stopColor="#EB9F24"/>
      </linearGradient>
      <radialGradient id="rc-dot-grad" cx=".4" cy=".55" r=".75">
        <stop offset="0" stopColor="#078B16"/><stop offset=".53" stopColor="#5BA443"/><stop offset="1" stopColor="#9EB467"/>
      </radialGradient>
    </defs>
    <path d="M 6 39 C 6 100, 94 100, 94 39 L 76 39 C 76 74, 24 74, 24 39 Z" fill="url(#rc-arc-grad)"/>
    <circle cx="50" cy="29" r="22" fill="url(#rc-dot-grad)" stroke="#fdfbf3" strokeWidth="3.5"/>
  </svg>;
}

const ART_META = {
  "1.1": {kind:"help", label:"Anak membantu nenek membawa belanjaan"},
  "1.2": {kind:"share", label:"Anak berbagi bekal di sekolah"},
  "1.3": {kind:"honest", label:"Anak berbicara jujur kepada orang tua"},
  "2.1": {kind:"seed", label:"Orang dewasa menanam biji di kebun"},
  "2.2": {kind:"tidy", label:"Anak merapikan mainan dan kamar"},
  "2.3": {kind:"bake", label:"Seseorang berbagi kue pisang"},
  "3.1": {kind:"kite", label:"Dua anak bermain layang-layang"},
  "3.2": {kind:"shoes", label:"Anak mensyukuri sepasang sepatu"},
  "3.3": {kind:"forest", label:"Orang dewasa dan anak menjaga pepohonan"},
  "4.1": {kind:"wallet", label:"Anak menemukan dompet di jalan"},
  "4.2": {kind:"draw", label:"Anak-anak mengikuti lomba menggambar"},
  "4.3": {kind:"save", label:"Anak memasukkan uang ke celengan"},
  "5.1": {kind:"prepare", label:"Orang dewasa mempersiapkan pekerjaan"},
  "5.2": {kind:"mosque", label:"Warga berdiskusi di kebun masjid"},
  "5.3": {kind:"team", label:"Anak-anak menyelesaikan tugas bersama"}
};

const P = ({x,y,scale=1,color="#7d9e6d",hijab=false,child=false,flip=false}) => (
  <g transform={'translate('+x+' '+y+') scale('+(flip?-scale:scale)+','+scale+')'}>
    <ellipse cx="80" cy="269" rx="69" ry="10" fill="#41573f" opacity=".12"/>
    <path d="M46 207 L52 271 Q67 279 80 270 L84 213" fill="#78634e"/>
    <path d="M91 206 L94 272 Q113 279 124 269 L119 202" fill="#78634e"/>
    <path d="M39 150 Q51 112 78 112 Q118 109 134 155 L149 239 Q88 260 20 239 Z" fill={color}/>
    <path d="M42 163 Q10 199 26 230" fill="none" stroke={color} strokeWidth="26" strokeLinecap="round"/>
    <path d="M130 160 Q156 192 154 223" fill="none" stroke={color} strokeWidth="25" strokeLinecap="round"/>
    <circle cx="26" cy="233" r="13" fill="#F3BD94"/><circle cx="154" cy="225" r="13" fill="#F3BD94"/>
    {hijab ? <>
      <path d="M24 128 Q8 40 47 13 Q85 -15 126 14 Q158 47 132 137 Q142 173 160 202 Q76 235 4 197 Q20 166 24 128Z" fill="#B8797D"/>
      <path d="M42 121 Q19 97 29 54 Q38 16 81 16 Q123 16 129 67 Q135 97 119 124 L105 145 L54 143 Z" fill="#CD9092"/>
      <ellipse cx="79" cy="82" rx="39" ry="46" fill="#F4BF9A"/>
      <path d="M43 120 Q75 139 114 115 Q118 153 126 165 Q78 185 34 164Z" fill="#B8797D"/>
    </> : <>
      <ellipse cx="80" cy="79" rx="40" ry="45" fill="#F3BD94"/>
      <path d={child ? "M39 80 Q35 30 75 23 Q130 20 122 90 Q113 61 100 58 Q73 76 43 65Z" : "M34 78 Q29 16 78 19 Q128 16 124 90 L115 58 Q81 68 38 56Z"} fill="#4F382B"/>
      {child && <path d="M34 45 Q82 -5 129 45 L133 56 Q89 36 31 57Z" fill="#FEF7E8" stroke="#E8DCC3" strokeWidth="3"/>}
    </>}
  </g>
);

function Tree({x,y,scale=1}) {
  return <g transform={'translate('+x+' '+y+') scale('+scale+')'}>
    <path d="M40 140 L40 48" stroke="#AB7951" strokeWidth="20" strokeLinecap="round"/>
    <circle cx="13" cy="56" r="40" fill="#B7CF91"/><circle cx="61" cy="46" r="48" fill="#91B977"/>
    <circle cx="43" cy="12" r="40" fill="#A7C886"/><circle cx="82" cy="72" r="27" fill="#719E69"/>
  </g>;
}
const Rect = ({x,y,w,h,fill="#F5E2B8",r=8}) => <rect x={x} y={y} width={w} height={h} rx={r} fill={fill}/>;

function SceneObjects({kind}) {
  switch(kind) {
    case "help": return <>
      <P x={104} y={100} scale={.83} color="#678965" child/>
      <P x={377} y={52} scale={1.04} hijab color="#A97970"/>
      <g transform="translate(283 241)"><Rect x={0} y={0} w={78} h={90} fill="#F3DEB4" r={8}/><path d="M15 7 Q39 -37 61 7" fill="none" stroke="#C79B72" strokeWidth="8"/><path d="M23 2 Q9 -24 33 -21 Q49 -9 28 9" fill="#7CA568"/><path d="M52 0 Q49 -25 69 -18 Q71 -3 58 7" fill="#A2B969"/></g>
    </>;
    case "share": return <>
      <P x={107} y={106} scale={.83} color="#C88A6C" hijab/>
      <P x={374} y={116} scale={.82} color="#779A77" child/>
      <Rect x={258} y={245} w={125} h={66} fill="#EFC579" r={16}/>
      <Rect x={271} y={260} w={45} h={35} fill="#F7EFCE" r={5}/><circle cx={349} cy={279} r={19} fill="#F2B474"/>
      </>;
    case "honest": return <>
      <P x={111} y={110} scale={.88} color="#81A580" child/>
      <P x={395} y={72} scale={1.0} color="#BE8C81" hijab/>
      <path d="M300 97 Q318 60 348 92 Q371 122 321 148Z" fill="#FFFAEF" stroke="#E0CAB8" strokeWidth={4}/>
      <path d="M316 95 L328 109 L343 88" stroke="#77A36F" strokeWidth={6} fill="none" strokeLinecap="round"/>
      </>;
    case "seed": return <>
      <P x={190} y={100} color="#829C72"/>
      <path d="M180 327 Q240 286 314 322 Q398 292 474 324" fill="none" stroke="#986C51" strokeWidth={42} strokeLinecap="round"/>
      {[0,1,2,3].map(i=><g key={i} transform={'translate('+(213+i*67)+' 312)'}><path d="M0 0 L0 -56" stroke="#618D53" strokeWidth={6}/><ellipse cx={-12} cy={-37} rx={15} ry={8} transform="rotate(28 -12 -37)" fill="#8BB67B"/><ellipse cx={13} cy={-46} rx={15} ry={8} transform="rotate(-30 13 -46)" fill="#9AC583"/></g>)}
      </>;
    case "tidy": return <>
      <Rect x={74} y={162} w={153} h={162} fill="#E0BE98" r={15}/>
      <Rect x={94} y={184} w={115} h={122} fill="#FCF8EB" r={9}/>
      <P x={293} y={109} scale={.87} child color="#82A488"/>
      <Rect x={208} y={298} w={80} h={54} fill="#E6C38A" r={10}/>
      <circle cx={239} cy={293} r={21} fill="#E69E6C"/><Rect x={271} y={311} w={45} h={40} fill="#D1AE84" r={4}/>
      </>;
    case "bake": return <>
      <P x={117} y={86} scale={1.0} color="#8EAA7B"/>
      <P x={393} y={135} scale={.77} child color="#B47C61"/>
      <Rect x={238} y={269} w={172} h={36} fill="#C89062" r={13}/>
      {[0,1,2,3].map(i=><ellipse key={i} cx={261+i*41} cy={264} rx={24} ry={13} fill="#E7B66B"/>)}
      </>;
    case "kite": return <>
      <P x={119} y={135} scale={.77} child color="#9A8573"/>
      <P x={400} y={136} scale={.77} child color="#83A26E"/>
      <path d="M360 66 L396 11 L432 66 L396 117 Z" fill="#E8A16A" stroke="#F4E2B7" strokeWidth={5}/>
      <path d="M397 117 Q360 185 294 254" stroke="#A68F75" strokeWidth={3} fill="none" strokeDasharray="6 5"/>
      </>;
    case "shoes": return <>
      <P x={240} y={108} color="#AE867D" child scale={.91}/>
      <Rect x={110} y={306} w={435} h={40} fill="#D3B28B" r={13}/>
      <path d="M280 273 Q296 289 345 286 Q375 290 380 317 L260 317Z" fill="#668B73"/>
      <path d="M405 273 Q424 292 468 289 Q500 291 507 318 L386 318Z" fill="#84A38A"/>
      </>;
    case "forest": return <>
      <Tree x={62} y={93} scale={1.22}/><Tree x={484} y={78} scale={1.45}/>
      <P x={206} y={144} scale={.67} child color="#C99577"/>
      <P x={358} y={99} scale={.85} color="#819A75"/>
      <g transform="translate(324 272)"><path d="M0 40 V-20" stroke="#619858" strokeWidth={6}/><ellipse cx={-14} cy={0} rx={17} ry={10} transform="rotate(30 -14 0)" fill="#8DBA71"/><ellipse cx={18} cy={-17} rx={17} ry={10} transform="rotate(-30 18 -17)" fill="#86B479"/></g>
      </>;
    case "wallet": return <>
      <P x={153} y={116} scale={.87} color="#769970" child/>
      <g transform="translate(384 292) rotate(-13)"><Rect x={0} y={0} w={102} h={57} fill="#9C704A" r={12}/><Rect x={42} y={10} w={60} h={29} fill="#B88B61" r={7}/><circle cx={59} cy={24} r={6} fill="#E9CF9B"/></g>
      <path d="M371 135 L384 151 L402 119" fill="none" stroke="#92AD7C" strokeWidth={8} strokeLinecap="round"/>
      </>;
    case "draw": return <>
      <P x={113} y={125} scale={.8} color="#C98B75" child/>
      <P x={395} y={126} scale={.8} color="#6F9886" child/>
      <Rect x={250} y={153} w={133} h={158} fill="#D6B58A" r={5}/>
      <Rect x={262} y={170} w={109} h={122} fill="#FFF9E9" r={4}/>
      <path d="M274 272 L308 231 L336 256 L362 210" stroke="#78A47E" strokeWidth={10} fill="none"/>
      <circle cx={289} cy={199} r={14} fill="#E3AF62"/>
      </>;
    case "save": return <>
      <P x={213} y={114} scale={.85} color="#BC8C89" child/>
      <Rect x={90} y={312} w={470} h={35} fill="#CDA47D" r={10}/>
      <ellipse cx={400} cy={282} rx={76} ry={61} fill="#E9B981"/>
      <Rect x={344} y={271} w={112} h={61} fill="#E7AF73" r={15}/>
      <Rect x={387} y={247} w={33} h={6} fill="#8A694D" r={3}/>
      <circle cx={405} cy={225} r={18} fill="#E9C780" stroke="#F5E8BF" strokeWidth={4}/>
      </>;
    case "prepare": return <>
      <P x={185} y={93} scale={1} color="#79977A"/>
      <Rect x={334} y={170} w={187} h={165} fill="#EEDABD" r={9}/>
      <Rect x={350} y={182} w={155} h={132} fill="#FFFDF4" r={5}/>
      {[0,1,2].map(i=><g key={i}><Rect x={366} y={194+i*36} w={20} h={20} fill="#DDE8D5" r={3}/><path d={'M371 '+(206+i*36)+' L377 '+(212+i*36)+' L388 '+(199+i*36)} stroke="#609164" fill="none" strokeWidth={3}/><Rect x={401} y={203+i*36} w={91} h={7} fill="#D7C9B0" r={3}/></g>)}
      </>;
    case "mosque": return <>
      <path d="M255 200 Q322 116 388 200 Z" fill="#9ABA9A"/>
      <Rect x={245} y={194} w={152} h={113} fill="#E6CFAC" r={6}/>
      <Rect x={312} y={257} w={35} h={49} fill="#8A9B76" r={13}/>
      <Rect x={236} y={181} w={8} h={111} fill="#D7B98C" r={2}/><Rect x={397} y={180} w={8} h={113} fill="#D7B98C" r={2}/>
      <P x={75} y={155} scale={.68} color="#8B9E77"/>
      <P x={470} y={155} scale={.68} color="#B8867D" hijab/>
      <path d="M194 327 Q305 302 452 329" stroke="#9D7355" strokeWidth={23} fill="none"/>
      </>;
    case "team": return <>
      <P x={67} y={125} scale={.78} child color="#C59177"/>
      <P x={269} y={129} scale={.78} child color="#729C89"/>
      <P x={463} y={128} scale={.78} child color="#A49A74"/>
      <Rect x={193} y={290} w={273} h={37} fill="#CF9D75" r={10}/>
      <Rect x={259} y={260} w={117} h={45} fill="#FFFAEC" r={4}/>
      <path d="M273 271 H360 M273 280 H333" stroke="#91AD82" strokeWidth={4}/>
      </>;
    default: return <P x={240} y={102} color="#89AB89" child/>;
  }
}

/** Purpose-built faceless art for all 15 original stories. No stock art or external image requests. */
export function StoryArt({storyId, title, className=""}) {
  const meta = ART_META[storyId] || ART_META["1.1"];
  const indoor = ["tidy","honest","bake","shoes","draw","save","prepare","team"].includes(meta.kind);
  return <svg className={className} viewBox="0 0 640 400" role="img" aria-label={title ? "Ilustrasi tanpa wajah untuk "+title+": "+meta.label : meta.label} preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="rc-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FFF3DC"/><stop offset="1" stopColor="#E9EED9"/></linearGradient>
    </defs>
    <Rect x={0} y={0} w={640} h={400} fill={indoor?"#F5E8D4":"url(#rc-sky)"} r={0}/>
    {indoor ? <>
      <Rect x={0} y={0} w={640} h={272} fill="#F8E9D8" r={0}/>
      <Rect x={33} y={37} w={170} h={143} fill="#D0D9BA" r={17}/>
      <Rect x={46} y={50} w={144} h={117} fill="#EBF2D7" r={8}/>
      <path d="M120 52 V165 M46 108 H188" stroke="#E3C7A8" strokeWidth={9}/>
      <path d="M0 329 H640" stroke="#D9B798" strokeWidth={125}/>
      <rect x={448} y={53} width={121} height={79} rx={14} fill="#EAC7A9"/>
      <path d="M475 108 Q505 65 538 104" stroke="#BD9282" strokeWidth={8} fill="none"/>
    </> : <>
      <circle cx={511} cy={72} r={45} fill="#FFE4A3" opacity=".65"/>
      <path d="M0 256 Q125 208 259 257 Q383 174 640 245 L640 400 H0 Z" fill="#CAD9AB"/>
      <path d="M0 298 Q175 268 349 304 Q509 263 640 285 V400 H0 Z" fill="#A8C594"/>
      <path d="M0 362 Q282 315 640 359 V400 H0 Z" fill="#E9D9B8"/>
      <Tree x={-16} y={102} scale={.96}/><Tree x={552} y={122} scale={.8}/>
    </>}
    <SceneObjects kind={meta.kind}/>
    <g opacity=".9"><circle cx={57} cy={357} r={5} fill="#fff"/><circle cx={76} cy={347} r={5} fill="#fff"/><circle cx={524} cy={348} r={5} fill="#fff"/><circle cx={545} cy={356} r={5} fill="#fff"/></g>
  </svg>;
}
