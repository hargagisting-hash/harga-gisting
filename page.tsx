import {notFound} from "next/navigation";import type {Metadata} from "next";import Link from "next/link";
import {PAGES,SITE} from "@/lib/pages";import {history,summarize,rp} from "@/lib/db";import Chart from "@/components/Chart";import Badge from "@/components/Badge";import Ad from "@/components/Ad";import Calc from "@/components/Calc";
export const revalidate=60;
export const generateStaticParams=()=>PAGES.map(p=>({slug:p.slug}));
export async function generateMetadata({params}:{params:{slug:string}}):Promise<Metadata>{const p=PAGES.find(x=>x.slug===params.slug);if(!p)return {};
 return {title:p.title,description:`${p.title} - hargagisting.com`,alternates:{canonical:`${SITE}/${p.slug}`}};}
export default async function Page({params}:{params:{slug:string}}){
 const p=PAGES.find(x=>x.slug===params.slug);if(!p)notFound();
 if(p.group==="harga"&&p.commodity){
  const rows=await history(p.commodity);const A=summarize(rows,"atas"),B=summarize(rows,"bawah");
  const foto=(rows.find(r=>r.photo_url)?.photo_url)??null;
  const wa=`https://wa.me/?text=${encodeURIComponent(`🔥 ${p.commodity.toUpperCase()} UPDATE! Selisih ${A.last&&B.last?rp(Math.abs(A.last.price-B.last.price)):"-"} 📸 Bukti foto: ${SITE}/${p.slug}?utm_source=wa`)}`;
  return <article><h1 className="text-3xl font-black">{p.title}</h1><Ad slot="top"/>
  <div className="grid md:grid-cols-2 gap-4">{([["Pasar Atas",A],["Pasar Bawah",B]] as const).map(([n,s])=>
   <div key={n} className="bg-white border border-stone-300 rounded-lg p-4"><div className="text-sm text-stone-500">{n}</div>
   <div className="text-3xl font-black">{s.last?rp(s.last.price):"Belum ada data"}</div>{s.last&&<><Badge t={s.trend}/><div className="text-xs text-stone-500 mt-1">{new Date(s.last.created_at).toLocaleString("id-ID",{timeZone:"Asia/Jakarta"})} WIB</div></>}</div>)}</div>
  <h2 className="font-bold mt-6 mb-2">Grafik 7 hari <span className="text-xs font-normal">(hijau: atas, oranye: bawah)</span></h2><Chart a={A.series} b={B.series}/>
  <Ad slot="mid"/>
  <h2 className="font-bold mt-4 mb-2">Atas vs Bawah</h2>
  <table className="w-full bg-white border text-sm"><thead><tr className="bg-stone-100"><th className="p-2 text-left">Pasar</th><th className="p-2 text-left">Harga</th><th className="p-2 text-left">Tren</th></tr></thead><tbody>
  <tr><td className="p-2">Atas</td><td className="p-2">{A.last?rp(A.last.price):"-"}</td><td className="p-2">{A.trend}</td></tr><tr><td className="p-2">Bawah</td><td className="p-2">{B.last?rp(B.last.price):"-"}</td><td className="p-2">{B.trend}</td></tr></tbody></table>
  {foto&&<figure className="mt-6"><img src={foto} alt={`Foto ${p.commodity} Pasar Gisting dengan timestamp`} className="rounded-lg w-full max-w-xl"/><figcaption className="text-xs text-stone-500 mt-1">Foto asli ber-timestamp jam dan lokasi.</figcaption></figure>}
  <a href={wa} className="inline-block mt-6 bg-leaf text-white font-bold px-4 py-2 rounded">Share WhatsApp</a><Ad slot="bottom"/></article>;}
 return <article className="max-w-2xl"><h1 className="text-3xl font-black">{p.title}</h1><Ad slot="top"/>
 {p.slug.startsWith("kalkulator")&&<Calc/>}
 <p className="mt-4">Halaman {p.title} dikelola oleh tim hargagisting.com untuk petani, pedagang, dan warga Gisting, Tanggamus, Lampung. Isi diperbarui berkala oleh pengelola.</p>
 <Ad slot="bottom"/><Link href="/" className="underline">← Beranda</Link></article>;}
