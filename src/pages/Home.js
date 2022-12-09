import '../assets/scss/home.scss'
import '../assets/css/button.css'
import { lazy } from 'react'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import CanvasScene from '../components/CanvasScene'
import GrabSlider from '../components/Sliders/GrabSlider'
import laptop from '../assets/images/frames/laptop-frame.png'

import Contact from '../components/Contact'
import FadeSlider from '../components/Sliders/FadeSlider'
import WebSlider from '../components/Sliders/WebSlider'

const Home = () => {
  const navigate=useNavigate()
    const StarScene = lazy(() => import('../components/Stars'));
    const GalleryScene = lazy(() => import('../components/Gallery/GalleryScene'));

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
    <div className='home-page md:overflow-x-hidden w-full h-full bg-none'>

      {/* Cover Page */}
      <div className='canvas w-full h-full fixed'>
      <CanvasScene children={<StarScene/>}/>
      </div>

      <div className='mx-5 h-full md:overflow-hidden md:m-10 relative inline-block md:flex items-center justify-around'>
        <div className='h-3/4 md:h-2/3 md:w-1/2 m-auto'>
          <CanvasScene children={<GalleryScene/>} gl={{ antialias: false }} dpr={[1, 1.5]} />
        </div>
        <div className='px-5 md:h-2/5 md:w-2/5 m-auto border-none'>
          <h3 className=' text-2xl text-center'>Website and User Interface Design</h3>
          <hr className='bg-portfolio-gray my-6 h-0.5'/>
          <p className=' text-black text-justify tracking-widest'>
          I am a Codaholic very much in love with anything which has 1s and 0s.
          This has culminated an adventure I took to learn every possible language I can.
          </p>
        </div>
      </div>

      {/* About Me */}
      <div className='my-10 w-full h-full md:m-10 relative inline-block md:flex items-center justify-around'>
        <div className='md:hidden md:mb-0 mb-10 overflow-hidden h-3/4 w-full md:h-2/3 md:w-1/2 m-auto relative'>
          <GrabSlider sliderStyle='w-3/5 top-0 bottom-0 left-0 right-0 h-full absolute'/>
        </div>

      <div className='px-5 h-3/4 text-center md:h-2/3 md:w-1/2 m-auto'>
        <h3 className='text-2xl text-center'>About Me</h3>
        <hr className='bg-portfolio-gray my-6 h-0.5' />
        <p className='text-black text-center tracking-widest'>
        Education, hobbies and all past work experiences here.
        </p>
        <button className='explore px-10 py-5 text-base my-8 mx-auto text-center h-fit w-fit' onClick={()=>{
          navigate('/jeremy-munroe/about')
        }}>
          Read More
        </button>
      </div>
      <div className='hidden overflow-hidden md:flex h-3/4 mx-1 md:h-2/3 md:w-1/2 m-auto'>
      <GrabSlider sliderStyle='md:w-3/5 lg:w-2/5 h-11/12 relative m-auto'/>
      </div>
      
      </div>

      {/* Projects */}
      <div className='md:overflow-hidden my-10 w-full h-fit md:h-full md:m-10 relative inline-block md:flex items-center justify-center'>
        <div className='md:mb-0 mb-10 mx-4 h-fit md:h-2/3 md:w-1/2'>
          <WebSlider urls={[0]}/>
        </div>
        <div className='px-5 h-3/4 text-center md:h-2/3 md:w-1/2 m-auto'>
          <h3 className='text-2xl text-center'>Projects</h3>
          <hr className='bg-portfolio-gray my-6 h-0.5'/>
          <p className='text-black text-center tracking-widest'>
            Ongoing work and previous works.
          </p>
          <button className='explore px-10 py-5 text-base my-8 mx-auto text-center h-fit w-fit' onClick={()=>{
          navigate('/jeremy-munroe/projects')
        }}>
            View All
          </button>
        </div>
      </div>
        {/* Contact */}
        <Contact/>

    </div>
    </motion.div>
  )
}
export default Home