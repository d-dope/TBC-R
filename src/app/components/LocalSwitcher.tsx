"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <label
      className=""
      style={{ display: "inline-block", position: "relative" }}
    >
      <p className="sr-only">change language</p>
      <select
        defaultValue={localActive}
        className="ml-auto rounded-md bg-primaryColor px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-80 "
        onChange={onSelectChange}
        disabled={isPending}
        style={{
          paddingRight: "1.5rem",
          cursor: isPending ? "not-allowed" : "pointer",
        }}
      >
        <option value="en">English</option>
        <option value="ka">ქართული</option>
      </select>
      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"></span>
    </label>
  );
}
