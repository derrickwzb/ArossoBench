import { StrictMode } from 'react'
import {  createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
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
          position: [40, 10, 10],
        }}
        ><App />

    </Canvas> 
  </StrictMode>,
)
