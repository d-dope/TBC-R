"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import GeoSvg from "../../../public/assets/geo.svg";
import EngSvg from "../../../public/assets/eng.svg";
import Image from "next/image";

export default function LocaleSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentLocale, setCurrentLocale] = useState(locale);
  const geoSvg = <Image src={GeoSvg} alt="as" width={30} height={30} />;
  const engSvg = <Image src={EngSvg} alt="as" width={30} height={30} />;

  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  const toggleLocale = () => {
    const nextLocale = currentLocale === "en" ? "ka" : "en";
    setCurrentLocale(nextLocale);

    // Preserve current pathname and search params while changing locale
    const newPathname = `/${nextLocale}${pathname}`;
    const newSearchParams = searchParams.toString();
    const newUrl = newSearchParams ? `${newPathname}?${newSearchParams}` : newPathname;

    router.replace(newUrl);
  };

  return (
    <button
      onClick={toggleLocale}
      className="px-2 py-1 text-gray-900 text-sm font-medium"
    >
      {currentLocale === "en" ? geoSvg : engSvg}
    </button>
  );
}
