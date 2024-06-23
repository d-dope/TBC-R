"use client";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import image1 from "../../../public/assets/car1.jpeg";
import image2 from "../../../public/assets/car2.peg.jpeg";
import image3 from "../../../public/assets/car3.jpeg";
import image4 from "../../../public/assets/car4.jpeg";

export default function Carousel() {
  return (
    <Swiper
      className="max-w-full rounded-3xl"
      modules={[Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] ">
          <Image
            className=" object-cover rounded-3xl"
            src={image1}
            alt="image"
            layout="fill"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] ">
          <Image
            className="object-cover rounded-3xl"
            src={image2}
            alt="image"
            layout="fill"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px]">
          <Image
            className="object-cover rounded-3xl"
            src={image3}
            alt="image"
            layout="fill"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px]">
          <Image
            className="object-cover rounded-3xl"
            src={image4}
            alt="image"
            layout="fill"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px]">
          <Image
            className="object-cover rounded-3xl"
            src={image4}
            alt="image"
            layout="fill"
          />
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
}
