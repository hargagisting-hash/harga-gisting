export default function Chart({a,b}:{a:number[];b:number[]}){
 const all=[...a,...b];if(all.length<2)return <p className="text-sm text-stone-500">Grafik muncul setelah ada 2+ data.</p>;
 const mn=Math.min(...all),mx=Math.max(...all),W=320,H=110;
 const pts=(s:number[])=>s.map((v,i)=>`${(i/Math.max(1,s.length-1))*W},${H-((v-mn)/(mx-mn||1))*(H-10)-5}`).join(" ");
 return <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md"><polyline points={pts(a)} fill="none" stroke="#1f6f43" strokeWidth="3"/><polyline points={pts(b)} fill="none" stroke="#c2410c" strokeWidth="3"/></svg>;}
