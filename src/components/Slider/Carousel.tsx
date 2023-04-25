"use client";

import { SwiperProps, SwiperSlide } from "swiper/react";

import { Slider } from "./Slider";

export const Carousel = () => {
  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 2
  };

  return (
    <div className="">
      <Slider settings={settings}>
        <SwiperSlide>
          <h1>Test</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Test</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Test</h1>
        </SwiperSlide>
      </Slider>
    </div>
  );
};
