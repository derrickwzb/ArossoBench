import { useState, useRef } from 'react'
import { useGLTF ,OrbitControls} from '@react-three/drei'
import { EffectComposer, Bloom, ColorAverage } from "@react-three/postprocessing";
import { useFrame } from '@react-three/fiber'

import Skybox from '../Skybox.jsx';
import Bench from '../Bench.jsx';
import Ocean from '../Ocean.jsx'

export function HomeView(){
  return (
    <>
          <Skybox/>
          <Bench position={[30, 0, 15]} // Move the model 2 units along the X-axis
            rotation={[0, Math.PI / 2, 0]} // Rotate the model 45 degrees around the X-axis
            scale={[10, 10, 10]} // Scale the model by a factor of 2
          />
          <Ocean/>
          <EffectComposer>
            <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.3} intensity={1.5} />
          </EffectComposer>
          <OrbitControls  autoRotate autoRotateSpeed={0.5}
            target={[30, 10, 15]}
            enableZoom = {false}
            enablePan = {false}
            minPolarAngle={Math.PI / 2.5} 
            maxPolarAngle={Math.PI / 2.5} 
          />
        </>
  )
}

function useHover() {
    const [hovered, hover] = useState(false)
    return [hovered, { onPointerOver: (e) => hover(true), onPointerOut: () => hover(false) }]
  }