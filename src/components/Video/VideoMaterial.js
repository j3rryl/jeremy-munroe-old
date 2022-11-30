import { useVideoTexture } from '@react-three/drei'

export default function VideoMaterial({url}) {
const texture = useVideoTexture(url)
  return (
    <meshBasicMaterial map={texture} toneMapped={false} />
  )
}
