import '../assets/scss/home.scss'
import { motion } from 'framer-motion'
import { lazy } from 'react'
import CanvasScene from '../components/CanvasScene'
const Projects = () => {
  const StarScene = lazy(() => import('../components/Stars'))
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
      {/* Cover Page */}
      <div className='canvas w-full h-full fixed'>
      <CanvasScene children={<StarScene/>}/>
      </div>
      <div>
        Development In Progress Stay Tuned.
      </div>
    </div>
    </motion.div>
  )
}

export default Projects