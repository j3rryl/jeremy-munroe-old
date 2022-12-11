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
        <SwiperSlide><p className='!text-white'>Work</p></SwiperSlide>
        <SwiperSlide><p className='!text-white'>Education</p></SwiperSlide>
        <SwiperSlide><p className='!text-white'>Hobbies</p></SwiperSlide>
        <SwiperSlide><p className='!text-white'>Skills</p></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
  )
}

export default GrabSlider