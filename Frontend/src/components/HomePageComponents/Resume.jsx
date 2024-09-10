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
          className="relative tablet:ml-[8px] mobile:ml-[18px] object-contain   mobile-s:w-screen mobile-s:ml-[3px] z-10 desktop:w-[1260px] desktop:ml-[50px]"
          // className=" dark:xs:w-[450px] xl:mt-[150px] lg:ml-[20px] lg:w-screen desktop:w-[2560px] desktop:ml-[50px] desktop-s:w-[2045px] desktop-s:ml-[5px]  relative object-contain z-10 "
        />
        <div  className=" mobile:w-[500px] mobile:ml-[180px]  desktop:w-full laptop-l:mt-[-900px]  laptop:mt-[-650px] mobile-s:w-[140px] mobile-s:ml-[105px] mobile-s:mt-[-210px] mobile-m:mt-[-235px] mobile-l:mt-[-255px] tablet:mt-[-525px] relative mt-[-78%] flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center">
          <img
            src={bigResumeImg}
            alt="resume collection"
            width={430}
            height={200}
            className="object-contain tablet:ml-[-60px] relative z-10 mobile:w-[300px] mobile:h-[340px] mobile:ml-[-200px] mobile:mt-[-200px] mobile-s:w-[140px] mobile-s:mt-[2px] mobile-s:ml-[-26px]   w-[262px] tablet:w-[300px] laptop:w-[400px] laptop:mt-[20px] tablet:mt-[60px] mt-24"
            // className="dark:xs:w-[230px] dark:xs:h-[230px] dark:xs:mt-[-25px] 2xl:mt-[-300px] 2xl:w-[600px] xl:w-[480px] lg:w-[450px] lg:mt-[140px] md:w-[320px] md:mt-[130px] xs:w-[180px] xs:mt-[60px] desktop-s:w-[850px] desktop-s:mt-[-400px] desktop:w-[1200px] desktop:h-[1300px] laptop-l:w-[600px] mobile-s:w-[150px] mobile-m:w-[150px] mobile-l:w-[160px] tablet:w-[300px] object-contain relative z-10"
          />
        </div>
        <div 
        className=" tablet:mt-[200px] dark:mobile:ml-[40px] flex dark:bg-black gap-4 absoulte bottom-[5%]  mt-[100px] justify-center items-center content-center   max-sm:px-6 "
        // className=" 2xl:w-screen lg:w-[1024px] 2xl:ml-[-120px] lg:mt-[250px] md:w-screen md:ml-[10px] xs:w-full xs:ml-[10px] dark:bg-black desktop-s:mt-[20em] desktop:mt-[40em]   tablet:mt-[150px] laptop:mt-[300px] mobile-s:absoulte  flex sm:gap-6 gap-4 absoulte bottom-[5%]  mt-[100px] justify-center items-center content-center   max-sm:px-6 "
        >
          {resumes.map((resume, id) => (
            <div   key={id} className="2xl:w-[153px] mobile:mt-[100px]  mobile:w-[160px] 2xl:ml-[200px]  xl:w-[1280px] xl:ml-[150px]  xl:mt-[-500px] lg:w-[200px] lg:ml-[20px] align-middle content-center lg:justify-center md:mt-[80px] md:w-screen desktop:ml-[100px] desktop-s:w-full desktop:w-full desktop:h-[400px] laptop-l:mt-[150px] laptop:mt-[100px] tablet:w-[20%] mobile-s:w-[20%] mobile-m:w-[20%] ">
              <ResumeCard
                imgURL={resume}
                changeBigResumeImage={(resume) => setBigResumeImg(resume)}
                bigResumeImg={resume}
              />
              <h1
              className="text-[#FF0000]  mobile-s:text-[11px]  flex mx-auto py-auto justify-center items-center text-[25px]">
              {/* className=" 2xl:text-[50px] 2xl:w-[320px] 2xl:ml-[-80px] xl:w-[180px] xl:text-[29px] xl:text-center xl:ml-[-30px] lg:text-[25px] md:text-[20px] xs:text-[14px]  mobile-s:text-black dark:text-white xs:text-[#FF0000]  desktop-s:text-[45px] laptop-l:mt-[30px] laptop-l:p-5  laptop:p-5 tablet:mt-[20px] flex mx-auto py-auto justify-center items-center  mobile-s:text-[10px] mobile-m:text-[10px] mobile-l:text-[12px] laptop:text-[35px] laptop-l:text-[35px]  desktop:text-[60px] text-[25px]"> */}
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
