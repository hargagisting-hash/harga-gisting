export default function Ad({slot}:{slot:string}){const id=process.env.NEXT_PUBLIC_ADSENSE_ID;
 return id?<ins className="adsbygoogle" style={{display:"block"}} data-ad-client={id} data-ad-slot={slot} data-ad-format="auto"/>:<div className="ad">Slot iklan {slot}</div>;}
