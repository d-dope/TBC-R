import { useTranslations } from 'next-intl';
import React from 'react';

export default function ContactPage() {
  const t = useTranslations('Contact')
  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t('Contact Us')}</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t('Our Contact Information:')}</h2>
        <p className="mb-1">{t("Address: Georgia, Tbilisi")}</p>
        <p className="mb-1">{t('Email:')}</p>
        <p className="mb-1">{t('Phone:')}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">{t('Contact Form:')}</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="name">{t('Name:')}</label>
            <input className="border rounded w-full py-2 px-3" type="text" id="name" name="name" />
          </div>

          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">{t('Email:')}</label>
            <input className="border rounded w-full py-2 px-3" type="email" id="email" name="email" />
          </div>

          <div className="mb-4">
            <label className="block mb-1" htmlFor="message">{t('Message:')}</label>
            <textarea className="border rounded w-full py-2 px-3" id="message" name="message" rows="4" cols="50"></textarea>
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">{t('Submit')}</button>
        </form>
      </div>
    </div>
    </>
  );
}

