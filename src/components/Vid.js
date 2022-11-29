import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'
import work from '../../images/about/work.jpg'
import vidi from '../../images/10.mp4'
export default function Vid() {
  return (
    <div style={{width:'50vw',height:'50vh', overflow:'hidden',borderRadius:'14px',border:'1px solid black'}}>
    <Canvas orthographic>
      <Scene url={vidi}/>
    </Canvas>
    </div>
  )
}

function Scene({url}) {
  const size = useAspect(600, 300)
  return (
    <mesh scale={size}>
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url={work} />}>
        <VideoMaterial url={url} />
      </Suspense>
    </mesh>
  )
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}
