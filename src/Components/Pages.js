import * as THREE from 'three'

import { Suspense, useRef } from 'react'
import img1 from '../assets/images/cover/android.jpg'
import img2 from '../assets/images/cover/cpp.webp'
import img3 from '../assets/images/cover/git.jpg'
import img4 from '../assets/images/cover/sql.jpg'
import img5 from '../assets/images/cover/php.webp'
import img6 from '../assets/images/cover/java.jpg'
import img7 from '../assets/images/cover/python.jpg'
import img8 from '../assets/images/cover/react.webp'
import img9 from '../assets/images/cover/kotlin.webp'



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
    <Page position={[-width * 1, 0, 0]} urls={[img1,img2,img3]} />
    <Page position={[width * 0, 0, 0]} urls={[img4,img5,img6]} />
    <Page position={[width * 1, 0, 0]} urls={[img7,img8,img9]} />
    <Page position={[width * 2, 0, 0]} urls={[img3,img2,img1]} />
    <Page position={[width * 3, 0, 0]} urls={[img6,img5,img4]} />
    <Page position={[width * 4, 0, 0]} urls={[img9,img8,img7]} />
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
            {/* <h1 style={{ position: 'absolute', top: '20vh', left: '22vw', color:'#fff' }}>Scroll</h1>
            <h1 style={{ position: 'absolute', top: '25vh', left: '23vw', color:'#fff', letterSpacing: '.25em' }}>{'>>>'}</h1> */}
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  )
}
