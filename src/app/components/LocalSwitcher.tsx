"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LocaleSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  const toggleLocale = () => {
    const nextLocale = currentLocale === "en" ? "ka" : "en";
    setCurrentLocale(nextLocale);
    router.replace(`/${nextLocale}`);
  };

  return (
    <button
      onClick={toggleLocale}
      className="px-2 py-1 rounded-full bg-gray-100 text-gray-900 text-sm font-medium"
    >
      {currentLocale === "en" ? "Geo" : "Eng"}
    </button>
  );
}
