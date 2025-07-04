import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Suspense } from 'react'
import { Robot } from './Robot'

const RobotContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="Loading...">
                <Stage>
                    <Robot />
                    <OrbitControls enableZoom={false} autoRotate />
                    <PerspectiveCamera position={[-2, 1, 0]} zoom={0.5} makeDefault />
                </Stage>
            </Suspense>
        </Canvas>
    )
}

export default RobotContainer