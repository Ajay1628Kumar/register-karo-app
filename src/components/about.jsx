import React from "react";

const About = () => {
  return (
    <div className="lg:flex p-12 gap-6 justify-center items-center">

      <div className="left-div text-center lg:text-left lg:w-1/2">

        <h2 className="text-[#EB8D15] font-normal text-sm">
          WELCOME TO REGISTERKARO.IN
        </h2>

        <h1 className="text-[#272D37] text-3xl font-bold mt-5">
          About <span className="text-[#EB8D15]">Register Karo</span>
        </h1>

        <p className="text-[#0D1216] mt-5">
          We have been using Intelegencia as our DevOps vendor for our field
          service applications over the last couple of years and I’m extremely
          pleased with their performance, ability to execute, and willingness to
          adapt in our ever changing environment. Perry is an outstanding leader
          who is fanatical about customer satisfaction. He has built a solid
          team which has consistently delivered on projects thereby exceeding
          everyone’s expectations. <br />
          <br />I would strongly recommend their services to any organization
          that is looking for solid, reliable, and predictable outcomes.
        </p>

        <button className="mt-10 p-2 bg-[#1C4670] text-[#FFFFFF] rounded-md">
          Learn More <i className="ri-arrow-right-circle-line"></i>
        </button>
      </div>

      <div className="right-div lg:w-1/2">
        <img
          src="/images/about-image.jpeg"
          alt="about-image"
          className="w-full rounded-md border-[#EB8D15] border-2 mt-12 lg:mt-0"
        />
      </div>
    </div>
  );
};

export default About;
