import React from "react";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { styles } from "../../styles";
import { WhiteArrow } from "../../assets";
import stuff from "../../../src/assets/stuff.png";
import CardCanvas from "./canvas/Card";
import { ImageLoader } from "three";
import { arrowDark } from "../../assets";

const Tech = (props) => {
  return (
    <div className="dark:bg-black w-full xs:h-[700px]">
      <motion className="relative desktop-s:top-[500px] laptop:top-[150px] top-[120px]">
        <p
          className={`${styles.sectionSubText} md:text-[25px] dark:text-white xs:text-[25px] desktop:text-[80px] laptop-l:text-[60px] laptop:text-[50px] tablet:text-[30px]`}
        >
          Full Stack
        </p>
        <div className="relative selection:inline-flex  justify-center items-center">
          <h2
            className={`${styles.sectionHeadText} xs:w-full sm:text-[45px]  dark:text-white desktop:text-[100px] laptop-l:text-[70px] text-[30px] laptop:text-[70px] tablet:text-[50px]  mx-auto`}
          >
            Technologies
          </h2>
          <img
            className="dark:lg:h-[20px] dark:md:ml-[500px] dark:md:h-4 dark:md:mt-[-50px] dark:xs:ml-[310px] dark:xs:w-[120px] dark:xs:mt-[-30px] dark:xs:h-3  dark:block sm:hidden sm:w-[60px] sm:h-[8px]  desktop:ml-[10em]  desktop:w-[50em] desktop:h-10 laptop-l:h-7 laptop-l:ml-[80px] laptop-l:w-[600px] relative mobile-m:w-[40%] tablet:w-full 
            laptop:w-full mobile-m:h-3 tablet:ml-[30px] laptop:h-7 laptop:ml-[50px] mobile-l:h-3  mobile-s:w-[25%]  
            mobile-s:h-2 w-[45%] ml-2 h-5 justify-center items-center content-center "
            src={WhiteArrow}
            alt="whitearrow"
          />
          <img
            className="md:ml-[500px] dark:hidden rotate-[270deg] xs:ml-[330px] xs:mt-[-110px] ml-[10px] w-[100px] h-[130px]"
            src={arrowDark}
            alt="darkarrow"
          />
        </div>
      </motion>
      <div
        className="bg-iPhoneProMax lg:w-[1024px] lg:ml-[-35px] md:w-[800px] xs:w-screen xs:ml-[-10px] sm:w-[460px] sm:ml-[-60px] desktop-s:top-[600px] desktop-s:w-[1900px] desktop-s:ml-[50px]  laptop:top-[200px] laptop:h-[800px]  desktop:w-[2600px] laptop-l:w-[1440px] laptop-l:ml-[-24px] laptop:w-[1035px] laptop:ml-[-18px]  top-[150px] 
      mobile-l:w-[425px] tablet:w-[785px] mobile-m:w-[394px] mobile-l:ml-[-23px] tablet:ml-[-20px]   mobile-m:ml-[-25px] 
      mobile-s:w-[340px] mobile-s:ml-[-20px]  z-[0] p-3   relative h-screen  
       mx-auto  justify-center  bg-contain   bg-no-repeat my-auto  overflow-hidden"
      >
        <img
          className=" desktop-s:w-[150%] desktop-s:ml-[50px] desktop:ml-[60px] desktop:w-[100%] tablet:w-[900px] mobile-m:mt-[-1px] relative object-center overflow-hidden z-0 flex h-auto max-w-[92%] 
          mt-[3%]  ml-3  justify-center content-center items-center"
          src={stuff}
          alt="iphoneicons"
        />
        <div
          className="desktop-s:mt-[-580px] xs:gap-[30px] laptop:ml-[10px] tablet:w-[94%] tablet:ml-[6px] relative shrink-0 z-50 sm:gap-[50px] gap-[200px] laptop:w-[93%] desktop:w-[97%] laptop:mt-[-340px] desktop:mt-[-880px] desktop:ml-[40px] laptop-l:mt-[-490px] laptop-l:ml-[20px] 
        laptop-l:w-[97%]  mobile-m:w-full mobile-m:h-[100px]  mobile-m:mt-[-120px] mobile-m:gap-[50px] mobile-l:gap-[30px] 
        laptop:gap-[100px]  tablet:gap-[100px] mobile-s:gap-[30px] w-full mt-[-300px] overflow-x-auto no-scrollbar flex 
        justify-start items-center content-center"
        >
          {technologies.map((technology, index) => (
            <li
              className="mobile-s:mt-[-5px] relative flex text-[25px] shrink-0 over"
              key={technology.name}
            >
              <img
                className=" lg:w-[220px] lg:h-[220px] lg:mt-[-2px]   md:w-[200px] md:h-[200px] md:mt-[30px]  xs:w-[150px] xs:h-[150px] xs:mt-[130px] sm:w-[120px] sm:h-[120px] sm:mt-[150px]  shrink-0 mobile-m:w-[100px] desktop:w-[600px] desktop:h-[]  laptop-l:w-[350px] mobile-s:w-[80px] mobile-l:w-[120px] 
              tablet:w-[190px] tablet:mt-[40px] mobile-l:mt-[150px] mobile-s:h-[80px]  mobile-s:mt-[195px]"
                src={technology.icon}
                alt=""
              />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
