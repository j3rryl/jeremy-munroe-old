import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Splash from '../pages/Splash'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import About from '../pages/About'
import Navbar from '../components/Navbar'

const RoutesHandler = () => {
    const location=useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Navbar />
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Splash />}/>
      <Route path='/jeremy-munroe' element={<Splash />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/projects' element={<Projects />}/>
      {/* <Route path='/cases' element={<Cases />}/>
      <Route path='/contact' element={<Contact />}/> */}
    </Routes>
    </AnimatePresence>
  )
}

export default RoutesHandler