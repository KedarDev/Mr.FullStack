import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { Video, Video1, AIVideo3, arrow, AIVideo2 } from "../../../src/assets";
import { arrowDark } from "../../../src/assets";

import ReactVideoPlayer from "./ReactVideoPlayer";

const Hero = () => {
  return (
    <section 
    className="w-full h-screen mx-auto mt-5"
    // className="dark:2xl:ml-[-20px] 2xl:ml-[10px] 2xl:h-screen w-screen dark:md:ml-[-45px] dark:xs:ml-[-px]  sm:ml-[-24px] dark:bg-black mobile-s:w-screen sticky h-fit mx-auto"
    >
      <video
        className="block w-screen border-none pt-[130px]"
        // className="mobile-s:ml-[-10px] mobile-s:w-[320px]  block xl:ml-[10px]  dark:lg:ml-[38px] md:h-[1500px] lg:ml-[-12px]  md:ml-[-20px] dark:xs:ml-[px] dark:xs:w-screen xs:ml-[-12px]  dark:opacity-[90%] w-screen  xs:h-[800px] xs:w-fll h-[600px] border-none"
        controls
        autoPlay={"autoplay"}
        loop="true"
        muted="false"
        preload="auto"
        playsInline
      >
        <source
        className=""  
        // className="mobile-s:w-[320px]"
         src={AIVideo2} type="video/mp4" 
        />
      </video>
      <div
      className="" 
      // className="mobile-m:mt-[550px] tablet:mt-[950px] mobile-l:mt-[650px] mobile-s:mt-[550px] mobile-s:left-[-0px] mobile-m:ml-[-5px] mobile-l:ml-[-23px] absolute  w-full flex justify-center items-center"
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
                className="w-10 ml-[62px] mt-[-50px] "
                // className="dark:xs:mt-[90px] mobile-s:mt-[-460px] mobile-s:ml-[-1px]  xs:mt-[-580px] xs:ml-[20px]  2xl:h-[50px] 2xl:mt-[200px] dark:md:mt-[-10px] dark:md:ml-[-90px] md:mt-[10px] md:h-10 sm:mt-[50px] desktop:ml-[55px] laptop-l:mt-[100em] desktop:mt-[200em] desktop:w-fit laptop-l:w-full desktop:h-[80px] laptop-l:h-[60px] w-fit  shadow-2xl  drop-shadow-2xl h-[30px]"
              />
              <img
                src={arrow}
                alt=""
                className="hidden dark:block w-[12px] shadow-2xl drop-shadow-2xl h-[30px] ml-[75px]"
                // className="hidden xs:ml-[20px] dark:xs:mt-[-910px] dark:xs:ml-[30px] dark:lg:h-[50px] dark:lg:ml-[70px]  dark:block desktop:ml-[55px] mobile-s:ml-[25px] laptop-l:mt-[100em] desktop:mt-[200em] desktop:w-fit laptop-l:w-full desktop:h-[80px] laptop-l:h-[60px] w-[12px]  shadow-2xl  drop-shadow-2xl h-[30px]"
              />
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};
export default SectionWrapper(Hero, "hero");
