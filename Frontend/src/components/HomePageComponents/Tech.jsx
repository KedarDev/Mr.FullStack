import React from "react";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { styles } from "../../styles";
import WhiteArrow from "../../../src/assets/WhiteArrow.png";
import stuff from "../../../src/assets/stuff.png";
import CardCanvas from "./canvas/Card";
import { ImageLoader } from "three";

const Tech = (props) => {
  return (
    <>
      <motion className="relative  top-[120px]">
        <p className={`${styles.sectionSubText} desktop:text-[80px] laptop-l:text-[60px] laptop:text-[50px] tablet:text-[30px]`}>Full Stack</p>
        <div className="inline-flex  justify-center items-center">
          <h2 className={`${styles.sectionHeadText} desktop:text-[100px] laptop-l:text-[70px] text-[30px] laptop:text-[70px] tablet:text-[50px] pl- mx-auto`}>
            Technologies
          </h2>
          <img
            className=" desktop:ml-[10em]  desktop:w-[50em] desktop:h-10 laptop-l:h-7 laptop-l:ml-[80px] laptop-l:w-[600px] relative mobile-m:w-[40%] tablet:w-full 
            laptop:w-full mobile-m:h-3 tablet:ml-[30px] laptop:h-7 laptop:ml-[50px] mobile-l:h-3  mobile-s:w-[25%]  
            mobile-s:h-2 w-[45%] ml-2 h-5 justify-center items-center content-center "
            src={WhiteArrow}
            alt="whitearrow"
          />
        </div>
      </motion>
      <div className="iPhone15 desktop:w-[2560px] desktop:ml-[-24px] laptop-l:w-[1440px] laptop-l:ml-[-24px] laptop:w-[1024px] laptop:ml-[-18px] top-[150px] 
      mobile-l:w-[425px] tablet:w-[768px] mobile-m:w-[376px] mobile-l:ml-[-23px] tablet:ml-[-24px]   mobile-m:ml-[-25px] 
      mobile-s:w-[315px] mobile-s:ml-[-20px]  z-[0] p-3   relative h-screen bg-[url(C:\Users\kadar\Mr.FullStack\MrFullStack-Frontend\src\assets\iPhone15ProMax.png)] 
       mx-auto  justify-center  bg-contain   bg-no-repeat my-auto  overflow-hidden">
        <img
          className=" desktop:ml-[60px] desktop:w-[100%] tablet:w-[900px] mobile-m:mt-[-1px] relative object-center overflow-hidden z-0 flex h-auto max-w-[92%] 
          mt-[3%]  ml-3  justify-center content-center items-center"
          src={stuff}
          alt="iphoneicons"
        />
        <div className="relative shrink-0 z-50 gap-[200px] laptop:w-[98%] desktop:w-[97%] laptop:mt-[-350px] desktop:mt-[-880px] desktop:ml-[40px] laptop-l:mt-[-490px] laptop-l:ml-[20px] 
        laptop-l:w-[97%]  mobile-m:w-full mobile-m:h-[100px]  mobile-m:mt-[-120px] mobile-m:gap-[50px] mobile-l:gap-[30px] 
        laptop:gap-[100px]  tablet:gap-[100px] mobile-s:gap-[30px] w-full mt-[-300px] overflow-x-auto no-scrollbar flex 
        justify-start items-center content-center">
          {technologies.map((technology, index) => (
            <li className="relative flex text-[25px] shrink-0 over"  key={technology.name}>
              <img className="z-50  shrink-0 mobile-m:w-[100px] desktop:w-[600px] desktop:h-[]  laptop-l:w-[350px] mobile-s:w-[80px] mobile-l:w-[120px] 
              tablet:w-[190px] tablet:mt-[40px] mobile-l:mt-[150px] mobile-s:h-[80px]  mobile-s:mt-[195px]" src={technology.icon} alt="" />
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
