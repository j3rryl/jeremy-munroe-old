import '../../assets/css/webslider.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";

const WebSlider = ({urls}) => {
  return (
    <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false
            }}
        className="mySwiper h-full"
      >
        {urls.map((urlNumber)=>
            <SwiperSlide className='custom-swiper-slide !w-full !h-full' key={urlNumber}>
            {/* <iframe className="w-full h-full" src="https://j3rryl.github.io/soulboosters/"> </iframe> */}
            {/* <img className=' h-3/4 w-5/6' src={urlNumber} alt='Sliders for different images.'/> */}
          </SwiperSlide>
        )}
      </Swiper>
  )
}

export default WebSlider