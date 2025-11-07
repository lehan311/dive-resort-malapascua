import {useTranslations,useLocale} from 'next-intl'; import Link from 'next/link';
export default function Hero(){ const t=useTranslations('hero'); const locale=useLocale();
  return (<section className="relative overflow-hidden">
    <div className="container py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold font-heading leading-tight">{t('title')}</h1>
          <p className="mt-4 text-lg opacity-80">{t('subtitle')}</p>
          <div className="mt-6 flex gap-3">
            <Link href={`/${locale}#booking`} className="btn-primary">{t('book')}</Link>
            <Link href={`/${locale}/experiences`} className="btn-outline">{t('explore')}</Link>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
          <img src="https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f?q=80&w=1400&auto=format&fit=crop" alt="Resort hero" className="w-full h-80 md:h-full object-cover"/>
        </div>
      </div>
    </div>
  </section>);
}
