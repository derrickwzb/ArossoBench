import { Sky } from '@react-three/drei'
// import Ocean from "./Components/Ocean.jsx"
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <directionalLight color="red" position={ [1, 2, 3] } intensity={ 2.5 }/>

      <Sky sunPosition={[1, 0.1, 1]}/>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  )
}

 
