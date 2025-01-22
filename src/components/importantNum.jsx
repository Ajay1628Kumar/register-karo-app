import React from "react";

const ImportantNumber = () => {
  return (
    <div
      className=" bg-[#FAFAFA] border-b-2 border-[#D1D1D199] flex
      flex-col justify-center items-center p-12 text-center font-[inter]"
    >
      <h3 className="text-sm font-normal text-[#EB8D15]">Why Register Karo</h3>
      <h1 className="text-[#3C2109] text-3xl font-bold mt-2 text-center">
        Some Numbers are important
      </h1>

      <div className="mt-10 grid grid-cols-2 gap-10 place-items-center md:grid-cols-6">
        <div className="flex flex-col justify-center items-center">
          <p className="text-5xl font-bold bg-gradient-to-r from-[#FFA229] to-[#2F5795] text-transparent bg-clip-text">
            1M
            <sup className="bg-gradient-to-r from-[#FFA229] to-[#2F5795] text-transparent bg-clip-text">
              +
            </sup>
          </p>
          <p className="text-[#181617] font-bold">Customers</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-5xl font-bold bg-gradient-to-r from-[#FFA229] to-[#2F5795] text-transparent bg-clip-text">
            12
            <sup className="bg-gradient-to-r from-[#FFA229] to-[#2F5795] text-transparent bg-clip-text">
              +
            </sup>
          </p>
          <p className="text-[#181617] font-bold">Years of Excellence</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-5xl font-bold bg-gradient-to-r from-[#FFA229] to-[#2F5795] text-transparent bg-clip-text">
            41
            <sup className="bg-gradient-to-r from-[#FFA229] to-[#2F5795] text-transparent bg-clip-text">
              +
            </sup>
          </p>
          <p className="text-[#181617] font-bold">R&D Engineers</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-5xl font-bold bg-gradient-to-r from-[#FFA229] to-[#2F5795] text-transparent bg-clip-text">
            78
            <sup className="bg-gradient-to-r from-[#FFA229] to-[#2F5795] text-transparent bg-clip-text">
              +
            </sup>
          </p>
          <p className="text-[#181617] font-bold">Countries</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-5xl font-bold bg-gradient-to-r from-[#FFA229] to-[#2F5795] text-transparent bg-clip-text">
            3287
            <sup className="bg-gradient-to-r from-[#FFA229] to-[#2F5795] text-transparent bg-clip-text">
              +
            </sup>
          </p>
          <p className="text-[#181617] font-bold">PARTNERS</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-5xl font-bold bg-gradient-to-r from-[#FFA229] to-[#2F5795] text-transparent bg-clip-text">
            41
            <sup className="bg-gradient-to-r from-[#FFA229] to-[#2F5795] text-transparent bg-clip-text">
              +
            </sup>
          </p>
          <p className="text-[#181617] font-bold">Awards Received</p>
        </div>
      </div>
    </div>
  );
};

export default ImportantNumber;
