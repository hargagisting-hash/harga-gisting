import sharp from "sharp";
export function wib(d=new Date()){
 const s=new Intl.DateTimeFormat("id-ID",{timeZone:"Asia/Jakarta",day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:false}).format(d).replace(/\./g,":").replace(",","");
 return s+" WIB";}
const esc=(s:string)=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;");
export async function watermark(buf:Buffer,market:"atas"|"bawah"){
 const img=sharp(buf).rotate();const {width:w=1080,height:h=1080}=await img.metadata();
 const fs=Math.max(18,Math.round(w*0.026)),pad=Math.round(fs*0.6);
 const l1=`PASAR ${market.toUpperCase()} GISTING - ${wib()}`,l2="hargagisting.com";
 const bw=Math.min(w-20,Math.round(l1.length*fs*0.62)+pad*2),bh=Math.round(fs*2.5)+pad;
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${bw}" height="${bh}"><rect width="100%" height="100%" rx="10" fill="#000" fill-opacity="0.7"/>
<text x="${pad}" y="${pad+fs*0.9}" font-family="DejaVu Sans,Arial,sans-serif" font-weight="bold" font-size="${fs}" fill="#fff">${esc(l1)}</text>
<text x="${pad}" y="${pad+fs*2.1}" font-family="DejaVu Sans,Arial,sans-serif" font-weight="bold" font-size="${Math.round(fs*0.85)}" fill="#fff">${l2}</text></svg>`;
 return img.composite([{input:Buffer.from(svg),left:Math.max(0,w-bw-12),top:Math.max(0,h-bh-12)}]).jpeg({quality:85}).toBuffer();}
