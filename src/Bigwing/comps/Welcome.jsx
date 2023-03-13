import React from "react";
import WelcomeImg from "/public/bigwing/welcome.png";

const Welcome = () => {
  return (
    <div className="mx-8 mt-10 text-center flex flex-col items-center justify-center">
      <div className="border-b border-yellow-500 text-3xl font-semibold">
        Welcome to Our Company
      </div>
      <img src={WelcomeImg} alt="" className="w-3/4 my-8" />
      <div className="my-4 w-4/5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita autem
        iusto aperiam, aspernatur cumque placeat distinctio enim labore, fugiat
        totam blanditiis mollitia ut. Porro deserunt aperiam placeat! Sequi
        facere vel.
      </div>
      <div className="my-8">
        <button className="text-white px-6 py-2 bg-yellow-500 font-bold rounded-full text-lg my-3 hover:transition-all hover:animate-bounce">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Welcome;
