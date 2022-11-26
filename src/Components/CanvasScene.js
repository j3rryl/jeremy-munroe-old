import React from 'react'
import { useState, Suspense, useEffect } from 'react'
import { Canvas} from '@react-three/fiber'

import PropTypes from 'prop-types'

const CanvasScene = ({children}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);
  return (
  <>
    { !isMounted ? null : (
      <Suspense fallback={null}>
        <Canvas>
          {children}
        </Canvas>
      </Suspense>
        )}
    </>
  )
}

CanvasScene.propTypes = {}

export default CanvasScene