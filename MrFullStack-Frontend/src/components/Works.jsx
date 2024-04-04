import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import WhiteArrow from "../assets/WhiteArrow.png";
import iPadStatusbar from "../assets/ipadStatusbar.png"
import GitCard from "./GitCard";
const Works = () => {
  return (
    <>
      <motion className="">
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
      </motion>
      <div className="iPad  z-[0] p-3  relative h-screen bg-[url(C:\Users\kadar\Mr.FullStack\MrFullStack-Frontend\src\assets\iPad.png)]  mx-auto  justify-center  bg-contain   bg-no-repeat my-auto  overflow-hidden">
        <img className="mt-[5px] p-8" src={iPadStatusbar} alt="img" />
      <GitCard />
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
