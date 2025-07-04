import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Robot(props) {
  const { nodes, materials } = useGLTF('/robot.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[47.893, 58.694, 1.087]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes['����������001_R001_0'].geometry} material={materials['R.001']} />
          <mesh geometry={nodes['����������001_B001_0'].geometry} material={materials['B.001']} />
          <mesh geometry={nodes['����������001_G001_0'].geometry} material={materials['G.001']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/robot.glb')
