import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { HeroDisplay } from "../../assets/WebsiteAssets2";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { N8AO } from "@react-three/postprocessing";

const RightPart = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={2} />
        {/* <pointLight  position={[10, 10, 1]} /> */}
        <spotLight position={[25, 20, 10]} />
        <HeroDisplay />
        <PerspectiveCamera makeDefault position={[12, 2, 22]} />
        <OrbitControls
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
          enableDamping={true}
          enablePan={false}
          maxZoom={0}
        />
        <EffectComposer smaa>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            height={300}
            intensity={0.5}
          />
          {/* <NormalPass attachArray="passes" /> */}
          <N8AO />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default RightPart;
