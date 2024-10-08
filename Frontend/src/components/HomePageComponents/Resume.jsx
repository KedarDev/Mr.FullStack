import { React, useState } from "react";
import { Macbook, coverLetter } from "../../assets";
import { resumes } from "../../constants/index";
import ResumeCard from "./ResumeCard";
import { Styles } from "../../Styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/Motion";

const Resume = () => {

  const [bigResumeImg, setBigResumeImg] = useState(coverLetter);

  return (
    <section
      id="resume"
      className="dark:mt-[100px] md:mt-[-500px] xs:mt-[-400px] bg-white  dark:bg-black laptop-l:mt-[-100px] laptop:mt-[-200px] tablet:mt-[-200px] mobile-s:mt-[-400px] mobile-m:mt-[-500px] mt-[-35%] flex w-full p-2 xl:flex-row flex-col justify-center min-h-screen gap-10 max-container mx-auto "
    >
      <motion.div variants={textVariant()} className="ml-[30px]">
        <div className="absolute">
        <p className={`${Styles.sectionSubText} mobile:text-[25px] xl:text-[40] xs:text-[25px]  dark:text-white  desktop:text-[80px] laptop-l:text-[60px] laptop:text-[50px]`}>Cover Letter</p>
        <h2 className={`${Styles.sectionHeadText} mobile:text-[35px] xs:text-[55px]  dark:text-white  desktop:text-[100px]  laptop-l:text-[80px] laptop:text-[70px]`}>Resume.</h2>
        </div>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3x1 leading-[30px] text-center mobile:mt-[100px]"
      ></motion.p>
      {/* NOTE: This is the start */}
      <div className="dark:lg:w-screen mobile:w-screen mobile:ml-[-5px] laptop:mt-[200px] lg:w-screen dark:md:w-[800px] md:w-[800px] dark:xs:w-[450px] xs:mt-[50px] laptop-l:ml-[10px] laptop:w-full laptop:ml-[2px] mobile-m:w-[385px]  mobile-m:ml-[-3.5px] mobile-l:ml-[-3px]  mobile-s:w-[335px] mobile-l:w-[425px] relative flex-1 justify-center items-center min-h-screen bg-hero bg-center">
        <img
          src={Macbook}
          alt="macbook"
          className="relative wideScreen:w-screen dark:desktop:w-screen dark:laptop:ml-[20px]  dark:laptop:w-[1000px] tablet:ml-[8px] mobile:ml-[18px] object-contain   mobile-s:w-screen mobile-s:ml-[3px] z-10 desktop:w-[1260px] desktop:ml-[10px]"
        />
        <div  className="wideScreen:w-[900px]    desktop:w-[800px] desktop:h-[440px] mobile:w-[500px] mobile:ml-[180px]   laptop-l:mt-[-900px]  laptop:mt-[-650px] mobile-s:w-[140px] mobile-s:ml-[105px] mobile-s:mt-[-210px] mobile-m:mt-[-235px] mobile-l:mt-[-255px] tablet:mt-[-525px] relative mt-[-78%] flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center">
          <img
            src={bigResumeImg}
            alt="resume collection"
            width={430}
            height={200}
            className="object-contain wideScreen:mt-[-220px]  wideScreen:object-fit wideScreen:h-[800px] wideScreen:ml-[300px] laptop:w-[700px] laptop:ml-[160px] laptop:h-[500px] tablet:ml-[-60px] relative z-10  mobile:w-[300px] mobile:h-[340px] mobile:ml-[-200px] mobile:mt-[-200px] mobile-s:w-[140px] mobile-s:mt-[2px] mobile-s:ml-[-26px]   w-[262px] tablet:w-[300px]  laptop:mt-[20px] tablet:mt-[60px] mt-24"
          />
        </div>
        <div 
        className=" tablet:mt-[200px] dark:mobile:ml-[40px] flex dark:bg-black gap-4 absoulte bottom-[5%]  mt-[100px] justify-center items-center content-center   max-sm:px-6 "
        >
          {resumes.map((resume, id) => (
            <div   key={id} className="2xl:w-[153px] mobile:mt-[100px]  mobile:w-[160px] 2xl:ml-[200px]  xl:w-[1280px] xl:ml-[150px]  xl:mt-[-500px] lg:w-[200px] lg:ml-[20px] align-middle content-center lg:justify-center md:mt-[80px] md:w-screen desktop:ml-[100px] desktop-s:w-full desktop:w-full desktop:h-[400px] laptop-l:mt-[150px] laptop:mt-[100px] tablet:w-[20%] mobile-s:w-[20%] mobile-m:w-[20%] ">
              <ResumeCard
                imgURL={resume}
                changeBigResumeImage={(resume) => setBigResumeImg(resume)}
                bigResumeImg={resume}
              />
              <h1
              className="text-[#FF0000]  desktop:text-[30px] mobile-s:text-[11px]  flex mx-auto py-auto justify-center items-center text-[25px]">
                {resume.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
