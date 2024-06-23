"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Blog from "./Blog";
import Link from "next/link";

export default function BlogCarousel({ blogs }: any) {
  return (
    <Swiper
      className="max-w-[1470px] p-20 container mx-auto px-4 mt-16  sm:px-6 lg:px-8 overflow-hidden"
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
      {blogs.map((blog: any, index: Number) => (
        <SwiperSlide key={`recent-prods-slide-${index}`}>
          <Link href={`/products/${blog.id}`}>
            <Image
              className="object-cover h-52 w-full mt-5"
              src={blog.picture_url}
              alt="prodImg"
              height={300}
              width={300}
            />
            <h1>{blog.title}</h1>
            <h1 className="mb-10">{blog.description}</h1>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
