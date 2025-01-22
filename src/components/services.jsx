import React from "react";

const Services = () => {
  return (
    <div className="pt-20 pb-20 bg-[#FAFAFA] flex flex-col justify-center items-center border-b-2 border-[#D1D1D199] font-[inter]">
      <div className="text-center">
        <h2 className="text-[#EB8D15] font-normal text-sm">
          WELCOME TO REGISTERKARO.IN
        </h2>
        <h1 className="text-[#272D37] text-2xl mt-4 font-bold">
          Explore Our Services
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center md:gap-10">
        <div className="text-center mt-10 md:mt-14 w-72 md:w-96">
          <i className="ri-macbook-line text-4xl text-[#FFA229]"></i>
          <h2 className="text-xl font-extrabold mt-3">Company Formation</h2>
          <p className="text-lg mt-4 text-[#282728]">
            Build web-based solutions that enhance customer experience.
          </p>
          <button className="text-[#001038] text-lg mt-10">
            Learn more <i className="ri-arrow-right-circle-line"></i>
          </button>
        </div>

        <div className="text-center mt-10 md:mt-14 w-72 md:w-96">
          <i className="ri-box-3-fill text-4xl text-[#FFA229]"></i>
          <h2 className="text-xl font-extrabold mt-3">
            Company Secretarial Services
          </h2>
          <p className="text-lg mt-4 text-[#282728]">
            Make data-driven decisions and utilize technology to reach business
            goals.
          </p>
          <button className="text-[#001038] text-lg mt-10">
            Learn more <i className="ri-arrow-right-circle-line"></i>
          </button>
        </div>

        <div className="text-center mt-10 md:mt-14 w-72 md:w-96">
          <i className="ri-group-3-fill text-4xl text-[#FFA229]"></i>
          <h2 className="text-xl font-extrabold mt-3">
            Virtual Office Address
          </h2>
          <p className="text-lg mt-4 text-[#282728]">
            Foster customer relationships by effectively serving your market.
          </p>
          <button className="text-[#001038] text-lg mt-10">
            Learn more <i className="ri-arrow-right-circle-line"></i>
          </button>
        </div>

        <div className="text-center mt-10 md:mt-14 w-72 md:w-96">
          <i className="ri-box-3-fill text-4xl text-[#FFA229]"></i>
          <h2 className="text-xl font-extrabold mt-3">
            Annual Compliance Services
          </h2>
          <p className="text-lg mt-4 text-[#282728]">
            Turn your ideas into modern products with our design experts.
          </p>
          <button className="text-[#001038] text-lg mt-10">
            Learn more <i className="ri-arrow-right-circle-line"></i>
          </button>
        </div>

        <div className="text-center mt-10 md:mt-14 w-72 md:w-96">
          <i className="ri-shopping-cart-fill text-4xl text-[#FFA229]"></i>{" "}
          <h2 className="text-xl font-extrabold mt-3">Payroll Services</h2>
          <p className="text-lg mt-4 text-[#282728]">
            Expand your business across the globe with minimal effort.
          </p>
          <button className="text-[#001038] text-lg mt-10">
            Learn more <i className="ri-arrow-right-circle-line"></i>
          </button>
        </div>

        <div className="text-center mt-10 md:mt-14 w-72 md:w-96">
          <i className="ri-macbook-fill text-4xl text-[#FFA229]"></i>{" "}
          <h2 className="text-xl font-extrabold mt-3">Bookkeeping Services</h2>
          <p className="text-lg mt-4 text-[#282728]">
            Steering user behaviours with creative design, data insights &
            technology.
          </p>
          <button className="text-[#001038] text-lg mt-10">
            Learn more <i className="ri-arrow-right-circle-line"></i>
          </button>
        </div>
      </div>

      <button className="p-2 bg-[#1C4670] rounded-md text-[#ffffff] mt-14">
        See All Services
      </button>
    </div>
  );
};

export default Services;
