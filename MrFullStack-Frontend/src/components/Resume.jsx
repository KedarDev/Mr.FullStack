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
      className=" mt-[-35%] flex w-full p-2 xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Cover Letter</p>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3x1 leading-[30px] text-center"
      ></motion.p>
      {/* NOTE: This is the start */}
      <div className="relative flex-1 justify-center items-center min-h-screen bg-hero bg-center">
        <img
          src={Macbook}
          alt="macbook"
          className=" relative object-contain z-10 "
        />
        <div className="relative mt-[-78%] flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center">
          <img
            src={bigResumeImg}
            alt="resume collection"
            width={430}
            height={200}
            className="object-contain relative z-10"
          />
        </div>
        <div className="flex sm:gap-6 gap-4 absoulte bottom-[5%]  mt-[100px] justify-center items-center content-center   max-sm:px-6 ">
          {resumes.map((resume) => (
            <div className="" key={resume}>
              <ResumeCard
                imgURL={resume}
                changeBigResumeImage={(resume) => setBigResumeImg(resume)}
                bigResumeImg={resume}
              />
              <h1 className=" flex mx-auto py-auto justify-center items-center   text-[25px]">
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
