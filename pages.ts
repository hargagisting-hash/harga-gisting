export type P={slug:string;title:string;group:"harga"|"info"|"alat"|"cuan"|"legal";commodity?:string};
const cap=(s:string)=>s.split("-").map(w=>w[0].toUpperCase()+w.slice(1)).join(" ");
export const COMMODITIES=["kopi","kol","cabai","tomat","bawang-merah","bawang-putih","jagung","singkong","pisang","sayur-mayur","ikan","ayam","telur","beras","cengkeh","lada","kakao","karet","sawit","kayu"];
const mk=(g:P["group"],s:string[]):P[]=>s.map(slug=>({slug,title:cap(slug),group:g}));
export const PAGES:P[]=[
...COMMODITIES.map(c=>({slug:`harga-${c}-gisting-hari-ini`,title:`Harga ${cap(c)} Gisting Hari Ini`,group:"harga" as const,commodity:c})),
...mk("info",["jadwal-pasar-gisting","cuaca-gisting-hari-ini","info-pasar-atas-gisting","info-pasar-bawah-gisting","peta-pasar-gisting","transport-ke-pasar-gisting","tips-belanja-pasar-gisting","tips-jualan-di-pasar-gisting","sejarah-pasar-gisting","kontak-pengelola-pasar-gisting"]),
...mk("alat",["kalkulator-harga-kopi","kalkulator-untung-rugi-tani","kalender-tanam-gisting","cek-kesuburan-tanah","harga-pupuk-gisting-hari-ini","info-bibit-unggul-gisting","cara-simpan-kopi-yang-benar","cara-packing-sayur-biar-awet","daftar-tengkulak-gisting","loker-pasar-gisting"]),
...mk("cuan",["belajar-investasi-pemula","investasi-crypto-pemula","cara-beli-emas-digital","kalkulator-investasi-bulanan","reksadana-vs-deposito"]),
...mk("legal",["tentang-kami","kontak","kebijakan-privasi"])];
export const SITE="https://hargagisting.com";
