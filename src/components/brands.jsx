import React from "react";

const Brands = () => {
  let imgD = [
    {
      imgSrc: "/images/oracle-logo.png",
    },
    {
      imgSrc: "/images/samsung-logo.png",
    },
    {
      imgSrc: "/images/morpheus-logo.png",
    },
    {
      imgSrc: "/images/monday-logo.png",
    },
    {
      imgSrc: "/images/segment-logo.png",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center bg-[#ffffff] p-10 pb-0 border-b-2 border-[#D1D1D199] font-[inter]">
      <div>
        <h1 className="text-lg text-center md:text-2xl text-[#272D37] font-bold">
          Trusted By Over 100+ Startups and freelance business
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 gap-y-5">
        {imgD.map((data) => {
          return (
            <img
              src={data.imgSrc}
              className="w-24 md:w-36 aspect-square"
              alt="oracle-logo"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
