import '../assets/scss/about.scss'
import lab1 from '../assets/images/about/lab1.jpg'
import lab2 from '../assets/images/about/lab2.jpg'
import lab3 from '../assets/images/about/lab3.jpg'
import ai from '../assets/images/about/ai.jpg'
import ap from '../assets/images/about/ap.webp'
import corel from '../assets/images/about/corel.webp'
import datae from '../assets/images/about/data.webp'
import assis from '../assets/images/about/assis.webp'
import nema from '../assets/images/about/nema.jpg'
import FadeSlider from '../components/Sliders/FadeSlider';
import WordSphere from '../components/WebSphere/WordSphere';
import Tabs from '../components/Tabs/Tabs';

const About = () => {
  return (
    <div className='about-page md:overflow-x-hidden w-full h-fit bg-none'>
    
      {/* Education */}
      <h3 className='text-3xl text-left ml-10'>Education</h3>
      <hr className='bg-portfolio-gray my-5 h-0.5 mx-5 w-3/4 md:w-1/2'/>
      <div className='m-auto p-16 text-center h-fit md:m-10 md:flex md:overflow-hidden relative inline-block items-center justify-center'>
          <Tabs/>
      </div>
  {/* Work */}
  <h3 className='text-3xl text-left ml-10 mt-24'>Work Experience</h3>
  <hr className='bg-portfolio-gray my-6 h-0.5 mx-5 w-1/2'/>
      <div className=' mx-5 h-fit md:m-10 relative inline-block md:flex items-center justify-around'>
        <div className='md:mb-0 mb-10 h-fit w-full md:w-1/2 md:h-full m-auto'>
        <FadeSlider urls={[lab1,lab2,lab3]} />
        </div>
      <div className='px-5 h-full md:w-1/2 m-auto'>
        <h3 className='text-2xl text-center'>Lab Assistant</h3>
        <hr className='bg-portfolio-gray my-6 h-0.5'/>
        <ul className='text-center tracking-widest'>
        <li>I was responsible for the safe and orderly operation and functionality of a computer lab that was used by lecturers and students</li>
        <li>Maintained computer lab equipment worth a fortune.</li>
        <li>Streamlined processes within the lab to make usage more efficient and user-friendly.</li>
        </ul>
        </div>
      </div>
      {/* Nema */}
      <div className='mx-5 my-10 h-fit md:h-full md:m-10 relative inline-block md:flex items-center justify-around'>
            <div className='md:hidden md:mb-0 mb-10 h-fit w-full md:h-full md:w-1/2 m-auto'>
              <FadeSlider urls={[nema,assis]}/>
            </div>
            <div className='px-5 text-center h-full md:w-1/2 m-auto'>
              <h3 className='text-2xl text-center'>Attaché</h3>
              <hr className='bg-portfolio-gray my-6 h-0.5'/>
              <p className='text-center tracking-widest'>I provided office assistance by:</p>
              <ul className='text-center tracking-widest'>
              <li>Maintaining files and dealing with other administrative support tasks.</li>
              <li>Answering phone calls and taking messages.</li>
              <li>Welcoming visitors to the office.</li>
              <li>Providing visitors with information.</li>
              </ul>
            </div>

            <div className='hidden md:flex h-fit w-full md:h-full md:w-1/2 m-auto'>
              <FadeSlider urls={[nema,assis]}/>
            </div>
        </div>
        {/* Dezana */}
      <div className='mx-5 h-full md:overflow-hidden md:m-10 relative inline-block md:flex items-center justify-around'>
        <div className='md:mb-0 mb-10 h-full md:w-1/2 m-auto'>
          <FadeSlider urls={[ai,ap,corel,datae]} />
        </div>

        <div className='px-5 h-full md:w-1/2 m-auto'>
          <h3 className='text-2xl text-center'>Graphic Design Intern</h3>
          <hr className='bg-portfolio-gray my-6 h-0.5'/>
          <ul className='text-justify tracking-widest'>
          <li>I worked as Graphic Design Intern. </li>
          <li>Later I worked on the e-commerce website, Dezana Hub. I did basic maintenance such as ensuring products uploaded are up to date.</li>
          </ul>
        </div>
      </div>

  {/* Skills */}
  <h3 className='text-3xl text-left ml-10 mt-24'>Skills</h3>
  <hr className='bg-portfolio-gray my-6 h-0.5 mx-5 w-1/2'/>
      <div className='mx-5 h-screen md:overflow-hidden md:m-10 relative inline-block md:flex items-center justify-around'>
        <div className='md:mb-0 mb-10 h-full md:w-1/2 m-auto'>
        <WordSphere />
        </div>
      </div>

    </div>
  )
}

export default About