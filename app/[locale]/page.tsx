import Hero from '@/components/Hero'; import BookingWidget from '@/components/BookingWidget';
import Section from '@/components/Section'; import JsonLd from '@/lib/schema'; import {site} from '@/lib/metadata'; import Link from 'next/link';
export default function HomePage(){
  const jsonLd={ '@context':'https://schema.org', '@type':'Hotel', name:site.name, url:site.url, address:site.address, telephone:site.phone, logo:site.logo, geo:{'@type':'GeoCoordinates',latitude:site.geo.lat,longitude:site.geo.lng} };
  return (<>
    <JsonLd data={jsonLd}/>
    <Hero/>
    <div className="container -mt-8 md:-mt-10 relative z-10"><BookingWidget/></div>
    <Section title="Highlights" subtitle="A glimpse of what awaits you">
      <div className="grid md:grid-cols-3 gap-6">
        {['Beachfront','Dive with Threshers','Private Experiences'].map((title,i)=>(
          <div key={i} className="card overflow-hidden">
            <img className="w-full h-48 object-cover" src={`https://picsum.photos/seed/${i+1}/800/500`} alt={title}/>
            <div className="p-4"><div className="font-semibold">{title}</div><p className="text-sm opacity-80 mt-2">Curated for serenity and indulgence.</p></div>
          </div>
        ))}
      </div>
    </Section>
    <Section title="Explore Rooms"><div className="grid md:grid-cols-3 gap-6">
      {[1,2,3].map(i=>(<div key={i} className="card overflow-hidden">
        <img className="w-full h-48 object-cover" src={`https://picsum.photos/seed/room${i}/800/500`} alt="Room"/>
        <div className="p-4 flex items-center justify-between">
          <div><div className="font-semibold">Ocean View {i}</div><div className="text-sm opacity-70">45 m² · King · Balcony</div></div>
          <Link href="#" className="btn-outline">View</Link>
        </div>
      </div>))}
    </div></Section>
  </>);
}
