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
          className="relative left-[20px] mobile-m:mt-[-415px] mobile-l:mt-[-390px]  mobile-s:mt-[-415px] mt-[-510px] object-contain flex-wrap  bg- rounded-2xl mobile-m:w-[200px] mobile-s:w-[50px] mobile-s:h-[50px] sm:w-[250px] sm:h-[250px]"
        >
          <div className="relative w-full mobile-s:p-1 mobile-m:p-1 mobile-s:w-[130px] mobile-m:w-[200px] mobile-l:w-[200px] mobile-l:h-[110px]  mobile-m:h-[110px] mobile-s:h-[100px] h-[280px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-fit rounded-2xl "
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div 
                onClick={() => window.open(source_code_links, "_blank")}
                className="black-gradient  mobile-l:mt-[-8px] mobile-l:w-6 mobile-l:h-6 mobile-m:w-6 mobile-m:h-6 mobile-s:w-5 mobile-s:h-5  mobile-s:mt-[-6px] mobile-s:mr-[-4px] w-10 h-10 rounded-full justify-center items-center cursor-pointer"
              >
                <img
                  src={githublogo}
                  alt="gitlogo"
                  className="w-full object-contain mobile-l:w-[35px]  mobile-s:w-[30px]"
                />
              </div>
              <div className=" mobile-s:w-[25px] mobile-s:h-[100px]  mobile-s:mt-[-4px] mobile-s:ml-[-3px] mobile-s:rounded-[20%] overflow-hidden absolute inset-0 flex justify-end m-3 mobile-s:m-1 card-img_hover">
                <div
                  onClick={() => window.open(liveSiteButton, "_blank")}
                  className=" mobile-s:w-[25px]   absolute  mobile-s:mt-[-10px] mobile-s:ml-1  w-10 h-10  justify-center items-center cursor-pointer left-0"
                >
                  <button className=" mobile-s:text-[5px] bg-white border-[1px] rounded-lg border-[#000] mobile-s:mr-[35px] mobile-s:w-5 mobile-s:h-2 text-black  font-semibold">ENTER</button>
                </div>
              </div>
            </div>
            <div className="mt-5 mobile-s:m-0  mobile-m:m-0 mobile-s:mt-[10px] mobile-m:mt-[-10px]  mobile-s:w-full">
              <h3 className="text-white font-bold mobile-s:text-[10px] mobile-m:mt-[20px] mobile-l:mt-[-18px]  mobile-m:text-[12px] mobile-l:text-[12px] text-[24px]">{name}</h3>
              <p className=" mobile-s:text-[8px] mobile-m:text-[11px]  mobile-l:text-[11px] mobile-m:mt-[-1px] mobile-l:mt-[-1px] mobile-s:mt-1 mt-2 text-white text-[14px]">{description}</p>
            </div>
            <div className=" mt-4 mobile-s:mt-[-1px] mobile-l:mt-[-1px] flex flex-wrap gap-1 mobile-s:gap-1">
              {tags.map((tag) => (
                <p key={tag.name} className={`  mobile-m:mt-[-10px] mobile-s:text-[6px] mobile-l:text-[9px] mobile-m:text-[9px] ${tag.color}`}>
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
      <motion.div className="w-full mobile-s:mt-[-400px] mobile-m:mt-[-400px] mobile-l:mt-[-400px]">
        <p className={styles.sectionSubText}>Github Repo</p>
        <div className="inline-flex   justify-center items-center">
          <h2
            className={`${styles.sectionHeadText} mobile-m:text-[25px] mobile-l:text-[23px] mobile-m:p-1 mobile-s:text-[20.6px]  w-full mobile-s:p-3 p-5 inline-flex grid-flex-col pl-10 mx-auto`}
          >
            Enter Website
          </h2>
          <img
            className=" mobile-l:w-[41%] mobile-l:h-3  mobile-m:w-[41%] mobile-m:ml-[2.5px] mobile-m:h-3 mobile-s:h-2 relative w-[45%] ml- h-5 justify-center items-center content-center "
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
      <div className="iPad mobile-m:w-[115%] mobile-l:w-[425px] mobile-l:ml-[-25px] mobile-m:mt-[30px]  mobile-m:ml-[-25px] mobile-m:bg-contain mobile-s:w-[118%] mobile-s:ml-[-25px] mobile-s:mt-[20px] flex p-[5%] w-[105%]  gap-16 items-center no-scrollbar z-[0] relative h-screen bg-[url(C:\Users\kadar\Mr.FullStack\MrFullStack-Frontend\src\assets\iPad.png)]    justify-center  bg-contain bg-no-repeat   overflow-hidden">
        <div className=" w-full h-full overflow-x-scroll no-scrollbar flex items-center mobile-m:gap-x-[45px] mobile-s:gap-x-24 gap-x-20">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index} `} index={index} {...project}  className="" />
          ))}
        </div>
      </div>
          <img className=" absolute flex-wrap w-[90%] h-[1.5%] mobile-s:mt-[-279%] mobile-s:ml-[-14px]  mobile-s:w-[700px] mobile-s:p-10 mobile-s:h-fit mobile-m:mt-[-238%] mobile-l:mt-[-213%] mobile-m:ml-[-14px] mobile-l:ml-[-16px]  mobile-m:w-[700px] mobile-l:w-[120%]  mobile-m:p-10 mobile-m:h-fit   mt-[-101%] p-[60px]  ml-[3%]" src={iPadStatusbar} alt="img" />
    </>
  );
};

export default SectionWrapper(Works, "");
