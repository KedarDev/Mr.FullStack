import { React, useState } from "react";
import Button from "./Button";
import { Macbook, WhiteArrow, coverLetter, } from "../assets";
import { resumes } from "../constants";
import ResumeCard from "./ResumeCard";
const Resume = () => {
  const [bigResumeImg, setBigResumeImg] = useState(coverLetter);

  return (
    <section
      id="resume"
      className=" flex w-full border-2 border-primary p-2 xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>RESUMES</p>
        <h1>
          <span>Full Stack, Frontend, Backend</span>
        </h1>
        <Button label="Shop now" iconURL={WhiteArrow} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16"></div>
      </div>
      {/* NOTE: This is the start */}
      <div className="relative flex-1 justify-center items-center min-h-screen bg-hero bg-center">
        <img
          src={Macbook}
          alt="macbook"
          className=" relative object-contain z-10 "
        />
        <div className="relative mt-[-75%] flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center   ">
          <img
            src={bigResumeImg}
            alt="resume collection"
            width={500}
            height={600}
            className="object-contain relative z-10"
            />
   </div>
          <div className="flex sm:gap-6 gap-4 absoulte bottom-[5%]  mt-[100px] justify-center items-center content-center   max-sm:px-6 ">
            {resumes.map((resume) => (
              <div className="" key={resume}>
                <ResumeCard
                  imgURL={resume}
                  changeBigResumeImage={(resume) => setBigResumeImg  (resume)}
                  bigResumeImg={resume}
                  />
                  <h1 className=" flex mx-auto py-auto justify-center items-center   text-[25px]">{resume.name}</h1>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Resume;
