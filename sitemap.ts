import type {MetadataRoute} from "next";import {PAGES,SITE} from "@/lib/pages";
export default function s():MetadataRoute.Sitemap{return [{url:SITE,changeFrequency:"hourly",priority:1},...PAGES.map(p=>({url:`${SITE}/${p.slug}`,changeFrequency:(p.group==="harga"?"hourly":"weekly") as "hourly"|"weekly",priority:p.group==="harga"?0.9:0.6}))];}
