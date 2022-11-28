import React from 'react'
import Image from './Image'
import { useRef } from 'react'
import { useThree } from '@react-three/fiber'


export default function Images({m = 0.4, urls, ...props}) {
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
