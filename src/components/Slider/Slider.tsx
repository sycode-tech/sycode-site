"use client";

import { ReactNode } from "react";

import { A11y, Pagination } from "swiper";
import { Swiper, SwiperProps } from "swiper/react";

import "swiper/css/bundle";
import "swiper/swiper.css";
import "./slide.css";

type Props = {
  children: ReactNode;
  settings: SwiperProps;
};

export const Slider = ({ children, settings }: Props) => {
  return (
    <Swiper modules={[Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
};
