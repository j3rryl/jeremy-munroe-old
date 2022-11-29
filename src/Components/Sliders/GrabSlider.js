import React from 'react'
import '../../assets/css/grabslider.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards, Autoplay } from "swiper";

const GrabSlider = ({sliderStyle}) => {
  return (
    <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[EffectCards, Autoplay]}
        // loop={true}
        className={sliderStyle}
      >
        <SwiperSlide>Work</SwiperSlide>
        <SwiperSlide>Education</SwiperSlide>
        <SwiperSlide>Hobbies</SwiperSlide>
        <SwiperSlide>Skills</SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
  )
}

export default GrabSlider