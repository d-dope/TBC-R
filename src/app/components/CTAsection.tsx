/* eslint-disable react/no-unescaped-entities */
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Video } from "./Video";
import Link from "next/link";
// import Video from "./Video";

export default function CTA() {
  return (
    <div className="relative   overflow-hidden">
      <Video />{" "}
      <div className=" flex items-center justify-center">
        <div className="px-6  sm:px-6  lg:px-8 text-center">
          <div className="absolute top-36  left-1/2 transform -translate-x-1/2 w-full ">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Discover Unforgettable Events Near You! <br />
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
              Welcome to EVENT, your go-to platform for finding and attending
              exciting events. Whether you're into music, arts, sports, or
              networking, we've got something for everyone!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/products"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primaryColor shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Events
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
