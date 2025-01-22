// Import necessary React modules
import React from "react";

const FAQ = () => {
  return (
    <div className=" mx-auto p-6 border-b-2 border-[#D1D1D199] font-[Inter]">
      <h1 className="text-2xl font-bold text-center text-brown-700 mb-4">
        Frequent Ask Questions
      </h1>
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-4 bg-white hover:bg-gray-50 cursor-pointer flex justify-between items-center text-[#0D1216]">
              <span>
                Can I recover deleted files from desktop with this software?
              </span>
              <span>&#x276F;</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="px-4 py-2 bg-[#1C4670] text-white rounded-lg ">
          Show more
        </button>
      </div>
    </div>
  );
};

export default FAQ;
