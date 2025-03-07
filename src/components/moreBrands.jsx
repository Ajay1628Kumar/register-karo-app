import React from "react";

const MoreBrands = () => {
  let imgData = [
    {
      imgSrc: "/images/coinbase-logo.png",
    },
    {
      imgSrc: "/images/spotify-logo.png",
    },
    {
      imgSrc: "/images/dropbox-logo.png",
    },
    {
      imgSrc: "/images/slack-logo.png",
    },
    {
      imgSrc: "/images/webflow-logo.png",
    },
    {
      imgSrc: "/images/zoom-logo.png",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center bg-[#ffffff] p-10 pb-0 border-b-2 border-[#D1D1D199] font-[inter]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-10 gap-y-5">
        {imgData.map((data) => {
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

export default MoreBrands;
