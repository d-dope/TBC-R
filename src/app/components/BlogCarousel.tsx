"use client";

import { Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";

export default function BlogCarousel({ blogs }: any) {
  const recentBlogs = blogs.slice(0, 8);

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
      {recentBlogs.map((blog: any, index: Number) => (
        <SwiperSlide key={`recent-blogs-slide-${index}`}>
          <Link href={`/blogs/${blog.id}`} className="block group">
            <div className="relative overflow-hidden rounded-lg shadow-md transition-shadow duration-300">
              <Image
                className="object-cover  h-44 w-full transition-transform duration-300 group-hover:scale-105"
                src={blog.picture_url}
                alt="blogImg"
                height={300}
                width={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-75"></div>
            </div>
            <div className="mt-4 ">
              <h2 className="text-lg font-semibold mb-12 ">{blog.title}</h2>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
