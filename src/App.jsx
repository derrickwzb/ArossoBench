
import './App.css'
import Ocean from './components/Ocean'
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Skybox from './Components/Skybox';
import Bench from './Components/Bench';
import { Vector3 } from 'three' // If you want to scale using Vector3

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Skybox/>
      <Bench position={[15, 0, 15]} // Move the model 2 units along the X-axis
        rotation={[0, Math.PI / 2, 0]} // Rotate the model 45 degrees around the X-axis
        scale={[10, 10, 10]} // Scale the model by a factor of 2
         />
      <Ocean/>
      <EffectComposer>
        <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} intensity={1.5} />
      </EffectComposer>
      <OrbitControls enableZoom = {true}/>
    </>
  )
}

 
