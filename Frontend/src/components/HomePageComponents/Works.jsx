import React from "react";
import { SectionWrapper } from "../../hoc";
import { Styles } from "../../Styles";
import WhiteArrow from "../../../src/assets/WhiteArrow.png";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/Motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { arrowDark, githublogo } from "../../assets/index";

const Works = () => {
  const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
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
          className="  w-full relative left-[20px] mt-[-400px] mobile-s:mt-[-410px] object-contain flex-wrap  bg-rounded-2xl "
        >
          <div
            className="relative dark:wideScreen:w-[800px] dark:wideScreen:h-[500px] desktop:w-[600px] desktop:h-[400px] tablet:w-[400px] tablet:mt-[-848px] tablet:h-[300px] mobile:w-[200px] mobile:h-[200px] mobile:mt-[-830px] mobile-s:mt-[-100px] mobile-s:w-[180px] mobile-s:h-[100px] laptop:mt-[-720px] laptop:w-[500px] laptop:h-[350px] w-[240px] h-[250px]  "
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-fit rounded-2xl "
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient absolute z-10   tablet:w-[60px] tablet:h-[60px]   mobile-s:w-[30px] mobile-s:h-[30px] laptop:w-[80px] laptop:h-[80px]   desktop:h-fit mobile-l:mt-[-8px] mobile-l:w-6 mobile-l:h-6 mobile-m:w-6 mobile-m:h-6 mobile-s:mt-[-6px] mobile-s:mr-[-4px] w-10 h-10 rounded-full justify-center items-center cursor-pointer"
              >
                <img
                  src={githublogo}
                  alt="gitlogo"
                  className="relative w-full desktop:w-[]  tablet:w-[60px] tablet:h-[60px]  mobile-s:w-[30px] mobile-s:h-[30px]  laptop:w-[80px] laptop:h-[80px]  object-contain mobile-l:w-[35px]   "
                />
              </div>
              <div
                className=" w-screen  xs:w-full xs:mt-[-10px]  mobile-s:h-fit  mobile-s:mt-[-4px] mobile-s:ml-[-3px] mobile-s:rounded-[5%] overflow-hidden absolute inset-0 flex justify-end m-3 mobile-s:m-1 card-img_hover"
              >
                <div
                  onClick={() => window.open(liveSiteButton, "_blank")}
                  className=" laptop:mt-[100px] wideScreen:h-[] h-[70px] mobile:h-fit  mobile-s:mt-[50px] mobile-s:ml-1 w-screen justify-center items-center cursor-pointer "
                >
                  <button
                    className="h-fit dark:wideScreen:w-[780px] dark:wideScreen:text-[35px] dark:wideScreen:h-[50px] tablet:w-[380px] tablet:mt-[180px] mobile:mt-[100px] mobile-s:w-[160px] mobile-s:h-[25px] laptop:text-[20px] bg-black border-[1px] rounded-[2%] border-red-700  text-[#FFF] font-semibold  text-center mt-[0px]"
                  >
                    ENTER
                  </button>
                </div>
              </div>
            </div>
            <div
              className="mt-5 w-full grid"
            >
              <h3
                className=" laptop:text-[55px] text-white mobile:text-[22px] font-bold text-[24px] mt-[-20px] mobile-s:text-[14px] laptop:mt-[px]"
              >
                {name}
              </h3>
              <p
                className="laptop:leading-[40px] text-white mobile:text-[18px] mobile:leading-[20px] text-[14px] mobile-s:text-[10px] laptop:text-[25px] leading-4"
              >
                {description}
              </p>
            </div>
            <div
              className="mt-4 mobile-s:mt-2 flex flex-wrap  gap-1"
            >
              {tags.map((tag) => (
                <p
                  key={tag.name}
                  className={`${tag.color} text-[12px] mt-[-5px] mobile-s:text-[8px] mobile:text-[15px]  laptop:text-[20px]`}
                >
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
      <div className=" laptop:mt-[-500px] mt-[-300px] tablet:mt-[200px] xs:w-screen xs:mt-[600px]"></div>
      <motion.div className="md:mt-[400px] xs:mt-[200px] mt-[200px]  relative sm:mt-[-500px] desktop-s:mt-[-600px] laptop:ml-[10px] w-full mobile-s:mt-[-400px] mobile-m:mt-[-400px] mobile-l:mt-[-400px] tablet:mt-[-400px] laptop:mt-[300px]">
        <p
          className={`${Styles.sectionSubText} wideScreen:ml-[-10px]  mobile:text-[25px] laptop:text-[50px] md:text-[25px] relative xs:text-[25px]  dark:text-white desktop:ml-[50px] desktop:text-[80px] laptop-l:text-[60px]   tablet:text-[30px] `}
        >
          Github Repo
        </p>
        <div className="inline-flex justify-center items-center">
          <h2
            className={`${Styles.sectionHeadText}  mobile:text-[35px] laptop:text-[70px] dark:md:w-[700px]  md:w-[600px] relative dark:xs:w-[490px] xs:w-[460px] xs:ml-[-50px] xs:text-[80em]  sm:w-[200px]  dark:text-white desktop-s:ml-[-40px] desktop:ml-[30px] desktop:text-[100px] laptop:w-full laptop:pl-0 laptop:p-1 laptop-l:text-[80px] 
            tablet:text-[50px] mobile-m:text-[25px] mobile-l:text-[23px] mobile-m:p-1 mobile-s:text-[20.6px]  w-full mobile-s:p-3 
            p-5 inline-flex pl-10 mx-auto`}
          >
            <h2 className="text-[41px] laptop:text-[70px] tablet:text-[50px]">
              Enter Website
            </h2>
          </h2>
          <img
            className="hidden dark:mobile:w-[200px] dark:mobile:ml-[30px]  dark:mobile-s:ml-[40px] dark:mobile-s:h-[12px] dark:mobile-s:w-[80px] dark:mobile-s:mt-[10px] dark:mobile:h-[20px]   dark:laptop:w-[250px] dark:laptop:h-[25px] dark:laptop:ml-[100px]  dark:block ml-[20px] w-[150px] h-[12px]  mt-[-25px] tablet:mt-[-0px] tablet:ml-[50px]"
            src={WhiteArrow}
            alt="whitearrow"
          />
          <img
            className=" wideScreen:w-[200px] wideScreen:right-[300px] wideScreen:h-[200px] dark:hidden absolute mobile:w-[120px] mobile:h-[140px] mobile:right-24 mobile:mt-[-0px]  mobile-s:w-[50px] mobile-s:mt-[70px] mobile-s:ml-[10px] mobile-s:h-[50px] laptop:ml-[8em] laptop:w-[150px] laptop:mt-[-px] rotate-[270deg] ml-[-150px] w-[100px] tablet:w-[120px] tablet:ml-[-90px]"
            src={arrowDark}
            alt="darkarrow"
          />
        </div>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className=" text-white text-[17px] max-w-3x1 leading-[30px]"
        ></motion.div>
      </motion.div>
      <div></div>
      <div
        className="bg-iPad dark:wideScreen:w-screen dark:desktop:w-[1260px] dark:desktop:ml-[10px] dark:laptop:ml-[-8px] dark:laptop:w-[1000px] tablet:ml-[-16px] dark:mobile:mt-[100px] mobile:ml-[-5px] mobile-s:w-screen mobile-s:ml-[-14px] dark:laptop:mt-[100px]  w-full dark:bg-black flex p-5 gap-16 items-center no-scrollbar z-[100] relative h-screen     
       justify-center  bg-contain bg-no-repeat overflow-hidden"

      >
        <div
          className=" desktop:mt-[100px] tablet:ml-[20px] lg:gap-[200px] md:ml-[10px] md:w-[98%] desktop:w-[94%] laptop:mt-[-185px] tablet:mt-[80px] mobile-m:mt-[20px] mobile-m:ml-[5px] w-full h-full overflow-x-scroll no-scrollbar flex items-center mobile-m:gap-x-[45px] tablet:gap-x-[140px] desktop:gap-x-[250px]
        mobile-s:gap-x-10 gap-x-20"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index} `}
              index={index}
              {...project}
              className=""
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
