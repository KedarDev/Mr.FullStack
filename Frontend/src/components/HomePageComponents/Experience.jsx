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
    className=" mobile-s:w-[]  desktop:w-full laptop-l:text-[20px] desktop:text-[40px]"
    style={{ color: "#000" }}
    contentStyle={{ background: "#020202", color: "#FFF" }}
    contentArrowStyle={{ borderRight: "15px solid #000"}}
    // date={experience.date}
    iconStyle={{ background: "#090909" }}
    icon={
      <section className=" laptop:w-[120px] laptop:h-[90px] desktop:ml-[-30px] desktop:mt-[-16px] laptop:ml-[-41px] laptop:mt-[-24px] flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="  desktop:h-[10em] p-1 laptop-l:w-[300px] laptop-l:h-[100px] w-[60%] h-[60%] object-contain"
        />
      </section>
    }
  >
    <section
      className="p-5"
    >
      <h3
        className="font-bold w-full  laptop:text-[35px] text-[25px] p-5 mobile:text-[30px]"
      >
        {experience.title}
      </h3>
      <section
        className="  text-white text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        <section
          className="font-bold w-full text-[18px] ml-5 laptop:text-[25px] mobile:text-[25px]"
        >
          {experience.company_name}
        </section>
      </section>
    </section>
    <ul
      className="list-disc space-y-2  ml-8 mt-2"
    >
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className=" laptop:text-[20px] text-white text-[14px] pl-1 tracking-wider mobile:text-[20px]"
        >
          {point}
        </li>
      ))}
    </ul>
    <div className="mt-[20px] ml-8 text-[12px] font-bold laptop:text-[18px] mobile:text-[16px]">
      {experience.date}
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="mt-[400px] laptop:mt-[600px] w-full grid"
      >
        <p
          className={`${Styles.sectionSubText} mobile:text-[25px] laptop:text-[50px] `}
        >
          My Work So Far
        </p>
        <h2
          className={`${Styles.sectionHeadText} mobile:text-[35px] laptop:text-[70px] desktop:text-[100px] laptop-l:text-[70px] dark:text-white `}
        >
          Work Experience
        </h2>
      </motion.div>
      <div
      className="mt-20 flex flex-col"
      >
        <VerticalTimeline
          lineColor="#808080"
          className="2xl:ml-[100px] desktop:w-full mobile-s:w-full  laptop-l:text-[40px]"
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
