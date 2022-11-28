import React from 'react'
import { useState, Suspense, useEffect } from 'react'
import { Canvas} from '@react-three/fiber'


const CanvasScene = ({children, gl, dpr}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);
  return (
  <>
    { !isMounted ? null : (
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas gl={gl} dpr={dpr}>
          {children}
        </Canvas>
      </Suspense>
        )}
    </>
  )
}
export default CanvasScene