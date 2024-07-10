import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
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
      <motion.div variants={textVariant()} className="w-full mt-[150px]  bg-white dark:bg-black mobile-s:text-center">
        <p
          className={`${styles.sectionSubText} text-black dark:text-white md:text-[25px] xs:text-[25px] desktop:text-[70px]  laptop-l:text-[50px]   `}
        >
          Introduction
        </p>
        <h2
          className={`${styles.sectionHeadText} text-black dark:text-white desktop:text-[100px]  laptop-l:text-[70px] `}
        >
          Overview.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" xl:p-[20px] lg:text-center lg:p-[5px] lg:ml-[-60px] lg:text-[30px] md:text-center md:ml-[-40px] md:text-[20px] xs:w-full xs:ml-[20px] xs:justify-center  sm:w-[120%] sm:ml-[10px] bg-white dark:bg-black sm:text-center dark:text-white  desktop:text-center desktop:ml-[0px] desktop:p-5 desktop:text-[70px] mobile-s:ml-[25px] mobile-m:ml-[20px] mt-4 desktop:w-[105%] laptop-l:text-[30px] desktop:leading-[100px] desktop:mt-[200px]  laptop-l:leading-[70px]  text-black text-[17px] max-w-3x1 leading-[30px] text-center"
      >
        Dear Hiring Manager, I'm excited to apply for the Full-Stack Developer
        position . My experience with both the back-end and front-end stacks, as
        well as my proficiency in Java , HTML, CSS, and JavaScript would be a
        great contribution to your team and company. I started as a self-taught
        WordPress Developer, I had the opportunity to work as the CTO for a
        Non-Profit startup The Kings & Queens Project. After a year with TKQP, I
        decided to expand my knowledge, I attend Robertson Collage to obtain my
        Full Stack Web Developer Diploma and graduated with honors. After
        graduation I was picked up by STEM Canada as a WordPress Developer
        Intern, & was recruited as a Jr Frontend React Developer by a startup
        call FutureCondos. While working with the FC team, I started developing
        from a WordPress Frontend developer, to a Full Stack Developer. Learning
        new frameworks, languages, implementing and deploying them with a sense
        of urgency. One of my strengths is i have a vast interest in Tech & I’m
        always looking at new ways on how i can add new tools, & methods.
        Recently I've graduated from Obisidi Academy Full Stack Bootcamp with
        98%.
      </motion.p>
      <div className=" 2xl:ml-[180px] xl:ml-[100px] lg:grid lg:grid-cols-4 lg:ml-[-6px] xs:ml-[0px] sm:ml-[84px] dark:bg-black bg-white desktop:w-full desktop:ml-[60px] desktop:mt-[300px] mobile-s:ml-[25px] mobile-m:ml-[15px] mobile-l:ml-[15px]  laptop-l:mt-[180px] mt-20 flex flex-wrap gap-10 tablet:gap-3 justify-center ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
