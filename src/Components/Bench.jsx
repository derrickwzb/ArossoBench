import React, { useRef } from 'react'
import { useGLTF, } from '@react-three/drei'
import { Vector3 ,Euler} from 'three' // If you want to scale using Vector3
        
        
export default function Bench(props) {
    const group = useRef()
    const { nodes,  } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bench/model.gltf')
    const { position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1] } = props
    return (
        <group ref={group} {...props} dispose={null} scale={new Vector3(...scale)} position={new Vector3(...position)} 
            rotation={new Euler(...rotation)} >
        <mesh geometry={nodes.bench.geometry}>
          <meshStandardMaterial emissive={"red"} emissiveIntensity={2} color={"red"} />
        </mesh>
        <mesh geometry={nodes.Plane005.geometry}>
          <meshStandardMaterial emissive={"red"} emissiveIntensity={2} color={"red"} />
        </mesh>
        <mesh geometry={nodes.Plane001.geometry}>
          <meshStandardMaterial emissive={"red"} emissiveIntensity={2} color={"red"} />
        </mesh>
        <mesh geometry={nodes.Vert001.geometry}>
          <meshStandardMaterial emissive={"red"} emissiveIntensity={2} color={"red"} />
        </mesh>
      </group>
    )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bench/model.gltf')