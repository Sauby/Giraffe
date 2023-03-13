import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b to-indigo-900 from-violet-500 text-white p-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="uppercase text-3xl font-bold">Giraffe</div>
        <div className="my-4 flex justify-evenly">
          <div className="my-4">
            <div className="text-xl my-4">
              <span className="border-b-2 border-yellow-500 ">Useful Link</span>
            </div>
            <ul>
              <li className="py-2">About us</li>
              <li className="py-2">About services</li>
              <li className="py-2">About Department</li>
              <li className="py-2">Services</li>
              <li className="py-2">Contact us</li>
            </ul>
          </div>
          <div className="my-4">
            <div className="text-xl my-4">
              <span className="border-b-2 border-yellow-500 ">
                The Services
              </span>
            </div>
            <ul>
              <li className="py-2">About us</li>
              <li className="py-2">About services</li>
              <li className="py-2">About Department</li>
              <li className="py-2">Services</li>
              <li className="py-2">Contact us</li>
            </ul>
          </div>
          <div className="my-4">
            <div className="text-xl my-4">
              <span className="border-b-2 border-yellow-500 ">Contact Us</span>
            </div>
            <ul>
              <li className="py-2">About us</li>
              <li className="py-2">About services</li>
              <li className="py-2">About Department</li>
              <li className="py-2">Services</li>
              <li className="py-2">Contact us</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center flex-col">
          <div className="uppercase text-xl my-4">newsletter</div>
          <input
            type="email"
            className="w-80 p-2 outline-none border-none text-black"
            placeholder="Enter your email"
          />
          <button className="py-2 px-6 bg-yellow-500 rounded-full hover:transition-all hover:animate-bounce my-4">
            Send
          </button>
        </div>
        <hr />
        <div className="py-4 text-center">
          &copy; 2022 All Rights Reserved. Built by
          <a href="https://Sauby.github.io">&nbsp;Sauby.</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
