import * as THREE from 'three'
import { useMemo } from 'react'
import Word from './Word'
export default function Cloud({ count = 4, radius = 20 }) {
   // Create a count x count random words with spherical distribution
   const words = useMemo(() => {
    const skills=['React', 'PHP', 'Java', 'HTML', 'CSS', 'Angular',
     'Python', 'SQL', 'JSON', 'JQuery', 'Android', 'MongoDB', 'C++', 'C', 'Kotlin', 'Node', 'Next', 'TypeScript']
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1, k=0; i < count + 1; i++,k++)
      for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), skills[k]])
    return temp
  }, [count, radius])
  return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}
