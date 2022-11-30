import '../../assets/css/video.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import VideoPlayer from '../Video/VideoPlayer';
import sample from '../../assets/images/10.mp4'


const VideoSlider = () => {
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
            delay: 20000,
            disableOnInteraction: false
        }}
    loop={true}
    className="mySwiper"
    >
    <SwiperSlide className='custom-swiper-slide'>
        <VideoPlayer className='video-player' videoSource={sample}/>
    </SwiperSlide>

    <SwiperSlide className='custom-swiper-slide'>          
        <VideoPlayer className='video-player'/>
    </SwiperSlide>

    </Swiper>
  )
}

export default VideoSlider