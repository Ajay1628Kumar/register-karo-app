import React from "react";

const Transformation = ({ imgSrc, imgH1, imgH31, imgH32 }) => {
  return (
    <div className="flex flex-col justify-center w-80 mt-8 lg:w-72 font-[Inter]">
      <img src={imgSrc} alt="img1" className="h-40 object-cover" />

      <h3 className="text-[#667085] text-sm font-semibold mt-3">{imgH31}</h3>

      <h1 className="text-[#1A1A1A] text-xl font-bold mt-2">{imgH1}</h1>
      <h3 className="text-[#667085] text-sm font-normal mt-2">{imgH32}</h3>
    </div>
  );
};

export default Transformation;
