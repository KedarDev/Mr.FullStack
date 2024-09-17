import React from "react";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { Styles } from "../../Styles";
import { WhiteArrow } from "../../assets";
import stuff from "../../../src/assets/stuff.png";
import { arrowDark } from "../../assets";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div className="dark:bg-black mobile-s:mt-[-2px] desktop:mt-[800px] laptop:mt-[500px] w-full xs:h-[700px] mt-[300px] mx-auto">
      <motion.div className="relative  dark:xs:mt-[300px] desktop-s:top-[500px] laptop:top-[150px] top-[120px]">
        <p
          className={`${Styles.sectionSubText} mobile:text-[25px] md:text-[25px] dark:text-white xs:text-[25px] desktop:text-[80px] laptop-l:text-[60px] laptop:text-[50px] tablet:text-[30px]`}
        >
          Full Stack
        </p>
        <div className="relative selection:inline-flex justify-center items-center">
          <h2
            className={`${Styles.sectionHeadText} mobile:text-[35px] sm:text-[45px]  dark:text-white desktop:text-[100px] laptop-l:text-[70px] text-[30px] laptop:text-[70px] tablet:text-[50px]  mx-auto`}
          >
            Technologies
          </h2>
          <img
          className=" dark:desktop:w-[300px] dark:desktop:ml-[800px] dark:desktop:mt-[-80px] dark:tablet:ml-[400px] dark:mobile:w-[200px] dark:mobile:ml-[320px] dark:mobile:mt-[-36px] dark:mobile:h-[20px]  hidden dark:block relative laptop:w-[250px] laptop:h-[25px] dark:laptop:ml-[600px] dark:laptop:mt-[-60px] dark:mobile-s:ml-[230px] dark:mobile-s:h-[12px] dark:mobile-s:w-[80px] w-[150px] tablet:mt-[-40px] ml-[22em] tablet:ml-[28em] h-[12px] mt-[-25px] "

            src={WhiteArrow}
            alt="whitearrow"
          />
          <img
          className=" wideScreen:w-[200px] wideScreen:mt-[-170px] mobile:ml-[-200px] mobile:w-[120px] mobile:mt-[-80px] mobile-s:w-[50px] mobile-s:mt-[-46px] dark:hidden rotate-[270deg] laptop:right-56 absolute mobile:right-36 right-0 mt-[-55px] desktop:mt-[-150px]  w-[100px] tablet:w-[120px] laptop:w-[150px] laptop:mt-[-120px] tablet:ml-[460px] tablet:mt-[-80px]"
            src={arrowDark}
            alt="darkarrow"
          />
        </div>
      </motion.div>

      <div
        className=" bg-iPhoneProMax dark:desktop:w-screen dark:laptop:w-[980px] dark:laptop:ml-[6px] tablet:ml-[-12px] mobile:ml-[-4px] mobile-s:w-screen mobile-s:ml-[-14px] desktop:mt-[100px] dark:laptop:mt-[120px] dark:mt-[50px] top-[150px] z-[0] p-3 relative h-screen mx-auto  justify-center  bg-contain   bg-no-repeat my-auto  overflow-hidden"

      >
        <img
          className="relative desktop:h-fit object-center overflow-hidden z-0 flex h-auto max-w-[92%] 
          mt-[3%]  ml-3  justify-center content-center items-center"
          src={stuff}
          alt="iphoneicons"
        />
        <div
          className="relative desktop:h-[700px] tablet:mt-[-320px]  shrink-0 z-50 mobile-s:gap-[50px]  gap-[100px] w-full mt-[-300px] overflow-x-auto no-scrollbar flex  
        justify-start items-center content-center"
        >
          {technologies.map((technology) => (
            <li
              className="mobile-s:mt-[-5px] relative flex text-[25px] shrink-0 over"
              key={technology.name}
            >
              <img
                className="relative wideScreen:h-fit justify-center grid mobile:w-[200px] mobile:h-[200px] mobile:mt-[80px] mobile-s:mt-[190px] mobile-s:w-[100px] mobile-s:h-[100px]  desktop:w-[280px] desktop:h-[260px] desktop:mt-[-350px] w-[160px] laptop:w-[200px] laptop:mt-10  mt-24 mx-auto"
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
