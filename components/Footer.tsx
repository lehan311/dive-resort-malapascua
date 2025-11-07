import {useTranslations} from 'next-intl'; import Link from 'next/link';
export default function Footer(){ const t=useTranslations(); const year=new Date().getFullYear();
  return (<footer className="border-t border-black/5 mt-16">
    <div className="container py-12 grid md:grid-cols-3 gap-8">
      <div><div className="font-semibold mb-2">{t('brand')}</div><p className="text-sm opacity-80">{t('footer.address')}</p></div>
      <div className="text-sm space-y-2"><Link href="#" className="block hover:text-ocean">Privacy</Link><Link href="#" className="block hover:text-ocean">Terms</Link><Link href="#" className="block hover:text-ocean">Cookie</Link></div>
      <div className="text-sm opacity-70">&copy; {year} {t('footer.rights')}</div>
    </div>
  </footer>);
}
