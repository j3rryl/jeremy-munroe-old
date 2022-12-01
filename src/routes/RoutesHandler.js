import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Splash from '../pages/Splash'
import Home from '../pages/Home'
import About from '../pages/About'
import Navbar from '../components/Navbar'

const RoutesHandler = () => {
    const [inIndex, setInIndex] = useState();
    const location=useLocation()
    useEffect(() => {
      //Checks if location.pathname is not "/".
      setInIndex(location.pathname === "/")
    }, [location.pathname]);

  return (
    <AnimatePresence mode='wait'>
      {!inIndex?<Navbar />:null}
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Splash />}/>
      <Route path='/portfolio' element={<Splash />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      {/* <Route path='/projects' element={<Projects />}/>
      <Route path='/cases' element={<Cases />}/>
      <Route path='/contact' element={<Contact />}/> */}
    </Routes>
    </AnimatePresence>
  )
}

export default RoutesHandler