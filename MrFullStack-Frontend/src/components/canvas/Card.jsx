import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
import { mrstackdown } from "../../assets";
import { mrstackup } from "../../assets";
import { technologies } from "../../constants";


const Card = () => {
  return (
    <div
      className="Backgroundcard mx-auto py-auto mt-[-30%] ml-[4%] justify-center items-center content-center"
      style={{
        width: 140,
        height: 195,
        position: "absolute",
        background:
          "linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)",
        boxShadow: "1px 1px 1px ",
        borderRadius: 15,
        border: "2px black solid",
        filter: "blur(0.5px)",
        alignItems:"center",
        zIndex:"-1",
      }}
    >
      <div className="">
        <img
          className="Mrstackup absolute mx-auto h-5 w-5 mt-[3%] ml-[3%] origin-top-left"
          src={mrstackup}
        />
      
        <img
          className="Mrstackdown absolute mx-auto h-5 w-5 mt-[125%] ml-[82%]  origin-bottom-right"
          src={mrstackdown}
        />
      </div>
    </div>
  );
};

const CardCanvas = ({index, name, icon}) => {
  return (
    <div className=" absolute w-10 mt-[10%]">
      <Card>
        <h1 src={technologies.name}></h1>
        <img src={technologies.icon} alt="" />
      </Card>
    </div>
  );
};

export default CardCanvas;