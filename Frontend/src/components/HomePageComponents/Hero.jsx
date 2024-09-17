import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import {  arrow, AIVideo2 } from "../../../src/assets";
import { arrowDark } from "../../../src/assets";


const Hero = () => {
  return (
    <section 
    className="mobile:ml-[1px] mobile-s:w-screen dark:mobile:ml-[2px] dark:mobile:h-screen  mobile-s:h-screen mobile-s:justify-center mobile-s:ml-[-12.5px] desktop:w-screen dark:laptop:ml-[0px] w-full h-screen mx-auto mt-5 laptop:w-full laptop:mt-[200px]"
    >
      <video
        className=" wideScreen:mt-[-260px]  dark:desktop:mt-[-200px] desktop:ml-[-12px]  desktop:mt-[-200px] block dark:laptop:mt-[-100px] dark:laptop:ml-[2px] laptop:ml-[8px] tablet:ml-[-13px] dark:mobile:h-auto mobile:ml-[-6px] mobile:mt-[200px]  w-screen border-none pt-[130px] desktop:pt-[0px]"
        controls
        autoPlay={"autoplay"}
        loop="true"
        muted="false"
        preload="auto"
        playsInline
      >
        <source
        className=""  
         src={AIVideo2} type="video/mp4" 
        />
      </video>
      <div
      className="" 
      >
        <a href="#about">
          <div className=" mt-[80px] mobile-s:w-full  w-[90%] h-[64px] rounded-3xl  flex justify-center items-start p-2 ">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <img
                src={arrowDark} 
                alt=""
                className=" wideScreen:ml-[-12px]  wideScreen:mt-[-20px]   laptop:ml-[16px] mobile-s:mt-[500px] tablet:mt-[340px] tablet:ml-[-12px]  mobile:h-[80px] mobile:w-fit   mobile-s:ml-[-2px]  w-10 ml-[62px] mt-[-50px] desktop:mt-[0px] desktop:ml-[-1px] laptop:w-16 laptop:h-[80px] laptop:mt-[135px] "
              />
              <img
                src={arrow}
                alt=""
                className=" dark:desktop:mt-[-60px] dark:desktop:ml-[20px] dark:laptop:mt-[-20px] dark:laptop:ml-[30px] dark:tablet:ml-[-0px] mobile:h-[80px] mobile:w-fit dark:mobile:mt-[-80px] dark:mobile:ml-[16px]  mobile-s:ml-[16px] mobile-s:mt-[-30px] laptop:h-16 laptop:w-[25px] laptop:ml-[116px] laptop:mt-[-80px] hidden dark:block w-[12px] shadow-2xl drop-shadow-2xl h-[30px] ml-[75px]"
              />
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};
export default SectionWrapper(Hero, "hero");
