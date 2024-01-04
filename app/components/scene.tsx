import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Environment, ScrollControls, useScroll } from "@react-three/drei";

export default function Wanderers() {
    return (
        <Canvas style={{width: "100vw", height: "100vh"}} camera={{ position: [10, 10, 10] }}>
            <Environment background blur={1} files={"lake_pier_1k.hdr"} />
            <ScrollControls pages={3} damping={0.1}>
                <SceneLoader />
            </ScrollControls>
        </Canvas>
    ); 
}

function SceneLoader() {
    const obj = useLoader(GLTFLoader, "./wanderers.glb");

    const scrollData = useScroll();

    return (
        <mesh>
            <primitive object={obj.scene} />
        </mesh>
    );
}