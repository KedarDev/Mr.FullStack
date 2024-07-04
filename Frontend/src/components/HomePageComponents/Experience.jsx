import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { color, motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    className=" desktop:w-[50em] desktop:left-[-10.4em] laptop-l:text-[20px] desktop:text-[40px]"
    style={{ color: "#000",}}
    contentStyle={{ background: "#020202", color: "#FFF" }}
    contentArrowStyle={{ borderRight: "15px solid #000" }}
    date={experience.date}
    iconStyle={{ background: "#090909" }}
    icon={
      <div className=" flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className=" desktop:w-[40em] desktop:h-[10em] p-1 laptop-l:w-[300px] laptop-l:h-[100px] w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div className="p-5 desktop:w-[600px] desktop:h-[600px]">
      <h3 className=" mobile-s:text-[15px] mobile-s:ml-[-30px] mobile-s:w-[250px] p-5 desktop:text-[70px] laptop-l:text-[40px] desktop:mt-[-60px] laptop-l:mt-[-20px] text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="  text-white text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        <div className=" desktop:text-[50px] laptop-l:text-[30px]">
        {experience.company_name}
        </div>
      </p>
    </div>
    <ul className="mt-5 desktop:mt-[-10px] list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white desktop:ml-[20px] desktop:text-[50px] desktop:mt-[-220px] laptop-l:text-[22px] text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=" desktop:mt-[500px] laptop-l:mt-[200px]">
        <p className={`${styles.sectionSubText} desktop:text-[70px] laptop-l:text-[50px] dark:text-white `}>My Work So Far</p>
        <h2 className={`${styles.sectionHeadText} desktop:text-[100px] laptop-l:text-[70px] dark:text-white `}>Work Experience</h2>
      </motion.div>
      <div className=" desktop:ml-[20em] mt-20 flex flex-col">
        <VerticalTimeline lineColor="black"  className="desktop:w-full mobile-s:w-full  laptop-l:text-[40px]">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
