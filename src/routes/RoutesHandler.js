import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Splash from '../pages/Splash'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import About from '../pages/About'
import Navbar from '../components/Navbar'
import Test from '../tests/Test'
import CanvasScene from '../components/CanvasScene'
import { lazy } from 'react'
import { useRef } from 'react'

const RoutesHandler = () => {
    const location=useLocation()
    const StarScene = lazy(() => import('../components/Stars'));
    const uniqueKey = useRef()

  return (
    <AnimatePresence mode='wait'>
      <Navbar />
      <div className='w-full h-full fixed' key={uniqueKey}>
      <CanvasScene children={<StarScene />} />
      </div>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Splash />}/>
      <Route path='/jeremy-munroe' element={<Splash />}/>
      <Route path='/jeremy-munroe/home' element={<Home />}/>
      <Route path='/jeremy-munroe/about' element={<About />}/>
      <Route path='/jeremy-munroe/projects' element={<Projects />}/>
      <Route path='/jeremy-munroe/tests' element={<Test />}/>
      {/* <Route path='/cases' element={<Cases />}/>
      <Route path='/contact' element={<Contact />}/> */}
    </Routes>
    </AnimatePresence>
  )
}

export default RoutesHandler