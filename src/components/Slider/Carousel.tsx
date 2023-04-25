"use client";

import { SwiperSlide as Slide, SwiperProps } from "swiper/react";

import { CardProject } from "../CardProject";
import { Slider } from "./Slider";

export const Carousel = () => {
  const settings: SwiperProps = {
    spaceBetween: 50,
    // slidesPerView: cardProject.length > 3 ? 3 : cardProject.length,
    pagination: {
      clickable: true
    },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      920: {
        slidesPerView: 3
      }
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
        <Slide>
          <CardProject />
        </Slide>
      </Slider>
    </div>
  );
};
