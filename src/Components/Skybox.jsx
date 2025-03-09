import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

export default function Skybox(){
    const {scene } = useThree();

    useEffect(() => {
        const loader = new THREE.CubeTextureLoader();
        // const texture = loader.load([
        //   "./Cubemap/right.png",  // +X
        //   "./Cubemap/left.png",   // -X
        //   "./Cubemap/top.png",    // +Y
        //   "./Cubemap/bot.png", // -Y
        //   "./Cubemap/front.png",  // +Z
        //   "./Cubemap/back.png"    // -Z
        // ]);
        const texture = loader.load([
          "./Cubemap/clouds/front.jpg",  // +X
          "./Cubemap/clouds/back.jpg",   // -X
          "./Cubemap/clouds/up.jpg",    // +Y
          "./Cubemap/clouds/down.jpg", // -Y
          "./Cubemap/clouds/right.jpg",  // +Z
          "./Cubemap/clouds/left.jpg"    // -Z
        ]);
        scene.background = texture;
      }, [scene]);
    
    return null;
}