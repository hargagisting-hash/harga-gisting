import {NextResponse} from "next/server";import {db} from "@/lib/db";
export const dynamic="force-dynamic";
export async function GET(r:Request){const c=new URL(r.url).searchParams.get("commodity");
 let q=db.from("prices").select("*").order("created_at",{ascending:false}).limit(c?20:200);if(c)q=q.eq("commodity",c);
 const {data,error}=await q;return error?NextResponse.json({error:error.message},{status:500}):NextResponse.json(data);}
