import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { mrstackdown } from "../../assets";
import { mrstackup } from "../../assets";
import CanvasLoader from "../Loader";

const Card = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh castShadow receiveShadow scale={4.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const CardCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Card imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CardCanvas;
//     <div className="Backgroundcard mx-auto py-auto mt-[-30%] ml-[4%] justify-center items-center content-center"
//     style={{
//       width: 120,
//       height: 175,
//       position: "absolute",
//       background:
//         "linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)",
//       boxShadow: "1px 1px 1px ",
//       borderRadius: 15,
//       border: "2px black solid",
//       filter: "blur(0.5px)",
//     }}
//   >
//     <div className="">
//       <img
//         className="Mrstackup absolute mx-auto h-5 w-5 mt-[3%] ml-[3%] origin-top-left"
//         src={mrstackup}
//       />
//       <img
//         className="Mrstackdown absolute mx-auto h-5 w-5 mt-[130%] ml-[80%]  origin-bottom-right"
//         src={mrstackdown}
//       />
//     </div>
//   </div>
