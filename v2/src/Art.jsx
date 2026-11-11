import React from "react";
export function BrandIcon(){return <svg viewBox="0 0 80 80" role="img" aria-label="Logo Ruang Cendekia, lingkaran putih dan lengkungan hijau lime"><path d="M8 39 A32 32 0 0 0 72 39 L58 39 A18 18 0 0 1 22 39Z" fill="#C8FF00"/><circle cx="40" cy="33" r="17" fill="white" stroke="#EAF9FF" strokeWidth="2"/></svg>}
const blossom=[{x:52,y:399},{x:73,y:375},{x:106,y:415},{x:151,y:387},{x:174,y:427},{x:741,y:372},{x:777,y:403},{x:814,y:382},{x:849,y:425},{x:893,y:390}];
function OldWomanScene(){return <svg viewBox="0 0 920 520" role="img" aria-label="Ilustrasi faceless Zaid membantu Nenek Fatimah membawa belanjaan di jalan yang hijau" preserveAspectRatio="xMidYMid slice">
 <defs>
  <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#a7d3eb"/><stop offset=".65" stopColor="#ffe4ab"/><stop offset="1" stopColor="#f7d59e"/></linearGradient>
  <linearGradient id="hill1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a7bd83"/><stop offset="1" stopColor="#4f9b7e"/></linearGradient>
  <linearGradient id="path1" x1="0" y1="0" x2=".8" y2="1"><stop stopColor="#fff0c7"/><stop offset="1" stopColor="#cda66f"/></linearGradient>
  <linearGradient id="robe1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b26f75"/><stop offset=".65" stopColor="#935d6a"/><stop offset="1" stopColor="#6d4b58"/></linearGradient>
  <linearGradient id="green1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#83a46f"/><stop offset="1" stopColor="#3f7651"/></linearGradient>
  <radialGradient id="glow1"><stop stopColor="#fff5c6" stopOpacity=".97"/><stop offset="1" stopColor="#fff5c6" stopOpacity="0"/></radialGradient>
  <filter id="blur1"><feGaussianBlur stdDeviation="8"/></filter>
 </defs>
 <rect width="920" height="520" fill="url(#sky1)"/>
 <circle cx="735" cy="100" r="170" fill="url(#glow1)"/><circle cx="745" cy="105" r="44" fill="#fff4c4" opacity=".9"/>
 <path d="M0 263 Q102 188 214 248 Q374 136 527 238 Q722 127 920 250 V520 H0Z" fill="#a2b9aa" opacity=".55"/>
 <path d="M0 291 Q150 218 267 295 Q445 180 610 276 Q780 214 920 270 V520H0" fill="#7da691" opacity=".74"/>
 <path d="M0 335 Q185 267 320 339 Q500 265 671 335 Q798 271 920 327 V520H0" fill="url(#hill1)"/>
 <path d="M0 422 Q210 365 380 424 Q630 357 920 426 V520H0" fill="#7aa56c"/>
 <path d="M268 520 Q349 398 501 349 Q606 328 706 342 Q583 400 622 520Z" fill="url(#path1)" opacity=".93"/>
 <path d="M0 450 Q180 426 281 453 Q450 420 600 450 Q770 417 920 446V520H0Z" fill="#8baf67" opacity=".65"/>
 <g opacity=".9">
  <path d="M85 318 Q68 226 89 118 M85 192 Q47 147 28 128 M86 229 Q138 155 147 139" fill="none" stroke="#755f44" strokeWidth="21" strokeLinecap="round"/>
  <circle cx="64" cy="121" r="81" fill="#7a9960"/><circle cx="105" cy="133" r="69" fill="#98b274"/><circle cx="24" cy="170" r="55" fill="#adc180"/><circle cx="140" cy="190" r="48" fill="#638d59"/>
  <path d="M840 309 Q827 196 856 66 M850 139 Q773 103 749 43 M844 208 Q914 163 925 118" fill="none" stroke="#765e49" strokeWidth="28" strokeLinecap="round"/>
  <circle cx="845" cy="64" r="93" fill="#88a86a"/><circle cx="765" cy="80" r="65" fill="#9cb778"/><circle cx="909" cy="139" r="83" fill="#739e61"/>
 </g>
 <g opacity=".5" filter="url(#blur1)"><ellipse cx="466" cy="454" rx="215" ry="20" fill="#5c6340"/></g>
 <g>
  <path d="M546 405 L538 475 Q554 489 578 476 L590 415Z" fill="#765649"/><path d="M631 415 L644 478 Q662 489 682 473 L674 404Z" fill="#765649"/>
  <path d="M534 210 Q548 164 603 152 Q666 148 689 214 Q728 258 719 356 L730 437 Q641 464 515 430 L526 355 Q495 287 534 210Z" fill="url(#robe1)"/>
  <path d="M565 176 Q605 112 659 167 Q696 211 683 268 L661 300 Q648 269 583 268 L550 296 Q531 224 565 176Z" fill="#97616e"/>
  <ellipse cx="616" cy="219" rx="43" ry="54" fill="#f1c7a1"/>
  <path d="M578 172 Q617 139 654 174" fill="none" stroke="#7a5360" strokeWidth="12" strokeLinecap="round"/>
  <path d="M534 276 Q510 304 501 352 Q514 366 532 358 L574 317" fill="#a87778"/><path d="M694 275 Q720 310 700 356 L680 353 L654 315" fill="#96616b"/>
  <ellipse cx="510" cy="355" rx="13" ry="17" fill="#ebbd9c"/><ellipse cx="687" cy="354" rx="13" ry="17" fill="#e5b995"/>
  <path d="M573 289 Q615 315 665 289" fill="none" stroke="#e3b7a0" strokeWidth="5" strokeDasharray="7 10" opacity=".8"/>
 </g>
 <g>
  <path d="M319 398 L314 469 Q330 480 348 473 L362 405Z" fill="#577454"/><path d="M384 404 L388 472 Q406 479 422 465 L422 390Z" fill="#5e8154"/>
  <path d="M308 283 Q317 254 352 247 L397 244 Q424 267 430 319 L438 414 Q382 435 302 408 L297 350Z" fill="url(#green1)"/>
  <path d="M324 223 Q327 187 375 186 Q414 187 418 225 L404 249 L332 247Z" fill="#6e4e38"/>
  <ellipse cx="367" cy="241" rx="42" ry="51" fill="#f6d0a7"/>
  <path d="M312 225 Q338 171 389 181 Q418 187 429 225 Q393 214 358 219 Q333 227 312 225Z" fill="#f8ecd4" stroke="#d8c7a6" strokeWidth="3"/>
  <path d="M325 205 Q369 186 407 207" fill="none" stroke="#d6b58c" strokeWidth="4"/>
  <path d="M302 322 Q298 358 326 369 L371 344" stroke="#66966b" strokeWidth="25" fill="none" strokeLinecap="round"/>
  <ellipse cx="377" cy="345" rx="12" ry="12" fill="#f3c59b"/>
 </g>
 <g>
 <path d="M389 350 Q393 339 410 337 L511 343 L521 439 Q451 455 391 435Z" fill="#eac394" stroke="#ae865f" strokeWidth="3"/>
 <path d="M415 357 Q417 314 446 314 Q478 311 482 354" fill="none" stroke="#ad865d" strokeWidth="11" strokeLinecap="round"/>
 <path d="M431 341 Q425 304 438 279 Q451 302 451 340Z" fill="#5f9c5d"/><path d="M459 340 Q461 300 487 278 Q497 318 482 342Z" fill="#6b9f53"/><path d="M475 339 Q510 295 530 308 Q521 343 487 351Z" fill="#80ae69"/>
 <circle cx="422" cy="356" r="16" fill="#d2754c"/><circle cx="473" cy="354" r="17" fill="#df8e52"/><circle cx="496" cy="364" r="17" fill="#e9a44b"/>
 <path d="M450 391 Q460 377 476 393 Q469 414 452 415 Q441 402 450 391Z" fill="#6a9a60"/>
 </g>
 {blossom.map(({x,y},i)=><g key={i}><path d={"M"+x+" "+(y+20)+" v20"} stroke="#5b9159" strokeWidth="3"/><circle cx={x} cy={y} r="7" fill={i%3===0?"#f7bfd1":i%3===1?"#fff0dc":"#f7eab1"}/><circle cx={x+6} cy={y+6} r="5" fill="#fff8e8"/><circle cx={x-6} cy={y+3} r="5" fill="#fff8e8"/><circle cx={x} cy={y+4} r="3" fill="#e2af64"/></g>)}
 <path d="M0 491 Q200 475 385 499 Q553 474 920 499" stroke="#e2c983" strokeWidth="5" fill="none" opacity=".65"/>
 </svg>}
