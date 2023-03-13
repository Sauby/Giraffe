import React from "react";
import { useState } from "react";
import Menu from "/public/bx-menu.svg";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full">
      <div className="">
        <div className="md:max-w-[1200px] mx-auto h-16 bg-transparent text-white flex items-center justify-between">
          <div className="font-bold text-3xl">Giraffe</div>

          <img
            src={Menu}
            alt=""
            onClick={() => setToggle(!toggle)}
            className="block md:hidden"
          />
          {/* <div className="absolute bg-black bg-opacity-80 top-14 left-10">
          Halwa
        </div> */}
          <ul className="md:flex list-none hidden">
            <li className="px-4 py-2 hover:bg-yellow-500 rounded-lg">Home</li>
            <li className="px-4 py-2 hover:bg-yellow-500 rounded-lg">About</li>
            <li className="px-4 py-2 hover:bg-yellow-500 rounded-lg">
              Services
            </li>
            <li className="px-4 py-2 hover:bg-yellow-500 rounded-lg">
              Contact
            </li>
            <li className="px-4 py-2 hover:bg-yellow-500 rounded-lg">Search</li>
          </ul>
        </div>
        {toggle ? (
          <div>
            <ul className="list-none md:hidden block text-center">
              <li className="px-4 py-2 hover:bg-yellow-500 rounded-lg">Home</li>
              <li className="px-4 py-2 hover:bg-yellow-500 rounded-lg">
                About
              </li>
              <li className="px-4 py-2 hover:bg-yellow-500 rounded-lg">
                Services
              </li>
              <li className="px-4 py-2 hover:bg-yellow-500 rounded-lg">
                Contact
              </li>
              <li className="px-4 py-2 hover:bg-yellow-500 rounded-lg">
                Search
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;
