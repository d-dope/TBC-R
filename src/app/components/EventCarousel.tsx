"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { MapPinIcon } from "@heroicons/react/20/solid";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";

export default function EventCarousel({ products }: any) {
  const recentProds = products.slice(0, 8);
  return (
    <Swiper
      className="max-w-[1470px] p-20 container mx-auto px-4 sm:px-6 lg:px-8"
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      {recentProds.map((product: any, index: Number) => (
        <SwiperSlide key={`recent-prods-slide-${index}`}>
          <Link href={`/products/${product.id}`} className="block group">
            <div className="relative overflow-hidden rounded-lg shadow-md transition-shadow duration-300">
              <Image
                className="object-contain h-44 w-full transition-transform duration-300 group-hover:scale-105"
                src={product.picture_url}
                alt="prodImg"
                height={300}
                width={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-75"></div>
              <div className="absolute bottom-0 right-0 p-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                  {product.price} ₾
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-md font-semibold mb-2">{product.title}</h2>
              <div className="flex gap-x-2">
                {" "}
                <MapPinIcon className="w-4 h-4 fill-gray-500" />
                <p className="text-gray-500 text-sm mb-10">{product.place}</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}