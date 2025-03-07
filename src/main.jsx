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
          far: 200,
          position: [52, 7, 12],
        }}
        ><App />

    </Canvas> 
  </StrictMode>,
)
