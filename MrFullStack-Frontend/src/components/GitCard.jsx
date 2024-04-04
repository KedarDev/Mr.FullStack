import React from "react";
import { github } from "../assets";
import { projects } from "../constants";
const GitCard = () => {
  return (
    <div className="flex overflow-scroll">
      {projects.map((project, index) => (
        <div
          key={project.index}
          className=" shrink-0  gap-3  w-[350px] justify-center bg-white h-[360px] ml-[10px]"
        >
          <img
            className=" shrink-0 flex w-[80px] h-[80px] "
            src={github}
            alt=""
          />
          <img
            className="w-fit h-[150px] justify-center mt-[0px] mr-[150px]  bg-contain"
            src={project.image}
            alt=""
          />
          <h1 className="  flex text-[15px] text-black">
            {project.name}
          </h1>
          <h1 className="w-full h-[120px] text-white bg-black">{project.description}</h1>
          <h2></h2>
        </div>
      ))}
    </div>
  );
};

export default GitCard;
