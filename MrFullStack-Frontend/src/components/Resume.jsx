import { React, useState } from "react";
import Button from "./Button";
import { Macbook, WhiteArrow, coverLetter } from "../assets";
import { resumes } from "../constants";
import ResumeCard from "./ResumeCard";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Resume = () => {
  const [bigResumeImg, setBigResumeImg] = useState(coverLetter);

  return (
    <section
      id="resume"
      className="laptop-l:mt-[-100px] laptop:mt-[-800px] tablet:mt-[-400px] mobile-s:mt-[-400px] mobile-m:mt-[-500px] mt-[-35%] flex w-full p-2 xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <motion.div variants={textVariant()} className="ml-[30px]">
        <p className={`${styles.sectionSubText} laptop-l:text-[60px] laptop:text-[50px]`}>Cover Letter</p>
        <h2 className={`${styles.sectionHeadText}  laptop-l:text-[80px] laptop:text-[70px]`}>Resume.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3x1 leading-[30px] text-center"
      ></motion.p>
      {/* NOTE: This is the start */}
      <div className=" mobile-l:w-[422px] mobile-l:ml-[-6px]  relative flex-1 justify-center items-center min-h-screen bg-hero bg-center">
        <img
          src={Macbook}
          alt="macbook"
          className=" relative object-contain z-10 "
        />
        <div className="laptop-l:mt-[-900px]  laptop:mt-[-650px] mobile-s:w-[120px] mobile-s:ml-[90px] mobile-s:mt-[-185px] mobile-m:mt-[-225px] mobile-l:mt-[-255px] tablet:mt-[-455px] relative mt-[-78%] flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center">
          <img
            src={bigResumeImg}
            alt="resume collection"
            width={430}
            height={200}
            className="laptop-l:w-[600px] mobile-s:w-[150px] mobile-m:w-[150px] mobile-l:w-[160px] tablet:w-[300px] object-contain relative z-10"
          />
        </div>
        <div className="  tablet:mt-[150px] laptop:mt-[300px] mobile-s:absoulte  flex sm:gap-6 gap-4 absoulte bottom-[5%]  mt-[100px] justify-center items-center content-center   max-sm:px-6 ">
          {resumes.map((resume) => (
            <div className=" laptop-l:w laptop-l:mt-[150px] laptop:mt-[50px] tablet:w-[20%] mobile-s:w-[20%] mobile-m:w-[20%] " key={resume}>
              <ResumeCard
                imgURL={resume}
                changeBigResumeImage={(resume) => setBigResumeImg(resume)}
                bigResumeImg={resume}
              />
              <h1 className=" laptop-l:mt-[30px] laptop-l:p-5  laptop:p-5 tablet:mt-[20px] flex mx-auto py-auto justify-center items-center  mobile-s:text-[10px] mobile-m:text-[10px] mobile-l:text-[12px] laptop:text-[35px] laptop-l:text-[35px]  text-[25px]">
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
