export const dynamic = 'force-dynamic';
export const revalidate = 0;
import type { Metadata } from 'next';
import {NextIntlClientProvider} from 'next-intl'; import {notFound} from 'next/navigation';
import '../globals.css'; import Header from '@/components/Header'; import Footer from '@/components/Footer'; import {site} from '@/lib/metadata';
export const metadata: Metadata = {
  title: { default: `${site.name} – Five-Star Beachfront Resort`, template: `%s | ${site.name}` },
  description: 'A tropical luxury resort in the Philippines. Book direct for the best rates.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
};
export function generateStaticParams(){ return [{locale:'en'},{locale:'vi'}]; }
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:{locale:string}}){
  let messages; try{ messages=(await import(`@/messages/${params.locale}.json`)).default; } catch{ notFound(); }
  return (<html lang={params.locale}><body><NextIntlClientProvider locale={params.locale} messages={messages}><Header/ ><main>{children}</main><Footer/></NextIntlClientProvider></body></html>);
}
