import React from "react";

const ResumeCard = ({ imgURL, changeBigResumeImage, bigResumeImg }) => {

  const handleClick = () => {
    if(bigResumeImg !== imgURL.bigResumeImg)
    {
      changeBigResumeImage(imgURL.bigResumeImg)
    }
  }

  return (
    <div
        className={`border-2 rounded-xl ${
          bigResumeImg === imgURL
            ? "border-red-900"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
      <div className="flex justify-center items-center bg-cover bg-card bg-center  sm:w-40 sm:h-40 rounded-xl max-sm:mp-4">
        <img src={imgURL.thumbnail}
        alt="resume collection"
        width={127}
        height={103}
        className="object-contain"
        />
      </div>
    </div>
  );
};

export default ResumeCard;
