import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

export default function Skybox(){
    const {scene } = useThree();

    useEffect(() => {
        const loader = new THREE.CubeTextureLoader();
        const texture = loader.load([
          "./Cubemap/right.png",  // +X
          "./Cubemap/left.png",   // -X
          "./Cubemap/top.png",    // +Y
          "./Cubemap/bot.png", // -Y
          "./Cubemap/front.png",  // +Z
          "./Cubemap/back.png"    // -Z
        ]);
        scene.background = texture;
      }, [scene]);
    
    return null;
}