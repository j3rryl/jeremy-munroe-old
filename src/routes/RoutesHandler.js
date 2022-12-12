import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Splash from '../pages/Splash'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import About from '../pages/About'
import Navbar from '../components/Navbar'
import Test from '../tests/Test'
import CanvasScene from '../components/CanvasScene'
import { lazy, useRef, useState, useEffect } from 'react'

const RoutesHandler = () => {
    const location=useLocation()
    const StarScene = lazy(() => import('../components/Stars'));
    const uniqueKey = useRef()

  const [darkTheme, setDarkTheme] = useState(false)
  let theme
  const root = document.querySelector(':root')

  function toggleTheme(){
    setDarkTheme(!darkTheme)
    if(darkTheme){    
      theme = "light"
    } else if(!darkTheme){
      theme = "dark"
    }
    localStorage.setItem('portfolio.theme', `${theme}`)
    root.setAttribute('color-scheme', `${theme}`)

  }
  useEffect(()=>{
    setDarkTheme(darkTheme)
    console.log(darkTheme)
  },[darkTheme])

  return (
    <AnimatePresence mode='wait'>
      <Navbar />
      <div className='w-full h-full fixed' key={uniqueKey}>
      <CanvasScene children={<StarScene starColor={darkTheme?"#fff":"#000"}/>} />
      </div>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Splash />}/>
      <Route path='/jeremy-munroe' element={<Splash toggleTheme={toggleTheme} darkTheme={!darkTheme}/>}/>
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