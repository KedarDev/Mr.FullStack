import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Styles } from "../../Styles";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/Motion";
import mrstackup from "../../../src/assets/mrstackup.png";
import mrstackdown from "../../../src/assets/mrstackdown.png";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className=" xs:w-[250px] w-fit">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="xs:ml-[40px] desktop:w-[500px] desktop:h-[500px] laptop-l:w-[300px] laptop-l:h-[350px] tablet:w-[170px] w-[200px]  mobile-s:w-[160px] black-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="mobile-s:w- rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <div className="w-[40px] h-[40px] xs:ml-[-150px] ">
            <img
              className="fixed x xs:relative w-[40px] xs:mt-[-20px] h-[40px] top-0 left-0 object-cover"
              alt="Mrstackdown"
              src={mrstackup}
            />
          </div>
          <img
            src={icon}
            alt="web-development"
            className="  desktop:mt-[40px] desktop:w-60 desktop:h-60 laptop-l:w-40 laptop-l:h-40 w-30 h-30 object-contain"
          />

          <h3 className="desktop:text-[40px] text-white text-[20px] font-bold text-center">
            {title}
          </h3>
          <div className="xs:ml-[160px]  w-[40px] h-[40px]">
            <img
              className="w-[40px] xs:relative xs:mt-[20px]  fixed h-[40px] bottom-0 right-0 bject-cover"
              alt="Mrstackdown"
              src={mrstackdown}
            />
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="grid grid-cols-1 w-full"
        // className="w-full mt-[150px]  dark:xs:mt-[500px] xs:mt-[500px]  bg-white dark:bg-black mobile-s:text-center"
      >
        <p
          className={`${Styles.sectionSubText} text-black dark:text-white md:text-[25px] xs:text-[25px] desktop:text-[70px]  laptop-l:text-[50px]   `}
        >
          Introduction
        </p>
        <h2
          className={`${Styles.sectionHeadText} text-black dark:text-white desktop:text-[100px]  laptop-l:text-[70px] `}
        >
          Overview.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="grid text-center mt-10 leading-[30px] dark:text-white"
        // className=" dark:xs:mt-[100px] xs:mt-[100px] xl:p-[20px] lg:text-center lg:p-[5px] lg:ml-[-60px] lg:text-[30px] md:text-center md:ml-[-40px] md:text-[20px] xs:w-full xs:ml-[20px] xs:justify-center  sm:w-[120%] sm:ml-[10px] bg-white dark:bg-black sm:text-center dark:text-white  desktop:text-center desktop:ml-[0px] desktop:p-5 desktop:text-[70px] mobile-s:ml-[25px] mobile-m:ml-[20px] mt-4 desktop:w-[105%] laptop-l:text-[30px] desktop:leading-[100px] desktop:mt-[200px]  laptop-l:leading-[70px]  text-black text-[17px] max-w-3x1 leading-[30px] text-center"
      >
        As a seasoned Full Stack Developer, I bring a wealth of experience and
        expertise in crafting robust and scalable applications from design to
        implementation. My technical toolkit includes modern frontend
        technologies & languages such as JSX, JavaScript, React, and Vite, ensuring dynamic
        and responsive user interfaces. On the backend, I leverage the power of
        Spring Boot, Maven, and Java, coupled with PostgreSQL and JPA for
        efficient database management. My design skills are honed using Figma,
        allowing me to create intuitive and visually appealing user experiences.
        With a proven track record at industry giants like Walmart, Apple, and
        Facebook, I am adept at delivering comprehensive solutions that meet
        diverse business needs.
      </motion.p>
      <div 
      className=" w-full grid justify-center content-center place-content-center pt-40 gap-20 "
      // className=" dark:xs:mt-[150px] xs:mt-[150px] 2xl:ml-[180px] xl:ml-[100px] lg:grid lg:grid-cols-4 lg:ml-[-6px] xs:ml-[0px] sm:ml-[84px] dark:bg-black bg-white desktop:w-full desktop:ml-[60px] desktop:mt-[300px] mobile-s:ml-[25px] mobile-m:ml-[15px] mobile-l:ml-[15px]  laptop-l:mt-[180px] mt-20 flex flex-wrap gap-10 tablet:gap-3 justify-center "
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
