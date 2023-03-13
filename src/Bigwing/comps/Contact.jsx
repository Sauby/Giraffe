import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="text-3xl font-bold text-center">Contact Us</div>
      <div className="my-2 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        minima.
      </div>
      <div className="flex justify-between">
        <input
          type="text"
          className="bg-gray-50 p-3 w-full outline-none mx-4 my-4 hover:bg-gray-200 shadow-md"
          placeholder="Name..."
        />
        <input
          type="email"
          className="bg-gray-50 p-3 w-full outline-none mx-4 my-4 hover:bg-gray-200 shadow-md"
          placeholder="Email..."
        />
      </div>
      <div className="flex justify-between">
        <input
          type="number"
          className="bg-gray-50 p-3 w-full outline-none mx-4 my-4 hover:bg-gray-200 shadow-md"
          placeholder="Phone..."
        />
        <input
          type="Country"
          className="bg-gray-50 p-3 w-full outline-none mx-4 my-4 hover:bg-gray-200 shadow-md"
          placeholder="Country..."
        />
      </div>
      <textarea
        className="bg-gray-50 p-3 outline-none m-4  hover:bg-gray-200 shadow-md w-11/12"
        placeholder="Message"
      />
      <div className="my-8 flex items-center justify-center">
        <button className="py-2 px-6 bg-indigo-900 text-white rounded-full hover:transition-all hover:animate-bounce">
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
