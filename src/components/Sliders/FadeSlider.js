import '../../assets/scss/about.scss'
import { Swiper, SwiperSlide } from "swiper/react";
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
        className="mySwiper"
      >
        {urls.map((urlNumber)=>
            <SwiperSlide key={urlNumber}>
            <img src={urlNumber} />
          </SwiperSlide>
        )}
      </Swiper>
  )
}

export default FadeSlider