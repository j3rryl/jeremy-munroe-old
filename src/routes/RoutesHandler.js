import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Splash from '../pages/Splash'
import Home from '../pages/Home'
import About from '../pages/About'
import VideoSlider from '../components/Sliders/VideoSlider'

const RoutesHandler = () => {
    const location=useLocation()
    console.log(location)
  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Splash />}/>
      <Route path='/portfolio' element={<Splash />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/video' element={<VideoSlider />}/>
      {/* <Route path='/projects' element={<Projects />}/>
      <Route path='/cases' element={<Cases />}/>
      <Route path='/contact' element={<Contact />}/> */}
    </Routes>
    </AnimatePresence>
  )
}

export default RoutesHandler