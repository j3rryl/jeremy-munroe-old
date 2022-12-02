import '../assets/scss/about.scss'
import { lazy } from 'react';
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
import CanvasScene from '../components/CanvasScene'
import FadeSlider from '../components/Sliders/FadeSlider';







const About = () => {
  const StarScene = lazy(() => import('../components/Stars'));
  return (
    <div className='about-page md:overflow-x-hidden w-full h-full bg-none'>
      <div className='canvas w-full h-full fixed'>
      <CanvasScene children={<StarScene />} />
        </div>

      {/* Education */}
      <h3 className=' text-black text-3xl text-left ml-28'>Education</h3>
      <hr className='bg-portfolio-gray my-6 h-0.5 mx-0 w-1/2'/>
      <div className='m-auto p-16 text-center h-fit md:m-10 md:flex md:overflow-hidden relative inline-block items-center justify-center'>
          <div className='starehe m-5 md:w-fit p-16 rounded-2xl'>
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
          
          <div className='strathmore m-5 md:w-fit p-16 rounded-2xl'>
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

      {/* Work */}
      
    <div className='mx-5 h-full md:overflow-hidden md:m-10 relative inline-block md:flex items-center justify-around'>
      <div className='h-3/4 md:h-2/3 md:w-1/2 m-auto'>
      <FadeSlider urls={[lab1,lab2,lab3]} />
      </div>

      <div className='px-5 md:h-2/5 md:w-2/5 m-auto border-none'>
      <h3 className='text-2xl text-center'>Lab Assistant</h3>
      <hr className='bg-portfolio-gray my-6 h-0.5'/>
      <ul className='text-black text-center tracking-widest'>
      <li>I was responsible for the safe and orderly operation and functionality of a computer lab that was used by lecturers and students</li>
      <li>Maintained computer lab equipment worth a fortune.</li>
      <li>Streamlined processes within the lab to make usage more efficient and user-friendly.</li>
      </ul>
      </div>

    </div>

            {/* Nema */}
    <div className='my-10 w-full h-full md:m-10 relative inline-block md:flex items-center justify-around'>
      <div className='px-5 h-3/4 text-center md:h-2/3 md:w-1/2 m-auto'>
        <h3 className='text-2xl text-center'>Attaché</h3>
        <hr className='bg-portfolio-gray my-6 h-0.5'/>
        <p className='text-black text-center tracking-widest'>I provided office assistance by:</p>
        <ul className='text-black text-center tracking-widest'>
        <li>Maintaining files and dealing with other administrative support tasks.</li>
        <li>Answering phone calls and taking messages.</li>
        <li>Welcoming visitors to the office.</li>
        <li>Providing visitors with information.</li>
        </ul>
      </div>

      <div className='hidden overflow-hidden md:flex h-3/4 mx-1 md:h-2/3 md:w-1/2 m-auto'>
        <FadeSlider urls={[nema,assis]}/>
      </div>
    </div>


        {/* Dezana */}
        
    <div className='mx-5 h-full md:overflow-hidden md:m-10 relative inline-block md:flex items-center justify-around'>
      <div className='h-3/4 md:h-2/3 md:w-1/2 m-auto'>
        <FadeSlider urls={[ai,ap,corel,datae]} />
      </div>

      <div className='px-5 md:h-2/5 md:w-2/5 m-auto border-none'>
        <h3 className='text-2xl text-center'>Graphic Design Intern</h3>
        <hr className='bg-portfolio-gray my-6 h-0.5'/>
        <ul className=' text-black text-justify tracking-widest'>
        <li>I worked as Graphic Design Intern. </li>
        <li>Later I worked on the e-commerce website, Dezana Hub. I did basic maintenance such as ensuring products uploaded are up to date.</li>
        </ul>
      </div>
    </div>


        {/* Skills */}
      <div className='skills'>
        <div className='skills-title'>
        <h3>Skills</h3>
        <hr/>
        </div>
        <div className='skillset'>
        <Skillset />
        </div>
        
      
      </div>


      {/* Hobbies */}
      <div className='hobbies'>

      </div>
      <div className='user-feedback'>

      </div>
      </div>
  )
}

export default About