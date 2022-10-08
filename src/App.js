import './App.css';
import "swiper/css/bundle";

import { Routes, Route, useLocation } from 'react-router-dom';
import Splash from './Components/Pages/Splash'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Projects from './Components/Pages/Projects'
import Cases from './Components/Pages/Cases'
import Contact from './Components/Pages/Contact'
import {AnimatePresence} from 'framer-motion'

function App() {
  const location=useLocation()
  console.log(location)
  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Splash />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/cases' element={<Cases />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    </AnimatePresence>
  );
}
export default App;
