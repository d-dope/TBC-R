'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
<label className='border-2 rounded' style={{ display: 'inline-block', position: 'relative' }}>
  <p className='sr-only'>change language</p>
  <select
    defaultValue={localActive}
    className='bg-indigo-500 py-2 appearance-none border-none pl-4 pr-8 rounded'
    onChange={onSelectChange}
    disabled={isPending}
    style={{ paddingRight: '1.5rem', cursor: isPending ? 'not-allowed' : 'pointer' }}
  >
    <option value='en'>English</option>
    <option value='ka'>ქართული</option>
  </select>
  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M10 12a1 1 0 01-.7-.29l-4-4a1 1 0 111.41-1.42L10 10.59l3.29-3.3a1 1 0 111.42 1.42l-4 4A1 1 0 0110 12z" />
    </svg>
  </span>
</label>

  );
}
