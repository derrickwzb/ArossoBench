import { StrictMode } from 'react'
import {  createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Overlay } from './Components/Overlay.jsx'
// import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const root = createRoot(document.querySelector('#root'))

root.render(
  <StrictMode>
  
  <Canvas
        camera={{
        fov: 45,
        near: 0.1,
        far: 100000,
        position: [10, 100, 10],
      }}
      style={{ height: "100vh" }}
      ><App />
    </Canvas> 
    <Overlay />
  </StrictMode>,
)
