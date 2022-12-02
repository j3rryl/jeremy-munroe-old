import { Canvas } from "@react-three/fiber"
import Cloud from "./Cloud"
import { TrackballControls } from "@react-three/drei"
export default function WordSphere() {
    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
          <fog attach="fog" args={['#202025', 0, 80]} />
          <Cloud count={8} radius={20} />
          <TrackballControls />
        </Canvas>
      )
}
