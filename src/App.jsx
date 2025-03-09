
import './App.css'
import Ocean from './components/Ocean'
import {Sphere, MeshWobbleMaterial, OrbitControls ,Sky, Environment} from '@react-three/drei';
import { EffectComposer, Bloom, ColorAverage } from "@react-three/postprocessing";
import Skybox from './Components/Skybox';
import Bench from './Components/Bench';
import { Vector3 } from 'three' // If you want to scale using Vector3

export default function App() {
  // const [count, setCount] = useState(0)


  //todo tint
  return (
    <>
      
      <Skybox/>
      <Bench position={[0, 0, 0]} // Move the model 2 units along the X-axis
        rotation={[0, Math.PI / 2, 0]} // Rotate the model 45 degrees around the X-axis
        scale={[10, 10, 10]} // Scale the model by a factor of 2
         />
      <Ocean/>
      <EffectComposer>
        
        <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} intensity={1.5} />
      </EffectComposer>
      <group>
      <OrbitControls 
        enableZoom = {false}
        enablePan = {false}
        minPolarAngle={Math.PI / 2.5} 
        maxPolarAngle={Math.PI / 2.5} 
        
      />
      </group>
      
    </>
  )
}

 
