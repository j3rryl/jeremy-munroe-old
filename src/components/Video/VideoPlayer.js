import { Canvas } from '@react-three/fiber'
import VideoScene from './VideoScene'

export default function VideoPlayer({videoSource}) {
  return (
    <div className='w-full h-full'>
        <Canvas orthographic>
            <VideoScene url={videoSource}/>
        </Canvas>
    </div>
  )
}
