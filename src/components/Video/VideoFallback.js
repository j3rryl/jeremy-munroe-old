import { useTexture } from '@react-three/drei'

export default function VideoFallback({url}) {
const texture = useTexture(url)
  return (
    <meshBasicMaterial map={texture} toneMapped={false} />
  )
}
