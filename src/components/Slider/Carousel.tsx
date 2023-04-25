"use client";

import { SwiperSlide as Slide, SwiperProps } from "swiper/react";

import { CardProject } from "../CardProject";
import { Slider } from "./Slider";

export const Carousel = () => {
  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 2,
    pagination: {
      clickable: true
    }
  };

  return (
    <div>
      <Slider settings={settings}>
        <Slide>
          <CardProject />
        </Slide>
        <Slide>
          <CardProject />
        </Slide>
        <Slide>
          <CardProject />
        </Slide>
      </Slider>
    </div>
  );
};
