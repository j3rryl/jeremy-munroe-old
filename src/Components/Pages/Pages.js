import * as THREE from 'three'

import { Suspense, useRef } from 'react'
import img from '../../images/about/work.jpg'
import img1 from '../../images/about/hobbies.webp'
import img2 from '../../images/about/education.jpg'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, Image as ImageImpl  } from '@react-three/drei'
import { ScrollControls, Scroll, useScroll } from '@react-three/drei'

function Image(props) {
  const ref = useRef()
  const group = useRef()
  const data = useScroll()

  useFrame((state, delta) => {
    group.current.position.z = THREE.MathUtils.damp(group.current.position.z, Math.max(0, data.delta * 50), 4, delta)
    ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, Math.max(0, 1 - data.delta * 1000), 4, delta)
  })
  return (
    <group ref={group}>
      <ImageImpl ref={ref} {...props} />
    </group>
  )
}

function Page({ m = 0.4, urls, ...props }) {
    const { width } = useThree((state) => state.viewport)
    const w = width < 10 ? 1.5 / 3 : 1 / 3
    const ref = useRef()
    
    return (
      <group {...props}>
        <Image ref={ref} position={[-width * w, 0, -1]} scale={[width * w - m * 2, 5, 1]} url={urls[0]} />
        <Image ref={ref} position={[0, 0, 0]} scale={[width * w - m * 2, 5, 1]} url={urls[1]} />
        <Image ref={ref} position={[width * w, 0, 1]} scale={[width * w - m * 2, 5, 1]} url={urls[2]} />
      </group>
    )
  }
  function Gallery() {
    const { width } = useThree((state) => state.viewport)
    return (
      <>
    <Page position={[-width * 1, 0, 0]} urls={[img,img1,img2]} />
    <Page position={[width * 0, 0, 0]} urls={[img1,img2,img]} />
    <Page position={[width * 1, 0, 0]} urls={[img2,img,img1]} />
    <Page position={[width * 2, 0, 0]} urls={[img,img1,img2]} />
    <Page position={[width * 3, 0, 0]} urls={[img1,img2,img]} />
    <Page position={[width * 4, 0, 0]} urls={[img2,img1,img]} />
      </>
    )
  }

export default function Pages() {
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ScrollControls infinite horizontal damping={4} pages={4} distance={1}>
          <Scroll>
            <Gallery />
          </Scroll>
          <Scroll html>
            <h1 style={{ position: 'absolute', top: '20vh', left: '22vw', color:'#fff' }}>Scroll</h1>
            <h1 style={{ position: 'absolute', top: '25vh', left: '23vw', color:'#fff', letterSpacing: '.25em' }}>{'>>>'}</h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  )
}
