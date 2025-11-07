'use client';
import {useState} from 'react'; import {useTranslations, useLocale} from 'next-intl';
export default function BookingWidget(){
  const t=useTranslations('booking'); const locale=useLocale();
  const [checkin,setCheckin]=useState(''); const [checkout,setCheckout]=useState(''); const [guests,setGuests]=useState(2); const [promo,setPromo]=useState('');
  function onSubmit(e:React.FormEvent){ e.preventDefault(); const params=new URLSearchParams({checkin,checkout,guests:String(guests),promo,locale}); alert('Booking engine placeholder. Params: '+params.toString()); }
  return (<form onSubmit={onSubmit} id="booking" className="card p-4 md:p-6 grid md:grid-cols-5 gap-3 md:gap-4">
    <label className="text-sm space-y-1"><span>{t('checkin')}</span><input required type="date" value={checkin} onChange={e=>setCheckin(e.target.value)} className="w-full border rounded-md px-3 py-2"/></label>
    <label className="text-sm space-y-1"><span>{t('checkout')}</span><input required type="date" value={checkout} onChange={e=>setCheckout(e.target.value)} className="w-full border rounded-md px-3 py-2"/></label>
    <label className="text-sm space-y-1"><span>{t('guests')}</span><input min={1} max={6} type="number" value={guests} onChange={e=>setGuests(parseInt(e.target.value||'1'))} className="w-full border rounded-md px-3 py-2"/></label>
    <label className="text-sm space-y-1"><span>{t('promo')}</span><input type="text" value={promo} onChange={e=>setPromo(e.target.value)} className="w-full border rounded-md px-3 py-2"/></label>
    <button className="btn-primary mt-6 md:mt-5">{t('search')}</button>
  </form>);
}
