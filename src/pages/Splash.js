import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import Stars from '../components/Stars'
import CanvasScene from '../components/CanvasScene'
import '../assets/css/splash.css'

const Splash = () => {
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
      <CanvasScene children={<Stars />} />
      </div>
      <div className='w-full h-full m-auto text-center flex justify-center items-center'>
        <div className='w-fit inline-block justify-around items-center'>
          <h1 className='my-4 tracking-[.35em] text-center text-xl'>Jeremy Munroe</h1>
          <h1 className='my-4 tracking-[.35em] text-center text-xl'>UI/UX Developer</h1>
          <button className='explore px-10 py-5 text-base my-8 mx-auto text-center h-fit w-fit relative' onClick={()=>{navigate('/home')}}>
          Explore
          </button>
        </div>
      </div>
      
    </div>
    </motion.div>
  )
}
export default Splash