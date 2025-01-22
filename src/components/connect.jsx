import React from "react";

const Connect = () => {
  return (
    <div className=" bg-gradient-to-r from-[#FFA229] to-[#1C4670] flex flex-col justify-center items-center p-10 text-[#FFFFFF] font-[inter]">
      <h3 className="text-sm font-semibold">1% OF THE INDUSTRY</h3>
      <h1 className="text-4xl text-center font-bold mt-3">
        Welcome to your new digital reality. Now.
      </h1>

      <div className="mt-8 flex justify-center items-center">
        <input
          type="email"
          name="email"
          id="id"
          placeholder="Enter Your Email"
          className="rounded-md rounded-r-none h-10 text-black text-center placeholder:text-[#858C95] md:w-[420px]"
        />
        <button className="p-2 rounded-md rounded-l-none h-10 bg-[#FFA229]">
          Submit
        </button>
      </div>

      <div className="mt-8 md:flex gap-5 text-xl text-center">
        <p>
          <i className="ri-checkbox-circle-fill"></i> Instant results
        </p>
        <p>
          <i className="ri-checkbox-circle-fill"></i> User-friendly interface
        </p>
        <p>
          <i className="ri-checkbox-circle-fill"></i> Personalized customization
        </p>
      </div>
    </div>
  );
};

export default Connect;
