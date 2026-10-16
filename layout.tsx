import "./globals.css";import Link from "next/link";import type {Metadata} from "next";
export const metadata:Metadata={metadataBase:new URL("https://hargagisting.com"),title:{default:"Harga Gisting Hari Ini - hargagisting.com",template:"%s | hargagisting.com"},description:"Harga komoditas Pasar Gisting hari ini lengkap dengan foto bukti ber-timestamp."};
export default function L({children}:{children:React.ReactNode}){const id=process.env.NEXT_PUBLIC_ADSENSE_ID;
 return <html lang="id"><head>{id&&<script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${id}`} crossOrigin="anonymous"/>}</head>
 <body><header className="border-b border-stone-300 px-4 py-3"><Link href="/" className="font-black text-xl">harga<span className="text-leaf">gisting</span>.com</Link></header>
 <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
 <footer className="border-t border-stone-300 px-4 py-6 text-sm flex gap-4 flex-wrap"><Link href="/tentang-kami">Tentang</Link><Link href="/kontak">Kontak</Link><Link href="/kebijakan-privasi">Privasi</Link><span>© {new Date().getFullYear()} hargagisting.com</span></footer></body></html>;}
