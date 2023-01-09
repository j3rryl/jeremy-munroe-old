import '../assets/scss/home.scss'
import '../assets/css/button.css'
import { motion } from 'framer-motion'

import FadeSlider from '../components/Sliders/FadeSlider'
import s1 from '../assets/images/projects/soulboosters/Screenshot (1).png'
import s2 from '../assets/images/projects/soulboosters/Screenshot (2).png'
import s3 from '../assets/images/projects/soulboosters/Screenshot (3).png'
import s4 from '../assets/images/projects/soulboosters/Screenshot (4).png'
import s5 from '../assets/images/projects/soulboosters/Screenshot (5).png'

import s6 from '../assets/images/projects/kyoju/Screenshot (6).png'
import s7 from '../assets/images/projects/kyoju/Screenshot (7).png'
import s8 from '../assets/images/projects/kyoju/Screenshot (8).png'
import s9 from '../assets/images/projects/kyoju/Screenshot (9).png'

import s10 from '../assets/images/projects/tiona/Screenshot (13).png'
import s11 from '../assets/images/projects/tiona/Screenshot (14).png'

const Projects = () => {
  return (
    <motion.div 
    className='motion'
    // initial={{scaleY:0}} 
    // animate={{scaleY:1}}
    // exit={{scaleY:0}}
    // transition={{duration : 1}}
    // initial={{opacity:0}} 
    // animate={{opacity:1}}
    // exit={{opacity:0}}
    >
    <div className='projects-page md:overflow-x-hidden w-full h-full bg-none'>
    <h3 className='text-2xl text-left ml-12'>My Projects</h3>
    <hr className='bg-portfolio-gray my-6 h-0.5 w-1/4'/>

      <div>
        <div className='mx-5 my-10 h-fit md:h-full md:m-10 relative inline-block md:flex items-center justify-around'>
            <div className='md:hidden md:mb-0 mb-10 h-fit w-full md:h-full md:w-1/2 m-auto'>
            <FadeSlider urls={[s1,s2,s3,s4,s5]} />
            </div>
            <div className='px-5 text-center h-full md:w-1/2 m-auto'>
              <h3 className='text-2xl text-center'>SoulBoosters</h3>
              <hr className='bg-portfolio-gray my-6 h-0.5'/>
              <ul className='text-center tracking-widest'>
              <li>Tracking climate change across the country.</li>
              </ul>
              <a className='tracking-widest' href='https://j3rryl.github.io/soulboosters/' target='_blank'
              rel="noopener noreferrer">
              <button className='explore px-10 py-5 text-2xl font-caveat font-extrabold my-8 mx-auto text-center h-fit w-fit'>
              View
              </button>
              </a>
            </div>

            <div className='hidden md:flex h-fit w-full md:h-full md:w-1/2 m-auto'>
            <FadeSlider urls={[s1,s2,s3,s4,s5]} />
            </div>
        </div>


      <div className='mx-5 h-full md:overflow-hidden md:m-10 relative inline-block md:flex items-center justify-around'>
        <div className='md:mb-0 mb-10 h-full md:w-1/2 m-auto'>
        <FadeSlider urls={[s6,s7,s8,s9]} />
        </div>
        <div className='px-5 h-full md:w-1/2 m-auto'>
          <h3 className='text-2xl text-center'>Kyoju Listings</h3>
          <hr className='bg-portfolio-gray my-6 h-0.5'/>
          <ul className='text-justify tracking-widest'>
          <li>A platform for buying properties as well as selling. </li>
          </ul>
          <a className='tracking-widest' href='https://j3rryl.github.io/kyoju/' target='_blank'
          rel="noopener noreferrer">
          <button className='explore px-10 py-5 text-2xl font-caveat font-extrabold my-8 mx-auto text-center h-fit w-fit'>
          View
          </button>
          </a>
        </div>
      </div>


      <div className='mx-5 my-10 h-fit md:h-full md:m-10 relative inline-block md:flex items-center justify-around'>
            <div className='md:hidden md:mb-0 mb-10 h-fit w-full md:h-full md:w-1/2 m-auto'>
            <FadeSlider urls={[s1,s2,s3,s4,s5]} />
            </div>
            <div className='px-5 text-center h-full md:w-1/2 m-auto'>
              <h3 className='text-2xl text-center'>Tiona CRM</h3>
              <hr className='bg-portfolio-gray my-6 h-0.5'/>
              <ul className='text-center tracking-widest'>
              <li>Java application for managing customers.</li>
              </ul>
              <a className='tracking-widest' href='https://github.com/j3rryl/Tiona' target='_blank'
              rel="noopener noreferrer">
              <button className='explore px-10 py-5 text-2xl font-caveat font-extrabold my-8 mx-auto text-center h-fit w-fit'>
              View
              </button>
              </a>
            </div>

            <div className='hidden md:flex h-fit w-full md:h-full md:w-1/2 m-auto'>
            <FadeSlider urls={[s10,s11]} />
            </div>
        </div>


      </div>
    </div>
    </motion.div>
  )
}

export default Projects