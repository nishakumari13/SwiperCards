import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Keyboard,
  Mousewheel,
  Controller,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "./swiperCard.css";

SwiperCore.use([Navigation, Pagination, Keyboard, Mousewheel, Controller]);

const SwiperCards = () => {
  return (
    <Swiper
      className="swiper-wrapper"
      spaceBetween={5}
      slidesPerView={3}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="swiper-slide">Slide 1</SwiperSlide>
      <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
      <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
      <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default SwiperCards;
