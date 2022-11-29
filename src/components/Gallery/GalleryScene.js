import React from 'react'
import Gallery from './Gallery'
import { Scroll, ScrollControls } from '@react-three/drei'

export default function GalleryScene() {
  return(
      <ScrollControls infinite horizontal damping={4} pages={4} distance={1}>
        <Scroll>
          <Gallery />
        </Scroll>
        <Scroll html>
        </Scroll>
      </ScrollControls>
    )
}


