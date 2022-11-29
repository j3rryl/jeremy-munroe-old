import React from 'react'
import Images from './Images'
import { useThree } from '@react-three/fiber'
//Images

import img1 from '../../assets/images/cover/android.jpg'
import img2 from '../../assets/images/cover/cpp.webp'
import img3 from '../../assets/images/cover/git.jpg'
import img4 from '../../assets/images/cover/sql.jpg'
import img5 from '../../assets/images/cover/php.webp'
import img6 from '../../assets/images/cover/java.jpg'
import img7 from '../../assets/images/cover/python.jpg'
import img8 from '../../assets/images/cover/react.webp'
import img9 from '../../assets/images/cover/kotlin.webp'

export default function Gallery() {
    const { width } = useThree((state) => state.viewport)
    return (
        <>
    <Images position={[-width * 1, 0, 0]} urls={[img1,img2,img3]} />
    <Images position={[width * 0, 0, 0]} urls={[img4,img5,img6]} />
    <Images position={[width * 1, 0, 0]} urls={[img7,img8,img9]} />
    <Images position={[width * 2, 0, 0]} urls={[img3,img2,img1]} />
    <Images position={[width * 3, 0, 0]} urls={[img6,img5,img4]} />
    <Images position={[width * 4, 0, 0]} urls={[img9,img8,img7]} />
        </>
    )
}
