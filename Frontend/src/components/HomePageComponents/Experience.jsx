import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { Styles } from "../../Styles";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/Motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    className="  desktop:w-[50em] desktop:left-[-10.4em] laptop-l:text-[20px] desktop:text-[40px]"
    style={{ color: "#000" }}
    contentStyle={{ background: "#020202", color: "#FFF" }}
    contentArrowStyle={{ borderRight: "15px solid #000" }}
    // date={experience.date}
    iconStyle={{ background: "#090909" }}
    icon={
      <section className=" flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className=" desktop:w-[40em] desktop:h-[10em] p-1 laptop-l:w-[300px] laptop-l:h-[100px] w-[60%] h-[60%] object-contain"
        />
      </section>
    }
  >
    <section
      className=""
      //  className="p-5 desktop:w-[600px] desktop:h-[600px]"
    >
      <h3
        className="font-bold w-full text-[25px] p-5"
        // className=" mobile-s:text-[15px] mobile-s:ml-[-30px] mobile-s:w-[250px] p-5 desktop:text-[70px] laptop-l:text-[40px] desktop:mt-[-60px] laptop-l:mt-[-20px] text-white text-[24px] font-bold"
      >
        {experience.title}
      </h3>
      <section
        className="  text-white text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        <section
          className="font-bold w-full text-[18px] ml-5"
          // className=" desktop:text-[50px] laptop-l:text-[30px]"
        >
          {experience.company_name}
        </section>
      </section>
    </section>
    <ul
      className="list-disc space-y-2  ml-8 mt-2"
      // className="mt-5 desktop:mt-[-10px] list-disc ml-5 space-y-2"
    >
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white desktop:ml-[20px] desktop:text-[50px] desktop:mt-[-220px] laptop-l:text-[22px] text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
    <div className="mt-[20px] ml-8 text-[12px] font-bold">
      {experience.date}
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="mt-[400px]"
        // className=" dark:xs:mt-[300px] xs:mt-[300px]  desktop:mt-[500px] laptop-l:mt-[200px]"
      >
        <p
          className={`${Styles.sectionSubText}  `}
          // className={`${Styles.sectionSubText} md:text-[25px] xs:text-[25px] desktop:text-[70px] laptop-l:text-[50px] dark:text-white `}
        >
          My Work So Far
        </p>
        <h2
          className={`${Styles.sectionHeadText} desktop:text-[100px] laptop-l:text-[70px] dark:text-white `}
        >
          Work Experience
        </h2>
      </motion.div>
      <div className=" xs:mt-[200px] xl:ml-[150px] desktop:ml-[20em] mt-20 flex flex-col">
        <VerticalTimeline
          lineColor="black"
          className=" 2xl:ml-[100px] desktop:w-full mobile-s:w-full  laptop-l:text-[40px]"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
