import Section from '@/components/Section'; import JsonLd from '@/lib/schema';
export default function DivePage(){
  const jsonLd={ '@context':'https://schema.org', '@type':'SportsActivityLocation', name:'Dive Center – Dive Resort Malapascua', address:'Logon Beachfront, Malapascua Island, Daanbantayan, Cebu, Philippines', sport:'Scuba Diving', telephone:'+63 917 000 1111' };
  return (<>
    <JsonLd data={jsonLd}/>
    <Section title="Dive Center" subtitle="Home of the thresher shark—Monad Shoal & more.">
      <div className="grid md:grid-cols-2 gap-6">
        <img className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1516900557549-41557d405adf?q=80&w=1400&auto=format&fit=crop" alt="Diving"/>
        <div className="space-y-2 text-sm">
          <p>Daily dawn dives to Monad Shoal for thresher sharks (advanced recommended), plus Gato Island, Lighthouse night dive, Kalanggaman day trip.</p>
          <ul className="list-disc pl-5">
            <li>Rinse tanks & gear room · Camera station</li>
            <li>Small groups · Experienced DM/Instructor</li>
            <li>Nitrox (if available) · First aid & O2 on boat</li>
          </ul>
        </div>
      </div>
    </Section>
    <Section title="Daily Boat Schedule">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="text-left border-b"><th className="py-2 pr-4">Time</th><th className="py-2 pr-4">Site</th><th className="py-2">Notes</th></tr></thead>
          <tbody>
            {[['04:30','Monad Shoal (Thresher)','Advanced/Deep · Limited spots'],['09:30','Gato Island','Tunnels & macro'],['14:00','House Reef','Training/Check dive'],['18:00','Lighthouse','Night dive · Mandarin / critters']].map((r,i)=>(
              <tr key={i} className="border-b"><td className="py-2 pr-4">{r[0]}</td><td className="py-2 pr-4">{r[1]}</td><td className="py-2">{r[2]}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
    <Section title="Courses (PADI/SSI)">
      <div className="grid md:grid-cols-3 gap-6">
        {[{t:'Open Water',d:'3–4 days · Pool + 4 dives'},{t:'Advanced Adventurer',d:'2–3 days · 5 adventure dives'},{t:'Nitrox',d:'1 day · Theory + practical'}].map((x,i)=>(
          <div key={i} className="card p-5"><div className="font-semibold">{x.t}</div><p className="text-sm opacity-80 mt-2">{x.d}</p><button className="btn-outline mt-3">Enquire</button></div>
        ))}
      </div>
    </Section>
    <Section title="Gear Rental & Services">
      <ul className="grid md:grid-cols-2 gap-3 text-sm">
        {['Full set','Regulator','BCD','Wetsuit','Computer','Torch','Camera rinse & table'].map((x,i)=>(<li key={i} className="card p-3">{x}</li>))}
      </ul>
    </Section>
    <Section title="Safety & Requirements">
      <div className="text-sm space-y-2">
        <p>Bring certification card/logbook. Monad Shoal thresher dive is deep; we recommend Advanced certification and recent dives. Medical questionnaire and liability release required.</p>
        <p>We monitor conditions and may adjust schedules. Your safety is our priority.</p>
      </div>
    </Section>
  </>);
}
