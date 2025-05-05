import "./Home2.css";
import { Canvas } from '@react-three/fiber'
import { View ,Preload} from '@react-three/drei';
import { HomeView } from '../Home/HomeView';
// import HERO from "../img/hero.mp4";
import React from "react";

const Home2 = () => {
  return <div className="home">

    <div className="navbar">
        <div className="logo">AROSSOBENCH</div>
    <ul>
        
        <li><a href="mailto:admin@arossobench.com">Contact us : admin@arossobench.com </a></li>
        {/* <li><a href="/">The Bench</a></li>
        <li><a href="/">About us</a></li>
        <li><a href="/">Contact us</a></li> */}
    </ul>
    </div>
    <div className="hero-section">
        <div className="hero-logo">ARB STUDIO</div>
        <div className="video">
        <View style={{ position: "relative",height: "100%",width: "100%", zIndex:11}}>
                <HomeView  />
        </View>
        
        </div>
        <div className="canvas"style={{ position: 'fixed'}}>
        <Canvas
          style={{ position: 'relative',height: "100%", width: "100%", overflow: 'hidden' }}
          eventSource={document.getElementById('root')}>
          <View.Port />
          <Preload all />
        </Canvas>
        </div>
    </div>
    
  </div>;
};

export default Home2;