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
    <Tilt className="xs:w-[250px] w-fit">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-[200px] mobile:w-[230px] desktop:ml-[40px]  grid  black-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <div className="w-[40px] desktop:ml-[50px] tablet:ml-5 h-[40px] justify-center place-content-center xs:ml-[-150px] ">
            <img
              className="fixed desktop:ml-[42px] desktop:mt-1 xs:relative w-[40px] xs:mt-[-20px] h-[40px] top-0 left-0 object-cover"
              alt="Mrstackup"
              src={mrstackup}
            />
          </div>
          <img
            src={icon}
            alt="web-development"
            className="desktop:w-[300px] desktop: laptop-l:w-40 laptop-l:h-40 w-30 h-30 object-contain"
          />

          <h3 className="desktop:text-[20px] text-white text-[20px] font-bold text-center">
            {title}
          </h3>
          <div className="xs:ml-[160px]  w-[40px] h-[40px]">
            <img
              className="w-[40px] xs:relative xs:mt-[20px]  fixed h-[40px] bottom-0 right-0 object-cover"
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
        className=" dark:laptop:mt-[1800px] dark:mobile:mt-[1400px] dark:mobile-s:mt-[1000px] dark:desktop:mt-[140em] grid grid-cols-1 w-full mobile:mt-[300px] laptop:mt-[160em] desktop:mt-[600px]"
      >
        <p
          className={`${Styles.sectionSubText} mobile:text-[25px] laptop:text-[50px] text-black dark:text-white md:text-[25px] xs:text-[25px] desktop:text-[70px]  laptop-l:text-[50px]   `}
        >
          Introduction
        </p>
        <h2
          className={`${Styles.sectionHeadText} mobile:text-[35px] laptop:text-[70px] text-black dark:text-white desktop:text-[100px]  laptop-l:text-[70px] `}
        >
          Overview.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" desktop:ml-[0px] laptop:text-center laptop:ml-[-20px] laptop:p-10 tablet:ml-[-12px] mobile:mt-[60px] mobile:text-[25px] mobile:ml-[0px] mobile-s:ml-[-10px] mobile-s:w-screen desktop:text-[30px]  laptop:mt-[200px] tablet:text-[20px] laptop:text-[28px]  grid text-center mt-10 leading-[30px] dark:text-white"
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
      className=" dark:wideScreen:ml-[200px] wideScreen:ml-[180px] dark:desktop:ml-[60px] dark:tablet:ml-[103px] laptop:gap-[20px] mobile:mt-[100px] dark:mobile:ml-[20px] mobile:ml-[14px] mobile-s:mt-[100px] mobile-s:ml-[12px] desktop:ml-[58px] laptop:mt-[200px] w-full tablet:w-fit tablet:ml-[110px] laptop:ml-[12px] dark:laptop:ml-[0px] grid tablet:grid-cols-2 laptop:grid-cols-4  items-center align-middle justify-center content-center place-content-center pt-40 gap-20 tablet:justify-center tablet:items-center "
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
