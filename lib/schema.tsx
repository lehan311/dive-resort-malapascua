'use client';
import {useEffect} from 'react';
export default function JsonLd({data}:{data:Record<string,any>}){
  useEffect(()=>{ const s=document.createElement('script'); s.type='application/ld+json'; s.text=JSON.stringify(data); document.head.appendChild(s); return ()=>{document.head.removeChild(s)}; },[data]);
  return null;
}
