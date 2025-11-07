type Props={ title:string; subtitle?:string; children:React.ReactNode };
export default function Section({title,subtitle,children}:Props){
  return (<section className="container py-12 md:py-16">
    <div className="mb-6"><h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>{subtitle && <p className="text-black/70 mt-2">{subtitle}</p>}</div>
    {children}
  </section>);
}
