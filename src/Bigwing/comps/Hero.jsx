import React from "react";
import Nav from "./Nav";
import Slider from "/public/bigwing/slider-img.png";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-indigo-900 text-white min-h-screen">
      <Nav />
      <div className="flex md:justify-between justify-center items-center max-w-[1200px] mx-auto mt-[8rem]">
        <div className="flex flex-col text-center md:text-left h-full">
          <div className="text-4xl font-bold w-full">
            Start <br /> Business with <br /> our Company
          </div>
          <div className="my-6 md:w-4/5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio
            nam dolorem nisi omnis, fugiat deserunt provident nobis doloribus
            tenetur qui ipsa?
          </div>
          <div>
            <button className="px-6 py-2 bg-yellow-500 rounded-full text-lg my-3  hover:transition-all hover:animate-bounce">
              Read more
            </button>
          </div>
        </div>
        <div className="hero-img my-3 hidden md:block">
          <img src={Slider} alt="" className="bg-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
