import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import WhiteArrow from "../assets/WhiteArrow.png";
import iPadStatusbar from "../assets/ipadStatusbar.png";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { githublogo } from "../assets";

const Works = () => {
  const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_links,
    liveSiteButton,
  }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 0.8,
            speed: 450,
          }}
          className="relative left-[20px] mt-[-400px] object-contain flex-wrap  bg-white rounded-2xl sm:w-[230px] sm:h-[200px]"
        >
          <div className="relative w-full h-[180px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-fit rounded-2xl "
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_links, "_blank")}
                className="black-gradient w-10 h-10 rounded-full justify-center items-center cursor-pointer"
              >
                <img
                  src={githublogo}
                  alt="gitlogo"
                  className="w-full object-contain"
                />
              </div>
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open(liveSiteButton, "_blank")}
                  className="absolute black-gradient w-10 h-10 rounded-full justify-center items-center cursor-pointer left-0"
                >
                  <button>Enter</button>
                </div>
              </div>
            </div>
            <div className="mt-5 ">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-white text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-1">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[12px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </Tilt>
      </motion.div>
    );
  };

  return (
    <>
      <motion.div className="w-full">
        <p className={styles.sectionSubText}>Github Repo</p>
        <div className="inline-flex   justify-center items-center">
          <h2
            className={`${styles.sectionHeadText}  w-full p-5 inline-flex grid-flex-col pl-10 mx-auto`}
          >
            Enter Website
          </h2>

          <img
            className=" relative w-[45%] ml-10 h-5 justify-center items-center content-center "
            src={WhiteArrow}
            alt="whitearrow"
          />
        </div>
        <motion
          variants={fadeIn("", "", 0.1, 1)}
          className=" text-white text-[17px] max-w-3x1 leading-[30px]"
        >
          Dear Hiring Manager, I'm excited to apply for the Full-Stack Developer
          position . My experience with both the back-end and front-end stacks,
          as well as my proficiency in Java , HTML, CSS, and JavaScript would be
          a great contribution to your team and company. I started as a
          self-taught WordPress Developer, I had the opportunity to work as the
          CTO for a Non-Profit startup The Kings & Queens Project. After a year
          with TKQP, I decided to expand my knowledge, I attend Robertson
          Collage to obtain my Full Stack Web Developer Diploma and graduated
          with honors. After graduation I was picked up by STEM Canada as a
          WordPress Developer Intern, & was recruited as a Jr Frontend React
          Developer by a startup call FutureCondos. While working with the FC
          team, I started developing from a WordPress Frontend developer, to a
          Full Stack Developer. Learning new frameworks, languages, implementing
          and deploying them with a sense of urgency. One of my strengths is i
          have a vast interest in Tech & I’m always looking at new ways on how i
          can add new tools, & methods. Recently I've graduated from Obisidi
          Academy Full Stack Bootcamp with 98%.
        </motion>
      </motion.div>
      <div className="iPad  flex   w-full gap-16 items-center no-scrollbar z-[0] relative h-screen bg-[url(C:\Users\kadar\Mr.FullStack\MrFullStack-Frontend\src\assets\iPad.png)]    justify-center  bg-contain bg-no-repeat  p-10 overflow-hidden">
        <div className=" w-full h-full overflow-x-scroll no-scrollbar flex items-center gap-x-20">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index} `} index={index} {...project}  className="" />
          ))}
        </div>
      </div>
          <img className=" absolute flex-wrap w-[90%] mt-[-980px] p-[60px]  ml-[-1%]" src={iPadStatusbar} alt="img" />
    </>
  );
};

export default SectionWrapper(Works, "");
