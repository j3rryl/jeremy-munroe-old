import React from 'react'
import Gallery from './Gallery'
import { Scroll, ScrollControls } from '@react-three/drei'

import * as THREE from 'three'

import { Suspense, useRef } from 'react'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload } from '@react-three/drei'



export default function GalleryScene() {
  <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ScrollControls infinite horizontal damping={4} pages={4} distance={1}>
          <Scroll>
            <Gallery />
          </Scroll>
          <Scroll html>
            {/* <h1 style={{ position: 'absolute', top: '20vh', left: '22vw', color:'#fff' }}>Scroll</h1>
            <h1 style={{ position: 'absolute', top: '25vh', left: '23vw', color:'#fff', letterSpacing: '.25em' }}>{'>>>'}</h1> */}
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
}
