import React from "react";
import { SectionWrapper } from "../../hoc";
import { styles } from "../../styles";
import WhiteArrow from "../../../src/assets/WhiteArrow.png";
import iPadStatusbar from "../../assets/iPadStatusbar.png";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../../src/utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { githublogo } from "../../assets/index";


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
          className="relative left-[20px] desktop:mt-[-90em] laptop-l:mt-[-800px] laptop:mt-[-680px] mobile-m:mt-[-415px] mobile-l:mt-[-390px] mobile-s:mt-[-415px] mt-[-510px] object-contain flex-wrap  bg-rounded-2xl mobile-m:w-[200px] tablet:w-[200px] laptop:w-[450px] laptop-l:w-[500px] desktop-s:w-[800px] mobile-s:w-[50px]  mobile-s:h-[50px] sm:w-[250px] sm:h-[250px]"
        >
          <div className=" desktop-s:mt-[-1100px] desktop-s:h-[600px] desktop:h-[800px] desktop:w-[800px] laptop-l:h-[400px] relative w-full mobile-s:p-1 mobile-m:p-1 mobile-s:w-[130px] mobile-m:w-[200px] mobile-l:w-[200px] mobile-l:h-[110px] tablet:w-[300px]  mobile-m:h-[110px] mobile-s:h-[100px] h-[280px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-fit rounded-2xl "
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div 
                onClick={() => window.open(source_code_links, "_blank")}
                className="black-gradient  desktop:w-[100px] desktop:h-fit mobile-l:mt-[-8px] mobile-l:w-6 mobile-l:h-6 mobile-m:w-6 mobile-m:h-6 mobile-s:w-5 mobile-s:h-5  mobile-s:mt-[-6px] mobile-s:mr-[-4px] w-10 h-10 rounded-full justify-center items-center cursor-pointer"
              >
                <img
                  src={githublogo}
                  alt="gitlogo"
                  className="w-full object-contain mobile-l:w-[35px]  mobile-s:w-[30px] "
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
              <h3 className="text-white font-bold mobile-s:text-[10px] mobile-m:mt-[20px] mobile-l:mt-[-18px] laptop:text-[30px] laptop-l:text-[30px] desktop:text-[80px]
              mobile-m:text-[12px] mobile-l:text-[12px] tablet:mt-[-18px] tablet:text-[20px] text-[24px]">{name}</h3>
              <p className=" mobile-s:text-[8px] mobile-m:text-[11px]  mobile-l:text-[11px] mobile-m:mt-[-1px] laptop:text-[25px] laptop-l:text-[30px]
              mobile-l:mt-[-1px] mobile-s:mt-1 mt-2 text-white text-[14px] desktop:text-[45px]">{description}</p>
            </div>
            <div className=" mt-4 mobile-s:mt-[-1px] mobile-l:mt-[-1px] flex flex-wrap gap-1 mobile-s:gap-1">
              {tags.map((tag) => (
                <p key={tag.name} className={` desktop:text-[40px] laptop-l:text-[25px] tablet:mt-[-10px] tablet:text-[12px]  mobile-m:mt-[-10px] mobile-s:text-[6px] 
                mobile-l:text-[9px] mobile-m:text-[9px] ${tag.color}`}>
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
      <motion.div className=" desktop-s:mt-[-600px] laptop:ml-[10px] w-full mobile-s:mt-[-400px] mobile-m:mt-[-400px] mobile-l:mt-[-400px] tablet:mt-[-400px] laptop:mt-[300px]">
        <p className={`${styles.sectionSubText} desktop:ml-[50px] desktop:text-[80px] laptop-l:text-[60px]  laptop:text-[50px] tablet:text-[30px] `}>Github Repo</p>
        <div className="inline-flex justify-center items-center">
          <h2
            className={`${styles.sectionHeadText} desktop-s:ml-[-40px] desktop:ml-[30px] desktop:text-[100px] laptop:w-full laptop:pl-0 laptop:p-1 laptop-l:text-[80px] laptop:text-[70px] 
            tablet:text-[50px] mobile-m:text-[25px] mobile-l:text-[23px] mobile-m:p-1 mobile-s:text-[20.6px]  w-full mobile-s:p-3 
            p-5 inline-flex pl-10 mx-auto`}
          >
            Enter Website
          </h2>
          <img
            className="desktop:ml-[-18em]  desktop:w-[80em] desktop:h-10  laptop-l:h-7 laptop-l:ml-[-200px] laptop-l:w-[800px] laptop:w-[50%] laptop:ml-[40px] laptop:h-7 
            mobile-l:w-[41%] mobile-l:h-3  mobile-m:w-[41%] mobile-m:ml-[2.5px] mobile-m:h-3 mobile-s:h-2 relative w-[45%] 
            ml- h-5 justify-center items-center content-center "
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
      <div ></div>
      <div className=" bg-iPad  desktop-s:w-[2045px] desktop:w-[2560px] desktop:ml-[-14px] laptop-l:w-[1440px] laptop-l:ml-[-25px] laptop:mt-[40px] laptop:w-[1040px] laptop:ml-[-25px] mobile-m:w-[394px] mobile-l:w-[425px] mobile-l:ml-[-25px] 
      mobile-m:mt-[34px]  mobile-m:ml-[-25px] mobile-m:bg-contain mobile-s:w-[345px] mobile-s:ml-[-24px] mobile-s:mt-[20px] tablet:w-[790px] 
      tablet:ml-[-26px] flex p-[5%] w-[105%]  gap-16 items-center no-scrollbar z-[0] relative h-screen     
      justify-center  bg-contain bg-no-repeat   overflow-hidden">
        <div className=" laptop:mt-[-185px] tablet:mt-[80px] mobile-m:mt-[20px] mobile-m:ml-[5px] w-full h-full overflow-x-scroll no-scrollbar flex items-center mobile-m:gap-x-[45px] tablet:gap-x-[140px] desktop:gap-x-[250px]
        mobile-s:gap-x-24 gap-x-20">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index} `} index={index} {...project}  className="" />
          ))}
        </div>
      </div>
          <img className="absolute desktop-s:w-[94%] desktop-s:ml-[60px] flex-wrap w-[90%] h-[1.5%] desktop:h-fit desktop:w-[94%] desktop:mt-[-211.5em]  laptop-l:h-fit mobile-s:mt-[-279%] mobile-s:ml-[-14px]  
          mobile-s:w-[700px] mobile-s:p-10 mobile-s:h-fit mobile-m:mt-[-238%] mobile-l:mt-[-213%] tablet:ml-[-2px] 
          tablet:mt-[-143%] laptop:ml-[60px] laptop:w-[90%] laptop-l:mt-[-132%] laptop-l:w-[98%] laptop:mt-[-171%] tablet:h-fit tablet:w-[800px]  mobile-m:ml-[-14px] 
          mobile-l:ml-[-16px]  mobile-m:w-[800px] mobile-l:w-[120%]  laptop-l:ml-[-2px]  mobile-m:p-10 mobile-m:h-fit   mt-[-101%] p-[60px]  ml-[3%]" src={iPadStatusbar} alt="img" />
    </>
  );
};

export default SectionWrapper(Works, "");
