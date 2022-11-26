import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import Stars from '../components/Stars'
import CanvasScene from '../components/CanvasScene'
import '../assets/css/splash.css'

const Splash = () => {
  let navigate=useNavigate()
  
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
    <div className='splash-screen'>
      <div className='canvas'>
      <CanvasScene children={<Stars />} />
      </div>
      <div className='details'>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <h1 className='title'>Jeremy Munroe</h1>
      <h1 className='title'>UI/UX Developer</h1>
      <button className='explore' onClick={()=>{navigate('/home')}}>
        Explore
      </button>
      </div>
      
    </div>
    </motion.div>
  )
}
export default Splash