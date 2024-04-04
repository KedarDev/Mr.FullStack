import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import WhiteArrow from "../assets/WhiteArrow.png";
import stuff from "../assets/stuff.png";
import CardCanvas from "./canvas/Card";
import { ImageLoader } from "three";

const Tech = (props) => {
  // console.log(technologies);
  return (
    <>
      <motion className="">
        <p className={styles.sectionSubText}>Full Stack</p>
        <div className="inline-flex  justify-center items-center">
          <h2 className={`${styles.sectionHeadText} pl-10 mx-auto`}>
            Technologies
          </h2>
          <img
            className=" relative w-[45%] ml-10 h-5 justify-center items-center content-center "
            src={WhiteArrow}
            alt="whitearrow"
          />
        </div>
      </motion>
      <div className="iPhone15  z-[0] p-3  relative h-screen bg-[url(C:\Users\kadar\Mr.FullStack\MrFullStack-Frontend\src\assets\iPhone15ProMax.png)]  mx-auto  justify-center  bg-contain   bg-no-repeat my-auto  overflow-hidden">
        <img
          className=" relative object-center overflow-hidden z-1 flex h-auto max-w-[92%] mt-[3%]  ml-3  justify-center content-center items-center"
          src={stuff}
          alt="iphoneicons"
        />
        <div className="relative shrink-0 z-50 gap-[200px] w-full mt-[-300px] overflow-x-auto no-scrollbar flex justify-start items-center content-center">
          {technologies.map((technology, index) => (
            <li className="relative flex text-[25px] shrink-0 over"  key={technology.name}>
              <img className="z-50 shrink-0" src={technology.icon} alt="" />
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
