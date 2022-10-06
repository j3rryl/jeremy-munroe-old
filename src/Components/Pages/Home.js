import '../../scss/home.scss'
import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import Header from '../Header'

const Home = () => {
  return (
    
    <div className='home-page'>

      {/* Cover Page */}
      <div className='canvas'>
        <Canvas>
          <Stars />
        </Canvas>
      </div>
      <div className='container container-1'>
          {/* <Stars /> */}
      <Header />
      <div className='details'>
      <div className='block synopsis'>
        <h3 className='title'>Website and User Interface Design</h3>
        <p>
        I am a Codaholic very much in love with anything which has 1s and 0s.
        This has culminated an adventure I took to learn every possible language I can.
        </p>
      </div>
      <div className='block profile-image'>

      </div>

      </div>
      </div>

      {/* About Me */}
      <div className='container'>
      <div className='details'>
      <div className='block synopsis'>
        <h3 className='title'>About Me</h3>
        <p>
        Education, hobbies and all past work experiences here.
        </p>
      </div>
      <div className='block profile-image'>

      </div>
      
      </div>
      </div>

      {/* Projects */}
      <div className='container container-1'>
      <div className='details'>
      <div className='block synopsis'>
        <h3 className='title'>Projects</h3>
        <p>
          View my projects here.
        </p>
      </div>
      <div className='block profile-image'>

      </div>
      
      </div>
      </div>
    </div>
  )
}
function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(15000), { radius: 9.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20
    ref.current.rotation.y -= delta / 20
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#fff" size={0.020} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
export default Home