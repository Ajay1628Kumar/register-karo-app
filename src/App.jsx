import React from "react";
import Navbar from "./components/navbar";
import Brands from "./components/brands";
import Services from "./components/services";
import About from "./components/about";
import Intro from "./components/introduction";
import Client from "./components/clients";
import Process from "./components/process";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Transformation from "./components/transformation";
import MoreBrands from "./components/moreBrands";
import ImportantNumber from "./components/importantNum";
import Connect from "./components/connect";
import Hero from "./components/hero";
import Review from "./components/review";

const App = () => {
  let arr = [
    {
      imgSrc: "/images/img1.jpeg",
      imgH31: "Prabhash Mishra • 1 Jan 2023 • Today",
      imgH1: "Small business & Startup",
      imgH32:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    },
    {
      imgSrc: "/images/img2.jpeg",
      imgH31: "Prabhash Mishra • 1 Jan 2023 • Today",
      imgH1: "Small business & Startup",
      imgH32:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    },
    {
      imgSrc: "/images/img1.jpeg",
      imgH31: "Prabhash Mishra • 1 Jan 2023 • Today",
      imgH1: "Small business & Startup",
      imgH32:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    },
    {
      imgSrc: "/images/img3.jpeg",
      imgH31: "Prabhash Mishra • 1 Jan 2023 • Today",
      imgH1: "Small business & Startup",
      imgH32:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    },
    {
      imgSrc: "/images/img4.jpeg",
      imgH31: "Prabhash Mishra • 1 Jan 2023 • Today",
      imgH1: "Small business & Startup",
      imgH32:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    },
    {
      imgSrc: "/images/img5.jpeg",
      imgH31: "Prabhash Mishra • 1 Jan 2023 • Today",
      imgH1: "Small business & Startup",
      imgH32:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    },
  ];
  return (
    <div>
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <About />
      <Intro />
      <Client />
      <Process />
      <div className="p-10 border-b-2 border-[#D1D1D199]">
        <h3 className="text-[#EB8D15] text-base font-light text-center">
          EXPLORE OUR BLOGS
        </h3>

        <h1 className="text-[#3C2109] text-3xl text-center mt-4 font-bold">
          Accelerate Digital Transformation
        </h1>
        <div className="mt-10 grid grid-cols-1 place-items-center lg:grid-cols-3">
          {arr.map((data) => {
            return (
              <Transformation
                imgSrc={data.imgSrc}
                imgH1={data.imgH1}
                imgH31={data.imgH31}
                imgH32={data.imgH32}
              />
            );
          })}
        </div>
      </div>
      <Review/>
      <FAQ />
      <ImportantNumber />
      <Connect />
      <MoreBrands />
      <Footer />
    </div>
  );
};

export default App;
