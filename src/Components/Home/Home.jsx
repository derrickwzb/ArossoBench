// import { useMediaQuery } from "@mui/material";
import './Home.css'

import { useState, useRef } from 'react'
import { Canvas, addEffect } from '@react-three/fiber'
import { View ,Preload} from '@react-three/drei';
import { HomeView } from './HomeView';
import { Work } from './Work';

export function Home() {
  // Media queries for responsiveness
  // const isSmallScreen = useMediaQuery("(max-width: 600px)");
  // const isMediumScreen = useMediaQuery("(max-width: 900px)");
  return (
    <>
    <div
      id="content-container"
      style={{
        paddingTop: "23vh",
      }}
    >
      <div className="content-wrapper">
        <div className="flex">
          <div className="flex-wrapper first">
            {/* <h1>placeholder</h1> */}
          </div>
          <div className="flex-wrapper second">
            <h1 className="title">
              <div className="title-mask">
                <div className="word">AROSSOBENCH</div>
              </div>
            </h1>
            <div className="punchline mask">
              <p className="paragraph">come sit with us</p>
            </div>
            <div className="wrapper action-mask">
              <div className="action">
                <div className="mask">
                    placeholder for scroll cta image
                </div>
                <div>
                    scroll
                </div>
              </div>
            </div>
          </div>
          <div className="parallax-wrapper home-back">
              <View style={{ position: 'absolute', height: "100%",width: "100%"}}>
                <HomeView  />
              </View>
              </div>
        </div>
        <Canvas
          style={{ position: 'absolute', height: "100%",width: "100%",top: 0, bottom: 0, left: 0, right: 0, overflow: 'hidden' }}
          eventSource={document.getElementById('root')}>
          <View.Port />
          <Preload all />
        </Canvas>
      </div>
      
    </div>
    <Work/>
    </>
  );
}
