import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import CardCanvas from "./canvas/CardCanvas";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import WhiteArrow from "../assets/WhiteArrow.png";
import Callicon from "../assets/Callicon.png";
import HomeIndicator from "../assets/HomeIndicator.png";
import StatusBar from "../assets/StatusBar.png";
import { iPhone15ProMax } from "../assets";
import  stuff  from "../assets/stuff.png";
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
            className="w-[45%] ml-10 h-5 justify-center items-center content-center "
            src={WhiteArrow}
            alt="whitearrow"
          />
        </div>
      </motion>
      {/* <div className=" relative">
        <img className=" absolute w-screen  top-7" src={stuff} alt="" />
        <img className="absolute mx-auto justify-center content-center items-center h-screen" src={iPhone15ProMax} alt="" />
     
      </div> */}








      <div className="w-full h-screen bg-[url(C:\Users\kadar\Mr.FullStack\MrFullStack-Frontend\src\assets\iPhone15ProMax.png)]  mx-auto  justify-center items-center content-center bg-contain   bg-no-repeat my-3 overflow-hidden">
      <img className="h-auto max-w-[92%] mt-4 ml-[3%] justify-center content-center items-center" src={stuff} alt="" />
      <div className='main-container w-[1510px] h-[748.757px] bg-[url(../assets/images/9002d886-d00c-40ce-a3b4-ad55f40b9726.png)] bg-cover bg-no-repeat relative rotate-[-179.74deg] mx-auto my-0' />
        

        <div className="flex top-[20px] flex-row  overflow-hidden flex-wrap justify-center gap-10 ">
          <div className="flex justify-center items-center pt-40">
            {/* {technologies.map((technology) => (
              <div className="w-28  key={technology.name}">
                <CardCanvas icon={technology.icon} />
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
