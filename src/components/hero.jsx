import React from "react";

const Hero = () => {
  return (
    <div className="bg-white p-8 border-b-2 border-[#D1D1D199] font-[Inter]">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="left text-center lg:text-left lg:w-1/2">
          <div className="flex  flex-col justify-center items-center">

            <h1 className="text-5xl font-extrabold text-[#010101] ">
              Your Trusted Partner For Compliance needs
            </h1>
            <p className="mt-4 w-80 md:w-96 lg:w-full text-lg font-normal text-[#4F4F4F]">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various{" "}
              <span className="font-bold">registrations</span> ,{" "}
              <span className="font-bold">tax filings</span> , and other
              <span className="font-bold"> legal matters.</span>
            </p>
          </div>

          <div className="mt-8 flex flex-col lg:flex-row gap-10 text-center">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">
                <i className="ri-microsoft-line text-[#4F4F4F]"></i> 4.5+
              </h2>
              <p className="text-[#4F4F4F]">Customer Rating</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">
                <i className="ri-team-line text-[#4F4F4F]"></i> 20,000+
              </h2>
              <p className="text-[#4F4F4F]">Clients</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent">
                <i className="ri-shake-hands-line text-[#4F4F4F]"></i> 99.8%
              </h2>
              <p className="text-gray-500">Financial Stability</p>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-5 items-center lg:items-start lg:justify-start">
            <button className="bg-[#1C4670] text-white p-2 rounded-md font-semibold">
              Talk An Expert
            </button>

            <button className="p-2  text-[#282828] flex justify-center items-center gap-2 font-semibold">
              <i className="ri-play-circle-fill text-2xl bg-gradient-to-r from-[#FB432C] to-[#FF591E] text-transparent bg-clip-text"></i>{" "}
              See how it works
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <img
            src="/images/hero-bg-2.png"
            alt="bg"
            className="h-96 w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
