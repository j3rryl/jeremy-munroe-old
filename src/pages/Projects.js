import '../assets/scss/home.scss'
import { motion } from 'framer-motion'
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
      <div>
        Development In Progress Stay Tuned.
      </div>
    </div>
    </motion.div>
  )
}

export default Projects