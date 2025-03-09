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
          position: [10, 100, 10],
        }}
        style={{ height: "100vh" }}
        ><App />

    </Canvas> 
    <div style={{ padding: "50px", backgroundColor: "#f0f0f0" }}>
        <h1>Welcome to my 3D Website</h1>
        <p>This is a combination of 3D and normal HTML content.</p>
        <button onClick={() => alert("Button clicked!")}>Click Me</button>
        <p>
          Scroll down to see more content.
        </p>
      </div>

      {/* More content */}
      <div style={{ padding: "50px" }}>
        <h2>More Information</h2>
        <p>Here is some more information about the website.</p>
      </div>
  </StrictMode>,
)
