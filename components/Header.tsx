'use client';
import Link from 'next/link'; import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl'; import clsx from 'clsx';
export default function Header(){
  const t=useTranslations(); const locale=useLocale(); const pathname=usePathname();
  const isActive=(href:string)=>pathname===href;
  return (<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/5">
    <div className="container flex items-center justify-between h-16">
      <Link href={`/${locale}`} className="font-semibold tracking-wide">{t('brand')}</Link>
      <nav className="hidden md:flex gap-6 text-sm">{
        [
            { href: `/${locale}/resort`, label: 'Resort' },
            { href: `/${locale}/room`, label: t('nav.rooms') },
            { href: `/${locale}/dive`, label: 'Dive' },
            { href: `/${locale}/contact`, label: t('nav.contact') }
          ].map(item=>(<Link key={item.href} href={item.href} className={clsx('hover:text-ocean', {'active':isActive(item.href)})}>{item.label}</Link>))
      }</nav>
      <div className="flex items-center gap-3">
        <Link href={pathname?.replace('/en','/vi') || '/vi'} className="text-sm hover:text-ocean">VI</Link>
        <span className="text-black/20">|</span>
        <Link href={pathname?.replace('/vi','/en') || '/en'} className="text-sm hover:text-ocean">EN</Link>
        <Link href={`${locale}/#booking`} className="btn-primary ml-4 hidden sm:inline-flex">{t('hero.book')}</Link>
      </div>
    </div>
  </header>);
}
