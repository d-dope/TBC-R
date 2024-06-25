"use client";
import { useState } from "react";
import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import PartnerCompanies from "../components/PartnerCompanies";
import Carousel from "../components/Carousel";
import EventCarousel from "../components/EventCarousel";
import CTA from "../components/CTAsection";
import BlogCarousel from "./BlogCarousel";
import LandingSideBar from "./LandingSideBar";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HomeLayout({ products, blogs }: any) {
  const t = useTranslations("HomeLayout");
  const values = [
    {
      name: t("FlexibleFind"),
      description: t("desc1"),
      icon: RocketLaunchIcon,
    },
    {
      name: t("title2"),
      description: t("desc2"),
      icon: HandRaisedIcon,
    },
    {
      name: t("title3"),
      description: t("desc3"),
      icon: UserGroupIcon,
    },
    {
      name: t("title4"),
      description: t("desc4"),
      icon: AcademicCapIcon,
    },
    {
      name: t("title5"),
      description: t("desc5"),
      icon: SparklesIcon,
    },
    {
      name: t("title6"),
      description: t("desc6"),
      icon: SunIcon,
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-MainBgColor dark:bg-black">
      <Header />
      <CTA />
      <main className="">
        {/* Background */}
        <div
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>

        {/* Header section */}
        <div
          id="dashboard"
          className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row  mt-16 container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <LandingSideBar />
          <Carousel />
        </div>

        <div
          id="latest-events"
          className=" container mx-auto px-4 mt-16 sm:px-6 lg:px-8 "
        >
          <div className="flex justify-between mb-3">
            <h1 className="font-bold  text-lg"> {t("LatestEvents")}</h1>
            <Link href="/products">
              {" "}
              <h1 className="font-semibold  text-lg mr-2 cursor-pointer hover:text-primaryColor">
                {t("ViewAll")}
              </h1>
            </Link>{" "}
          </div>
          <EventCarousel products={products} />
        </div>

        {/* Blog section */}
        <div
          id="latest-blogs"
          className=" container mx-auto px-4  mt-24 sm:px-6 lg:px-8 "
        >
          <div className="flex justify-between mb-3">
            <h1 className="font-bold text-lg"> {t("LatestBlogs")}</h1>
            <Link href="/blogs">
              {" "}
              <h1 className="font-semibold text-lg mr-2 cursor-pointer  hover:text-primaryColor">
                {t("ViewAll")}
              </h1>
            </Link>{" "}
          </div>{" "}
          <BlogCarousel blogs={blogs} />
        </div>

        {/* Values section */}
        <div className="bg-white dark:bg-primaryGray py-10 mt-16">
          <div
            id="our-values"
            className="mt-6 sm:mt-6 container mx-auto px-4 sm:px-6 lg:px-8 "
          >
            <div className="border-b border-gray-200 pb-5">
              <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                {t("OurValues")}
              </h3>
            </div>
            <dl className="mx-auto grid mt-5 grid-cols-1 gap-8 text-base leading-7 text-gray-600 dark:text-gray-400 sm:grid-cols-2  lg:gap-x-16">
              {values.map((value) => (
                <div
                  key={`value-generate-${value.name}`}
                  className="relative pl-9"
                >
                  <dt className="inline font-semibold text-black dark:text-white">
                    <value.icon
                      className="absolute left-1 top-1 h-5 w-5 text-primaryColor"
                      aria-hidden="true"
                    />
                    {value.name}
                  </dt>{" "}
                  <dd className="inline">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div id="partner-companies">
          <PartnerCompanies />
        </div>
      </main>

      <Footer />
    </div>
  );
}
