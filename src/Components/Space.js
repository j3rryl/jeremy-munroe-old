import { useState, useRef, Suspense, useEffect, lazy } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
export default function Space(props) {
    const [isColor, setColor]=useState('#fff');
    useEffect(() => {
      setColor('#fff')
      setColor('#000')
    }, []);
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(15000), { radius: 9.5 }))
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 20
      ref.current.rotation.y -= delta / 20
    })
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
          <PointMaterial transparent color={isColor} size={0.020} sizeAttenuation={true} depthWrite={false} />
        </Points>
      </group>
    )
  }