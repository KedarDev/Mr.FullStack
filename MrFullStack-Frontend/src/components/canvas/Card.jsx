import React, {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import { mrstackdown } from '../../assets';
import { mrstackup } from '../../assets';
import CanvasLoader from '../Loader';

const Card = (props) => {

  return (

    <div>
        CARDCANVAS
    </div>
  )
  
  
}

export default  Card;
//     <div
//     className="Backgroundcard mx-auto py-auto mt-[-30%] ml-[4%] justify-center items-center content-center"
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