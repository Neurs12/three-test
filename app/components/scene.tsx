import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Environment, MeshReflectorMaterial, MotionPathControls, ScrollControls, Text, useMotion, useScroll } from "@react-three/drei";
import { waitSuspense } from "./loading";

export default function Wanderers() {
    return (
        <>
            <Canvas style={{width: "100vw", height: "100vh", position: "absolute"}} onLoad={() => waitSuspense.set(true)}>
                <Environment background blur={1} files={"lake_pier_1k.hdr"} />
                <ScrollControls pages={3}>
                    <SceneLoader />
                    <mesh rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[50, 50]} />
                        <MeshReflectorMaterial
                            blur={[400, 300]}
                            resolution={2048}
                            mirror={1}
                            mixBlur={2}
                            mixStrength={80}
                            roughness={4}
                            depthScale={4}
                            minDepthThreshold={.5}
                            maxDepthThreshold={1.8}
                            color="#011a19"
                        />
                    </mesh>
                    <MotionPathControls>
                        <cubicBezierCurve3 v0={[6, 1.6, 13.1]} v1={[6, 3, 13.1]} v2={[6, 3.5, 0]} v3={[6, 4, 0]} />
                        <ScrollPath />
                    </MotionPathControls>
                </ScrollControls>
            </Canvas>
        </>
    );
}

function ScrollPath() {
    const factor = 0.2;
    const motionData = useMotion();
    const scrollData = useScroll();
    useFrame((state, delta) => {
        const rX = (scrollData.offset * Math.PI) - (Math.PI / 2);
        if (scrollData.offset < 1) {
            motionData.current = scrollData.offset;
        }
        
        if (scrollData.offset < .5) {
            state.camera.rotation.set(rX, 0, 0);
        }

    });

    return <></>;
}

function SceneLoader() {
    const factor = 0.2;
    const obj = useLoader(GLTFLoader, "./wanderers.glb");

    return (
        <mesh>
            <primitive object={obj.scene} />
            <Text
                scale={2}
                rotation={[0, 0, 0]}
                position={[7, 5, -12]}
                color="white"
                font="./Kontanter-Bold.otf"
            >
                aUTH PRojEcT
            </Text>
            <Text
                scale={.8}
                rotation={[0, 0, 0]}
                position={[7, 3.5, -12]}
                color="white"
                font="./Kontanter-Bold.otf"
                onPointerEnter={() => document.body.style.cursor = "pointer"}
                onPointerLeave={() => document.body.style.cursor = "auto"}
                onClick={() => openNewTab("https://github.com/Neurs12")}
            >
                NEUrS - gITHUB
            </Text>
        </mesh>
    );
}

function openNewTab(url: string) {
    const tav = document.createElement("a");
    tav.href= url;
    tav.target= "_blank";
    tav.click();
    tav.remove();
}