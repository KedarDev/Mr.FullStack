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
import { iPhone15ProMax, mrstackdown, mrstackup } from "../assets";
import stuff from "../assets/stuff.png";
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
      <div className="w-full h-screen bg-[url(C:\Users\kadar\Mr.FullStack\MrFullStack-Frontend\src\assets\iPhone15ProMax.png)]  mx-auto  justify-center items-center content-center bg-contain   bg-no-repeat my-3 overflow-hidden">
        <img
          className="h-auto max-w-[92%] mt-[4%] ml-[3%] justify-center content-center items-center"
          src={stuff}
          alt=""
        />
      <div className="Backgroundcard" style={{width: 223, height: 356,  position: 'absolute', background: 'linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%)', boxShadow: '4px 4px 4px ', borderRadius: 17, border: '3px black solid', filter: 'blur(1px)'}}>
          <img
            className="Mrstackup absolute mt-[-36%] ml-10 origin-top-left"
            src={mrstackup}
          />
          <img
            className="Mrstackdown absolute mt-[-10%] ml-20 pl-[10%] origin-bottom-right"
            src={mrstackdown}
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
