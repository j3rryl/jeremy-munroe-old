import { Suspense } from 'react'
import { useAspect } from '@react-three/drei'
import work from '../../assets/images/about/work.jpg'
import VideoFallback from './VideoFallback'
import VideoMaterial from './VideoMaterial'

export default function VideoScene({url}) {
const size = useAspect(600, 300)
  return (
    <mesh scale={size}>
      <planeGeometry />
      <Suspense fallback={<VideoFallback url={work} />}>
        <VideoMaterial url={url} />
      </Suspense>
    </mesh>
  )
}
