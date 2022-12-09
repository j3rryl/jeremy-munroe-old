import '../../assets/css/fadeslider.css'
import laptop from '../../assets/images/frames/laptop-frame.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";

const WebSlider = ({urls}) => {
  return (
    <div className=' w-full h-full relative border-2 border-red-700 text-center flex items-center justify-center'>
    <img src={laptop} className='absolute border-2 border-portfolio-gray'/>
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
        className="mySwiper h-2/3 -top-3 w-3/4 text-center border-black border-2 rounded-2xl"
      >
        {urls.map((urlNumber)=>
            <SwiperSlide className='!w-full !h-full !bg-none' key={urlNumber}>
            {/* <iframe className="w-full h-full" src="https://j3rryl.github.io/soulboosters/"> </iframe> */}
            {/* <img className='h-full rounded-2xl' src={urlNumber} alt='Sliders for different images.'/> */}
          </SwiperSlide>
        )}
      </Swiper>
      </div>
  )
}

export default WebSlider