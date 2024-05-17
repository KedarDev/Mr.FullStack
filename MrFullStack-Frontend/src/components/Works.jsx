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
          className="relative left-[20px] mt-[-510px] object-contain flex-wrap  bg-white rounded-2xl sm:w-[250px] sm:h-[250px]"
        >
          <div className="relative w-full h-[280px]">
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
        </motion>
      </motion.div>
      <div className="iPad flex  p-[5%] w-[105%] gap-16 items-center no-scrollbar z-[0] relative h-screen bg-[url(C:\Users\kadar\Mr.FullStack\MrFullStack-Frontend\src\assets\iPad.png)]    justify-center  bg-contain bg-no-repeat   overflow-hidden">
        <div className=" w-full h-full overflow-x-scroll no-scrollbar flex items-center gap-x-20">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index} `} index={index} {...project}  className="" />
          ))}
        </div>
      </div>
          <img className=" absolute flex-wrap w-[90%] h-[1.5%] mt-[-101%] p-[60px]  ml-[3%]" src={iPadStatusbar} alt="img" />
    </>
  );
};

export default SectionWrapper(Works, "");
