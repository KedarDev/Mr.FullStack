import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";


const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[25px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-[40%]  p-[1px] rounded-[25px] shadow-card">
        <div
          
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="black-gradient rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} 
            className="w-30 h-30 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
    </motion.div>
  </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div 
      variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRODUCTION</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p className=" mt-4 text-[17px] text-[#fff] text-center  p-2 leading-[30px]" variants={fadeIn("", "", 0.1, 0,1)}>
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
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}  />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper (About, "about")

