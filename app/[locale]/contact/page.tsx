'use client';
import Section from '@/components/Section'; import {useState} from 'react'; import {useTranslations} from 'next-intl';
export default function ContactPage(){ const t=useTranslations('contact'); const [submitted,setSubmitted]=useState(false);
  async function onSubmit(e:React.FormEvent<HTMLFormElement>){ e.preventDefault(); const form=e.currentTarget; const fd=new FormData(form);
    await fetch('/api/contact',{method:'POST',body:fd}); setSubmitted(true); form.reset(); }
  return (<Section title={t('title')} subtitle={t('subtitle')}>
    {submitted && <div className="p-3 border rounded-md bg-green-50 text-sm">{t('success')}</div>}
    <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4 card p-4">
      <label className="text-sm space-y-1"><span>{t('name')}</span><input required name="name" className="w-full border rounded-md px-3 py-2"/></label>
      <label className="text-sm space-y-1"><span>{t('email')}</span><input required type="email" name="email" className="w-full border rounded-md px-3 py-2"/></label>
      <label className="text-sm space-y-1 md:col-span-2"><span>{t('message')}</span><textarea required name="message" rows={5} className="w-full border rounded-md px-3 py-2"/></label>
      <div className="md:col-span-2"><button className="btn-primary">{t('send')}</button></div>
    </form></Section>);
}
