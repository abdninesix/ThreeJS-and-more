import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Suspense } from 'react'
import { Laptop } from './Laptop3D'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'

const LaptopContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="Loading...">
                <Stage>
                    <Laptop />
                    <OrbitControls enableZoom={false} autoRotate />
                    <PerspectiveCamera position={[-2, 1, 0]} zoom={0.5} makeDefault />
                </Stage>
            </Suspense>
        </Canvas>
    )
}

export default LaptopContainer