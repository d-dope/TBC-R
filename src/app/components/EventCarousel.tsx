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

export default function EventCarousel() {
  const products = [
    {
      title: "AVUIE",
      price: "29",
    },
    {
      title: "MIAU",
      price: "777",
    },
  ];
  return (
    <Swiper
      className="max-w-[1200px]"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {products.map((product, index) => (
        <SwiperSlide key={`recent-prods-slide-${index}`}>
          <h1>{product.title}</h1>
          <h1>{product.price}</h1>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
