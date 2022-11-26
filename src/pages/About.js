import React from 'react'
import '../assets/scss/about.scss'

import starch from '../assets/images/logo/starehe.jpg'
import strath from '../assets/images/logo/strath.png'
import Space from '../components/Space'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import lab1 from '../assets/images/about/lab1.jpg'
import lab2 from '../assets/images/about/lab2.jpg'
import lab3 from '../assets/images/about/lab3.jpg'
import ai from '../assets/images/about/ai.jpg'
import ap from '../assets/images/about/ap.webp'
import corel from '../assets/images/about/corel.webp'
import datae from '../assets/images/about/data.webp'
import assis from '../assets/images/about/assis.webp'
import nema from '../assets/images/about/nema.jpg'
import Skillset from '../components/Skillset'







const About = () => {
  return (
    <div className='about-page'>
      <div className='canvas'>
      <Suspense fallback={null}>
          <Canvas>
            <Space />
          </Canvas>
        </Suspense>
        </div>
      <div className='education-tab'>
        <div className='edu-tab'>
        <h3 className='edu-title'>Education</h3>
        <hr />
        </div>
        <div className='schools'>
          <div className='starehe'>
            <div className='starehe-image'>
            {/* <img className='starch-img' src={starch}/> */}
            </div>
            <div className='starehe-details'>
              <h4>Starehe Boys' Centre and School</h4>
              <p>Start Date: 2nd Feb 2016</p>
              <p>End Date Date: 16th November 2016</p>
              <p>Certification: KCSE</p>
              <p>Grade: A-</p>
            </div>
            <div className='back-photo'>

            </div>
          </div>
          <div className='strathmore'>
            <div className='strath-image'>
              {/* <img src={strath} className='strath-img'/> */}
            </div>
            <div className='strath-details'>
            <h4>Strathmore University</h4>
            <p>Start Date: 4th July 2020</p>
            <p>End Date Date: 16th July 2024</p>
            <p>Certification: Working progress</p>
            <p>Grade: A-</p>
            </div>
            <div className='back-photo'>

            </div>
           </div>
        </div>
      </div>
      <div className='work-experience'>
        <div className='work-tab'>
        <h3 className='work-title'>Work Experience</h3>
        <hr/>
        </div>
        <div className='strath'>
          <div className='details'>
            <div className='img-tab'>
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
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={lab1} />
        </SwiperSlide>
        <SwiperSlide>          
          <img src={lab2} />
        </SwiperSlide>
        <SwiperSlide> 
            <img src={lab3} />
        </SwiperSlide>
      </Swiper>
            </div>
            <div className='work-done'>
          <h3>Lab Assistant</h3>
          <hr/>
            <ul>
          <li>I was responsible for the safe and orderly operation and functionality of a computer lab that was used by lecturers and students</li>
          <li>Maintained computer lab equipment worth a fortune.</li>
          <li>Streamlined processes within the lab to make usage more efficient and user-friendly.</li>
            </ul>
            </div>
          </div>

        </div>
        <div className='nema'>
        <div className='details'>
        <div className='work-done'>
        <h3>Attaché</h3>
        <hr/>
        <p>I provided office assistance by:</p>
        <ul>
        <li>Maintaining files and dealing with other administrative support tasks.</li>
        <li>Answering phone calls and taking messages.</li>
        <li>Welcoming visitors to the office.</li>
        <li>Providing visitors with information.</li>
        </ul>
        </div>
        <div className='img-tab'>
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
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={nema} />
        </SwiperSlide>
        <SwiperSlide>          
          <img src={assis} />
        </SwiperSlide>
      </Swiper>
            </div>
        </div>
        </div>
        <div className='dezana'>
        <div className='details'>
        <div className='img-tab'>
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
        // loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={ai} />
        </SwiperSlide>
        <SwiperSlide>          
          <img src={ap} />
        </SwiperSlide>
        <SwiperSlide> 
            <img src={corel} />
        </SwiperSlide>
        <SwiperSlide> 
            <img src={datae} />
        </SwiperSlide>
      </Swiper>
        </div>
        <div className='work-done'>
        <h3>Graphic Design Intern</h3>
        <hr/>
        <ul>
        <li>I worked as Graphic Design Intern. </li>
	      <li>Later I worked on the e-commerce website, Dezana Hub. I did basic maintenance such as ensuring products uploaded are up to date.</li>
        </ul>
        </div>
        </div>
        </div>
      <div className='skills'>
        <div className='skills-title'>
        <h3>Skills</h3>
        <hr/>
        </div>
        <div className='skillset'>
        <Skillset />
        </div>
        
      
      </div>
      </div>
      
      <div className='hobbies'>

      </div>
      <div className='user-feedback'>

      </div>
      </div>
  )
}

export default About