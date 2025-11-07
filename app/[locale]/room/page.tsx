import Section from '@/components/Section';
export default function RoomPage(){
  return (<>
    <Section title="Room Categories" subtitle="17 rooms · 6 Twin · 11 Luxury">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card overflow-hidden">
          <img className="w-full h-48 object-cover" src="https://picsum.photos/seed/twin/800/500" alt="Twin Room"/>
          <div className="p-4 space-y-1">
            <div className="font-semibold">Twin Room (6)</div>
            <div className="text-sm opacity-70">28–32 m² · 2 Twin · Garden/Partial Sea</div>
            <button className="btn-primary mt-2">Book Twin</button>
          </div>
        </div>
        <div className="card overflow-hidden">
          <img className="w-full h-48 object-cover" src="https://picsum.photos/seed/luxury/800/500" alt="Luxury Room"/>
          <div className="p-4 space-y-1">
            <div className="font-semibold">Luxury Room (11)</div>
            <div className="text-sm opacity-70">35–45 m² · King · Balcony · Ocean View</div>
            <button className="btn-primary mt-2">Book Luxury</button>
          </div>
        </div>
      </div>
    </Section>
  </>);
}
