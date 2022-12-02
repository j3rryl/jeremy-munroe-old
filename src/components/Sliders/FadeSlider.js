import '../../assets/css/fadeslider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";

const FadeSlider = ({urls}) => {
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
            <SwiperSlide key={urlNumber}>
            <img className='h-full rounded-2xl' src={urlNumber} />
          </SwiperSlide>
        )}
      </Swiper>
  )
}

export default FadeSlider