function GenericArt({story}){
 const level=Math.max(1,Math.min(5,Number(story.id?.split(".")[0])||1)),n=Number(story.id?.split(".")[1])||1;
 const combos=[["#D6ECFA","#9CCBC0","#E6B068","#33679A"],["#FDEBCC","#B4D0A5","#E6A987","#648759"],["#EEDCEF","#B9C3D7","#CF95A5","#6D73A0"],["#D8F0EA","#9ED2BD","#D6AA76","#407E89"],["#FAE7D2","#BBCBA0","#D5A7A7","#9B785B"]];
 const [sky,hill,sun,ink]=combos[level-1];
 return <svg viewBox="0 0 920 520" role="img" aria-label={"Ilustrasi sampul dekoratif cerita "+story.title} preserveAspectRatio="xMidYMid slice">
 <defs><linearGradient id={"cover"+level} x1="0" y1="0" x2="0" y2="1"><stop stopColor={sky}/><stop offset="1" stopColor="#fff9e6"/></linearGradient></defs>
 <rect width="920" height="520" fill={"url(#cover"+level+")"}/>
 <circle cx={670+(n%4)*25} cy="120" r="72" fill={sun} opacity=".65"/>
 <path d="M0 305 Q165 218 316 298 Q510 160 713 286 Q817 252 920 286V520H0Z" fill={hill} opacity=".55"/>
 <path d="M0 390 Q181 313 368 397 Q618 298 920 380V520H0Z" fill={hill}/>
 <path d="M0 445 Q193 398 380 456 Q622 389 920 434V520H0Z" fill={ink} opacity=".16"/>
 <g transform={"rotate("+(n%5-2)*2+" 465 310)"}>
  <path d="M261 184 Q340 161 450 208 V429 Q338 373 261 404Z" fill="#fffaf0" stroke={ink} strokeWidth="11"/>
  <path d="M450 208 Q565 164 657 188 V405 Q546 367 450 429Z" fill="#fff4e1" stroke={ink} strokeWidth="11"/>
  <path d="M450 208V429" stroke={ink} strokeWidth="8"/>
  <path d="M292 240 Q362 224 414 255 M292 278 Q368 263 414 290 M292 320 Q369 302 414 338 M480 252 Q543 229 620 238 M480 293 Q554 270 620 280 M480 331 Q556 309 620 318" stroke={sun} strokeWidth="8" strokeLinecap="round" fill="none" opacity=".85"/>
 </g>
 <g fill={sun}><circle cx="231" cy="168" r="12"/><circle cx="682" cy="257" r="10"/><circle cx="718" cy="278" r="7"/></g>
 <text x="466" y="117" fontSize="36" textAnchor="middle" fontWeight="800" fill={ink} fontFamily="sans-serif" opacity=".7">CERITA {story.id}</text>
 </svg>
}
export function SceneArt({story}){if(!story)return null;return story.id==="1.1"?<OldWomanScene/>:<GenericArt story={story}/>;}
