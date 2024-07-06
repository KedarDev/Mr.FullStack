import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import Computers from "./canvas/Computers";
import { SectionWrapper } from "../../hoc";
import { Video, arrow } from "../../../src/assets";
import { arrowDark } from "../../../src/assets";

const Hero = () => {
  return (
    <section className="dark:bg-black mobile-s:w-screen sticky w-full h-screen mx-auto">
      {/* <div
        className={`${styles.paddingX} mobile-s:w-screen dark:bg-black absolute top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className=" flex flex-col justify-center items-center mt-5">
          <div className=" mobile-s:w-fit w-5 h-5 rounded-full bg-black dark:bg-black" />
          <div className=" w-1 sm:h-80 h-40 black-gradient " />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-black dark:text-white`}>
            Hi, I'm <span className=" dark:text-white text-black">MrFullStack</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black dark:text-white`}>
            I Develop FullStack Applications, <br className="sm:block hidden" />
            I can create anything!
          </p>
        </div>
      </div> */}
      <video
        class="w-full border-none"
        controls=""
        autoPlay={"autoplay"}
        muted
        loop
        preLoad="auto"
      >
        <source src={Video}   autoPlay type="video/mp4" />
      </video>

      <div className="   mobile-m:mt-[550px] tablet:mt-[950px] mobile-l:mt-[650px] mobile-s:mt-[550px] mobile-s:left-[-0px] mobile-m:ml-[-5px] mobile-l:ml-[-23px] absolute  w-full flex justify-center items-center">
        <a href="#about" className="">
          <div className=" mobile-s:w-full  w-[90%] h-[64px] rounded-3xl  flex justify-center items-start p-2 ">
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
                className="desktop:ml-[55px] laptop-l:mt-[100em] desktop:mt-[200em] desktop:w-fit laptop-l:w-full desktop:h-[80px] laptop-l:h-[60px] w-fit  shadow-2xl  drop-shadow-2xl h-[30px]"
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
