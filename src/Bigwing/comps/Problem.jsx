import React from "react";
import ProblemImg from "/public/bigwing/problem.jpg";

const Problem = () => {
  return (
    <div className="text-center flex flex-col mx-8 items-center justify-center">
      <div className="text-3xl font-bold border-b border-yellow-500 mt-8 p-2 my-2">
        Do you have any business problem?
      </div>
      <img src={ProblemImg} alt="" />
      <div className="my-6 w-3/5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum hic
        modi nam necessitatibus animi quae nobis iste ipsa, eaque perferendis,
        temporibus labore officia consectetur quis consequuntur.
      </div>
      <div className="my-8">
        <button className="py-2 px-6 bg-yellow-500 rounded-full hover:transition-all hover:animate-bounce text-white">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Problem;
