import * as THREE from 'three'
import { useFrame, extend  ,useThree, useLoader} from '@react-three/fiber';
import React, {  useRef, useMemo } from 'react'
import { RepeatWrapping, PlaneGeometry, Vector3 } from 'three';
import { Water } from "three/examples/jsm/objects/Water.js";


extend({Water})

export default function Ocean() {
    const ref = useRef()
    const gl = useThree((state) => state.gl)
    const waterNormals = useLoader(THREE.TextureLoader, './Textures/waternormals.jpg')
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
    const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
    const config = useMemo(
      () => ({
        textureWidth: 512,
        textureHeight: 512,
        waterNormals,
        sunDirection: new THREE.Vector3(),
        sunColor: 0xeb8934,
        waterColor: 0x00f6682,
        distortionScale: 5,
        fog: false,
        format: gl.encoding
      }),
      [waterNormals]
    )
    useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
    return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
  }