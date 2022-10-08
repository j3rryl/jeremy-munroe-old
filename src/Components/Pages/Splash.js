import { useNavigate } from 'react-router-dom'
import { useState, useRef, Suspense, useEffect, lazy } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import {motion} from 'framer-motion'
import '../../css/splash.css'
const Splash = () => {
  const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
      setIsMounted(true);
    }, []);
  let navigate=useNavigate()
  
  return (
    <motion.div 
    className='motion'
    // initial={{scaleY:0}} 
    // animate={{scaleY:1}}
    // exit={{scaleY:0}}
    transition={{duration : 1}}
    initial={{opacity:0}} 
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
    <div className='splash-screen'>
      <div className='canvas'>
      { !isMounted ? null : (
      <Suspense fallback={null}>
        <Canvas>
          <Stars />
        </Canvas>
      </Suspense>
      )}
      </div>
      <div className='details'>
      <h1 className='title'>Jeremy Munroe</h1>
      <h1 className='title'>UI/UX Developer</h1>
      <button className='explore' onClick={()=>{navigate('./home')}}>
        Explore
      </button>
      </div>
      
    </div>
    </motion.div>
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
        <PointMaterial transparent color="#000" size={0.020} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
export default Splash