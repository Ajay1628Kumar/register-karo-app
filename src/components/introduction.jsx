import React from "react";

const Intro = () => {
  return (
    <div className="lg:flex p-12 gap-6 justify-center items-center bg-[#1C4670] border-b-2 border-[#D1D1D199] font-[inter]">
      <div className="left-div lg:text-left lg:w-1/2 ">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mt-5">
            0ur Video Introductions
          </h1>

          <p className="text-[#AAB5CD] mt-5">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt apis dui.
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 mt-5">
          <i className="ri-lightbulb-fill text-5xl bg-[#FFA229] text-white p-2 rounded-full"></i>
          <div>
            <h3 className="text-[#FFFFFF] mt-5 text-lg font-bold">
              Explore ideas together
            </h3>

            <p className="mt-3 text-[#AAB5CD] text-sm font-normal">
              Engage audience segments and finally create actionable insights.
              Amplify vertical integration.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <i className="ri-messenger-fill text-5xl bg-[#FFA229] text-white p-2 rounded-full"></i>
          <div>
            <h3 className="text-[#FFFFFF] mt-5 text-lg font-bold">
              Bring those ideas to life
            </h3>

            <p className="mt-3 text-[#AAB5CD] text-sm font-normal">
              Engage audience segments and finally create actionable insights.
              Amplify vertical integration.
            </p>
          </div>
        </div>
      </div>

      <div className="right-div lg:w-1/2 relative">
        <img
          src="/images/girl-image.jpeg"
          alt="about-image"
          className="w-full rounded-md mt-12 lg:mt-0"
        />
        <img
          src="/images/yt-logo.png"
          alt="yt-logo"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32"
        />
      </div>
    </div>
  );
};

export default Intro;
