"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";

export default function EventCarousel({ products }: any) {
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
      {products.map((product: any, index: Number) => (
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
              <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-blue-500 text-white font-semibold py-1 px-3 rounded">
                  From {product.price} ₾
                </button>
              </div>
            </div>
            <div className="mt-2">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600 ">{product.place}</p>
              <p className="text-gray-600 mb-10">{product.date}</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
