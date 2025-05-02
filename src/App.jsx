import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import { Home } from './Components/Home/Home';


export default function App() {
  return (
  <Router>
    <Routes>
      <Route exact path = "/" element={<Home/>}/>
    </Routes>
  </Router>
  
  );
}

 
/* <Canvas
        camera={{
        fov: 45,
        near: 0.1,
        far: 100000,
        position: [10, 100, 10],
      }}
      style={{ height: "100vh" }}
      ><App />
    </Canvas> 
    <Overlay /> */