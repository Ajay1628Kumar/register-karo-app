import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="h-11 bg-[#1C4670] font-[inter]">

        <nav className="list-none h-full md:mr-5 flex gap-2 md:gap-3 justify-center items-center md:justify-end text-xs md:text-base text-[#FFFFFF]">
          <li>
            <i className="ri-mail-fill"></i> www.registerkaro.in
          </li>

          <div className="h-7 w-0.5 bg-gradient-to-b from-black from-0% via-[#D0D0D0] via-100% to-black to-0%"></div>

          <li>
            <i className="ri-phone-fill"></i> +918447746183
          </li>

          <div className="h-7 w-0.5 bg-gradient-to-b from-black from-0% via-[#D0D0D0] via-100% to-black to-0%"></div>

          <div className="flex gap-3 text-[#E6ECFD]">
            <li>
              <i className="ri-instagram-line"></i>
            </li>
            <li>
              <i className="ri-facebook-circle-fill"></i>
            </li>
            <li>
              <i className="ri-twitter-fill"></i>
            </li>
            <li>
              <i className="ri-pinterest-fill"></i>
            </li>
          </div>
        </nav>
      </div>

      {/* Main Navbar */}
      <div className="h-20 w-screen border-b-2 border-[#D1D1D199] bg-[#FFFFFF] font-[Open]">
        <nav className="h-full flex justify-between items-center list-none text-[#272D37] pl-5 pr-5">
          <div>
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-36 md:w-52 md:h-9"
            />
          </div>

          <div className="flex justify-center items-center md:gap-4 font-semibold">
            {/* Desktop Navbar Items */}
            <div className="hidden lg:flex justify-center items-center gap-4 font-semibold">
              <li className="hover:text-[#FFA229] cursor-pointer transition duration-200">
                Home
              </li>

              {/* Dropdown for Services */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <li className="cursor-pointer hover:text-[#FFA229] transition duration-200">
                    Our Services <i className="ri-arrow-down-s-line"></i>
                  </li>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2 bg-white border border-gray-200 rounded-md shadow-lg">
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#FFA229] hover:text-white  duration-200">
                    Service 1
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#FFA229] hover:text-white duration-200">
                    Service 2
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#FFA229] hover:text-white duration-200">
                    Service 3
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <li className="hover:text-[#FFA229] cursor-pointer  duration-200">
                Blog
              </li>
              <li className="hover:text-[#FFA229] cursor-pointer  duration-200">
                Contact Us
              </li>
              <li className="hover:text-[#FFA229] cursor-pointer  duration-200">
                About us
              </li>

              <li className="cursor-pointer hover:text-[#FFA229]">
                <i className="ri-search-line"></i>
              </li>

              <li className="bg-[#FFA229] p-2 rounded-md font-bold text-[#FFFFFF] cursor-pointer hover:bg-[#FF8C1A] duration-200">
                Talk An Expert
              </li>
            </div>

            {/* Mobile Navbar - Dropdown Menu */}
            <div className="visible lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <button aria-label="Open menu" className="text-2xl">
                    <i className="ri-menu-3-line"></i>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 p-2 bg-white border border-gray-200 rounded-md shadow-lg">
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#FFA229] hover:text-white duration-200">
                    Home
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#FFA229] hover:text-white duration-200">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <div className="cursor-pointer hover:text-[#FFA229] duration-200">
                          Our Services <i className="ri-arrow-down-s-line"></i>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="p-2 bg-white border border-gray-200 rounded-md shadow-lg">
                        <DropdownMenuItem className="cursor-pointer hover:bg-[#FFA229] hover:text-white  duration-200">
                          Service 1
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer hover:bg-[#FFA229] hover:text-white duration-200">
                          Service 2
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer hover:bg-[#FFA229] hover:text-white duration-200">
                          Service 3
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#FFA229] hover:text-white duration-200">
                    Blog
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#FFA229] hover:text-white duration-200">
                    Contact Us
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#FFA229] hover:text-white duration-200">
                    About us
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="bg-[#FFA229] p-2 rounded-md font-bold text-[#FFFFFF]">
                      Talk An Expert
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
