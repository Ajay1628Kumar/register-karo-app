import React from "react";

const Client = () => {
  return (
    <div className="bg-[#FAFAFA] bg-[url(/images/brands.png)]  bg-cover bg-center text-center p-16 border-b-2 border-[#D1D1D199] font-[inter]">
      <h1 className="text-[#272D37] text-3xl font-bold">Our Happy Clients</h1>
      <p className="text-[#666666] font-normal mt-3">
        Professionally cultivate one-to-one customer service with robust ideas.
        Dynamically innovate resource-leveling customer service for state of the
        art customer service.
      </p>

      <button className="text-white bg-[#1C4670] p-2 rounded-md mt-32 md:mt-60">
        Show more <i className="ri-arrow-right-circle-line"></i>
      </button>
    </div>
  );
};

export default Client;
