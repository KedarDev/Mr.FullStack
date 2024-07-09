import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { Video, arrow } from "../../../src/assets";
import { arrowDark } from "../../../src/assets";

const Hero = () => {
  return (
    <section className="w-screen dark:md:ml-[-45px] dark:xs:ml-[-20px]  sm:ml-[-24px] dark:bg-black mobile-s:w-screen sticky h-fit mx-auto">
      <video
        className=" md:ml-[-20px] dark:xs:ml-[4px] dark:xs:w-[px]  dark:opacity-[90%] xs:ml-[-12px] w-screen md:h-[900px] xs:h-[1000px] h-[600px] border-none"
        controls
        muted
        // autoPlay={"autoplay"}
        loop
        preload="auto"
      >
        <source className="w-screen"  src={Video}   autoPlay type="video/mp4" />
      </video>

      <div className="mobile-m:mt-[550px] tablet:mt-[950px] mobile-l:mt-[650px] mobile-s:mt-[550px] mobile-s:left-[-0px] mobile-m:ml-[-5px] mobile-l:ml-[-23px] absolute  w-full flex justify-center items-center">
        <a href="#about">
          <div className=" mt-[80px] mobile-s:w-full  w-[90%] h-[64px] rounded-3xl  flex justify-center items-start p-2 ">
            <motion.dev
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
                className="dark:md:mt-[-10px] dark:md:ml-[-90px] md:mt-[10px] md:h-10 sm:mt-[50px] desktop:ml-[55px] laptop-l:mt-[100em] desktop:mt-[200em] desktop:w-fit laptop-l:w-full desktop:h-[80px] laptop-l:h-[60px] w-fit  shadow-2xl  drop-shadow-2xl h-[30px]"
              />
              <img
                src={arrow}
                alt=""
                className="hidden dark:block desktop:ml-[55px] mobile-s:ml-[25px] laptop-l:mt-[100em] desktop:mt-[200em] desktop:w-fit laptop-l:w-full desktop:h-[80px] laptop-l:h-[60px] w-[12px]  shadow-2xl  drop-shadow-2xl h-[30px]"
              />
            </motion.dev>
          </div>
        </a>
      </div>
    </section>
  );
};
export default SectionWrapper(Hero, "hero");
