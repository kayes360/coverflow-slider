"use client";
import React from "react";
import SliderCard from "./SliderCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css"; 
import 'swiper/css/effect-coverflow';

import { EffectCoverflow } from 'swiper/modules';
export default function Slider() {
  return (
    <Swiper 
     loop={true}
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
      slideShadows: true,
    }}
    slideShadows={false}
    stretch={1} 
    modifier={1}
    modules={[EffectCoverflow]}
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
  );
}
