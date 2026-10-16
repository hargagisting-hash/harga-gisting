export default function Badge({t}:{t:string}){const c=t==="NAIK"?"bg-rust":t==="TURUN"?"bg-leaf":"bg-stone-500";
 return <span className={`${c} text-white text-xs font-bold px-2 py-0.5 rounded`}>{t==="NAIK"?"▲":t==="TURUN"?"▼":"■"} {t}</span>;}
