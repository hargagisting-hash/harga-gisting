import {createClient} from "@supabase/supabase-js";
export const db=createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
export const admin=()=>createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.SUPABASE_SERVICE_ROLE_KEY!);
export type Row={id:number;commodity:string;market:"atas"|"bawah";price:number;photo_url:string|null;created_at:string};
export async function history(c:string):Promise<Row[]>{
 const {data}=await db.from("prices").select("*").eq("commodity",c).order("created_at",{ascending:false}).limit(60);return (data??[]) as Row[];}
export const rp=(n:number)=>"Rp"+n.toLocaleString("id-ID");
export function summarize(rows:Row[],m:"atas"|"bawah"){
 const r=rows.filter(x=>x.market===m);const last=r[0],prev=r[1];
 return {last,trend:!last||!prev?"TETAP":last.price>prev.price?"NAIK":last.price<prev.price?"TURUN":"TETAP",series:r.slice(0,7).reverse().map(x=>x.price)};}
