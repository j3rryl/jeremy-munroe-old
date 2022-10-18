import '../../scss/home.scss'
// import '../../scss/swiper.scss'

import { useState, useRef, Suspense, useEffect, lazy } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import Header from '../Header'
import {motion} from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards, Autoplay } from "swiper";
import Pages from './Pages'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
    const [isColor, setColor]=useState('#000');
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
      setColor('#000')
      setIsMounted(true);
    }, []);
    const ThreeCanvas = lazy(() => import('./Stars'));
  return (
    <motion.div 
    className='motion'
    // initial={{scaleY:0}} 
    // animate={{scaleY:1}}
    // exit={{scaleY:0}}
    transition={{duration : 1}}
    initial={{opacity:0}} 
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <div className='home-page'>

      {/* Cover Page */}
      <div className='canvas'>
      { !isMounted ? null : (
        <Suspense fallback={null}>
          <Canvas>
            <Stars />
          </Canvas>
        </Suspense>
      )}
      </div>

      <div className='container container-1'>
      <Header />
      <div className='details'>
      
      <div className='block profile-image'>
        <Pages />
      </div>
      <div className='block synopsis'>
        <h3 className='title'>Website and User Interface Design</h3>
        <hr />
        <p>
        I am a Codaholic very much in love with anything which has 1s and 0s.
        This has culminated an adventure I took to learn every possible language I can.
        </p>
      </div>

      </div>
      </div>

      {/* About Me */}
      <div className='container container-2'>
      <div className='details'>
      <div className='block synopsis'>
        <h3 className='title'>About Me</h3>
        <hr />
        <p className='about-text'>
        Education, hobbies and all past work experiences here.
        </p>
        <button className='read-about' onClick={()=>{
          navigate('/about')
        }}>
          Read More
        </button>
      </div>
      <div className='block profile-image'>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[EffectCards, Autoplay]}
        // loop={true}
        className="mySwiper"
      >
        <SwiperSlide>Work</SwiperSlide>
        <SwiperSlide>Education</SwiperSlide>
        <SwiperSlide>Hobbies</SwiperSlide>
        <SwiperSlide>Skills</SwiperSlide>
        <SwiperSlide></SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>

      </div>
      
      </div>
      </div>

      {/* Projects */}
      <div className='container container-3'>
      <div className='details'>
      
      <div className='block profile-image'>

      </div>
      <div className='block synopsis'>
        <h3 className='title'>Projects</h3>
        <hr />
        <p>
          Rather then flex with experience, let me show you my work.
        </p>
        <button className='view-all'>
          View All
        </button>
      </div>
      </div>
      </div>
    </div>
    </motion.div>
  )
}
function Stars(props) {
  const [isColor, setColor]=useState('#fff');
  useEffect(() => {
    setColor('#fff')
    setColor('#286B64')
  }, []);
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(15000), { radius: 9.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20
    ref.current.rotation.y -= delta / 20
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color={isColor} size={0.020} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
export default Home