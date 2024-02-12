import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import WhiteArrow from "../assets/WhiteArrow.png";
import stuff from "../assets/stuff.png";
import CardCanvas from "./canvas/Card";
const Tech = () => {
  return (
    <>
      <motion className="">
        <p className={styles.sectionSubText}>Full Stack</p>
        <div className="inline-flex justify-center items-center">
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
      <div className="iPhone15 relative  overflow-x-auto h-screen  bg-[url(C:\Users\kadar\Mr.FullStack\MrFullStack-Frontend\src\assets\iPhone15ProMax.png)]  mx-auto  justify-center  bg-contain   bg-no-repeat my-3 overflow-hidden">
        <img
          className="object-center flex h-auto max-w-[92%] mt-[4%] ml-[3%] justify-center content-center items-center"
          src={stuff}
          alt="iphoneicons"
        />
        <div className=" relative flex justify-center items-center content-center gap-[10%]">
          {technologies.map((technology) => (
          <div className=" flex mt-[-87%] pl-[10px]  justify-center  align-middle gap-10 p-5 m-10" key={technology.name}>
              <CardCanvas key={technology.name} index={technology.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
