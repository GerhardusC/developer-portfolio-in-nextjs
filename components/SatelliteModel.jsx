/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/3DModels/satellite.glb 

This is the 3D model of the Satellite, I imported it from an asset store on blender and brought it here using gltfjsx
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

const SatelliteModel = (props) => {
  const { nodes, materials } = useGLTF('/3DModels/Satellite.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Oring_hi002.geometry} material={materials.Satilite} position={[-0.365, 0, -0.865]} />
    </group>
  )
}
export default SatelliteModel;
useGLTF.preload('/3DModels/Satellite.glb')


