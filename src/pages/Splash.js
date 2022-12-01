import { lazy } from 'react'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import CanvasScene from '../components/CanvasScene'
import '../assets/css/button.css'

const Splash = () => {
  const StarScene = lazy(() => import('../components/Stars'));
  let navigate=useNavigate()
  
  return (
    <motion.div 
    className='w-full h-full m-auto text-center'
    // initial={{scaleY:0}} 
    // animate={{scaleY:1}}
    // exit={{scaleY:0}}
    transition={{duration : 1}}
    initial={{opacity:0}} 
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <div className='m-0 w-full h-full text-center overflow-hidden'>
      <div className='w-full h-full absolute'>
      <CanvasScene children={<StarScene />} />
      </div>
      <div className='w-full h-full m-auto text-center flex justify-center items-center'>
        <div className='w-fit inline-block justify-around items-center'>
          <h1 className='my-4 mx-5 tracking-[.35em] text-center text-3xl font-caveat'>Jeremy Munroe</h1>
          <h1 className='my-4 mx-5 tracking-[.35em] text-center text-3xl font-caveat'>UI/UX Developer</h1>
          <button className='explore px-10 py-5 text-2xl font-caveat font-extrabold my-8 mx-auto text-center h-fit w-fit' 
          onClick={()=>{navigate('/jeremy-munroe/home')}}>
          Explore
          </button>
        </div>
      </div>
    </div>
    </motion.div>
  )
}
export default Splash