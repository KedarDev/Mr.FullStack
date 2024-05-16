import {React , useState} from "react";
import Button from "./Button";
import { Macbook, WhiteArrow, coverLetter } from "../assets";
import { Resumes } from "../constants";
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
        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40  bg-hero bg-cover bg-center">
            <img src={bigResumeImg} alt="resume collection" width={350} height={500} className="object-contain z-10 mt-[-1000px] rounded-[1.5%]" />
            <div className="flex ml-[-400px]">
                {Resumes.map((resume) => (
                <div key={resume}>
                    <ResumeCard
                    imgURL={resume}
                    changeBigResumeImage={(resume) => setBigResumeImg (resume)}
                    bigResumeImg={bigResumeImg}
                    />
                </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
