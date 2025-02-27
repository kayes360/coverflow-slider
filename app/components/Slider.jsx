"use client";
import React from "react";
import SliderCard from "./SliderCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow } from "swiper/modules";
export default function Slider() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 600,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        // className="  max-w-screen-lg"
      >
        <SwiperSlide>
          <SliderCard background="bg-yellow-400" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard background="bg-blue-400" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard background="bg-red-400" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
