import '../../scss/stars.scss'
import Header from '../Header'

import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars,Points, PointMaterial } from '@react-three/drei'
// import * as random from 'maath/random/dist/maath-random.esm'
const About = () => {
  return (
    <div className='home-page'>
        <Canvas>
          <Stars />
      </Canvas>
    </div>
  )
}

export default About