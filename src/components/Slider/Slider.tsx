import { ReactNode } from "react";

import "swiper/css";
import { Swiper, SwiperProps } from "swiper/react";

type Props = {
  children: ReactNode;
  settings: SwiperProps;
};

export const Slider = ({ children, settings }: Props) => {
  return <Swiper {...settings}>{children}</Swiper>;
};
