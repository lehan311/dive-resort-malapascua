import Section from '@/components/Section'; import Link from 'next/link';
export default function ResortPage(){
  return (<>
    <Section title="Resort Overview" subtitle="Beachfront haven on Malapascua—crafted for divers, couples and families.">
      <div className="grid md:grid-cols-2 gap-6">
        <img className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=1400&auto=format&fit=crop" alt="Resort overview"/>
        <div className="space-y-3">
          <p>17 rooms: <strong>6 Twin Rooms</strong> and <strong>11 Luxury Rooms</strong>. Oceanfront restaurant & bar, spa treatments on request, concierge, boat transfers.</p>
          <ul className="list-disc pl-5 text-sm opacity-80">
            <li>Direct beach access & sunset deck</li>
            <li>Breakfast included · à la carte lunch & dinner</li>
            <li>High-speed Wi‑Fi · Airport/port transfers</li>
          </ul>
          <Link href="/en/room" className="btn-primary">View Rooms</Link>
        </div>
      </div>
    </Section>
    <Section title="Facilities">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {t:'Restaurant & Bar', d:'Sea-to-table cuisine, signature cocktails.'},
          {t:'Dive Center', d:'Gear room, rinse tanks, camera station.'},
          {t:'Concierge', d:'Island tours, transport, special moments.'}
        ].map((x,i)=>(<div key={i} className="card p-5"><div className="font-semibold">{x.t}</div><p className="text-sm opacity-80 mt-2">{x.d}</p></div>))}
      </div>
    </Section>
  </>);
}
