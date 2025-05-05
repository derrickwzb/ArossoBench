import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import { Homepage } from "./Components/Home2/Homepage";
// import { Home } from './Components/Home/Home';
// import { Nav } from "./Components/Nav/Nav";


export default function App() {
  return (
  <Router>
    {/* <Nav/> */}
    <Routes>
      <Route exact path = "/" element={<Homepage/>}/>
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