import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Card from "./canvas/Card";
import { styles } from "../styles";
import WhiteArrow from "../assets/WhiteArrow.png";
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
      <div className="iPhone15 w-full h-screen bg-[url(C:\Users\kadar\Mr.FullStack\MrFullStack-Frontend\src\assets\iPhone15ProMax.png)]  mx-auto  justify-center items-center content-center bg-contain   bg-no-repeat my-3 overflow-hidden">
        <img
          className="h-auto max-w-[92%] mt-[4%] ml-[3%] justify-center content-center items-center"
          src={stuff}
          alt="iphoneicons"
        />
                    <div className="flex justify-center items-center content-center gap-[5%]">
              {technologies.map((technology, index) => (
             <div className="w-full  h-2 mt-[-20%]" key={technology.name}>
              <Card icon={technology.icon} />
             </div>
              ))}
            </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
