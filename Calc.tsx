"use client";import {useState} from "react";
export default function Calc(){const [q,setQ]=useState(100),[p,setP]=useState(50000),[c,setC]=useState(3000000);
 const rev=q*p,net=rev-c;const I=(l:string,v:number,f:(n:number)=>void)=><label className="block text-sm">{l}<input type="number" value={v} onChange={e=>f(+e.target.value)} className="block w-full border rounded p-2 mt-1"/></label>;
 return <div className="space-y-3 max-w-sm">{I("Jumlah (kg)",q,setQ)}{I("Harga per kg (Rp)",p,setP)}{I("Total biaya (Rp)",c,setC)}
 <p className="font-bold">Pendapatan Rp{rev.toLocaleString("id-ID")} · {net>=0?"Untung":"Rugi"} Rp{Math.abs(net).toLocaleString("id-ID")}</p></div>;}
