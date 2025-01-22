// Import necessary React modules
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#011B5B] text-[#AAB5CD] py-8 font-[Inter]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-1">
            <p className="text-sm mb-4">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white text-lg">
                <i className="ri-facebook-circle-fill"></i>
              </a>
              <a href="#" className="text-white text-lg">
                <i className="ri-google-fill"></i>
              </a>
              <a href="#" className="text-white text-lg">
              <i className="ri-apple-fill"></i>
              </a>
              <a href="#" className="text-white text-lg">
              <i className="ri-instagram-line"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#FFA229] font-semibold mb-4">
              START A BUSINESS
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#">
                  Features
                </a>
              </li>
              <li>
                <a href="#">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#">
                  Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#FFA229] font-semibold mb-4">
              GOVERNMENT REGISTRATION
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#">
                  Partners
                </a>
              </li>
              <li>
                <a href="#">
                  Community
                </a>
              </li>
              <li>
                <a href="#">
                  Developers
                </a>
              </li>
              <li>
                <a href="#">
                  App
                </a>
              </li>
              <li>
                <a href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#FFA229] font-semibold mb-4">
              COMPLIANCE & TAX
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#">
                  Channels
                </a>
              </li>
              <li>
                <a href="#">
                  Scale
                </a>
              </li>
              <li>
                <a href="#">
                  Watch the Demo
                </a>
              </li>
              <li>
                <a href="#">
                  Our Competition
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#FFA229] font-semibold mb-4">BIS & CDSCO</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">
                  About Us
                </a>
              </li>
              <li>
                <a href="#">
                  News
                </a>
              </li>
              <li>
                <a href="#">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#">
                  Media Kit
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm mt-8 pt-4">
          &copy; 2024 Registerkaro. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
