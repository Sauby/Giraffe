import React from "react";
import s1 from "/public/bigwing/s-1.jpg";
import s2 from "/public/bigwing/s-2.jpg";
import s3 from "/public/bigwing/s-3.jpg";

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-violet-500 text-white">
      <div className="flex flex-col items-center justify-between max-w-[1200px] mx-auto">
        <div className="text-3xl border-b border-yellow-500 font-semibold my-8">
          Our Services
        </div>
        <div className="text-center mx-8 flex flex-wrap lg:flex-nowrap">
          <div className="mx-8 my-8 flex flex-col items-center justify-center">
            <img src={s1} alt="" className="rounded-lg" width={300} />
            <div className="text-2xl font-bold">
              Business <br /> Consultant
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias sunt id vero laborum sed, nisi optio quidem eveniet
              eaque provident.
            </div>
          </div>
          <div className="mx-8 my-8 flex flex-col items-center justify-center">
            <img src={s2} alt="" className="rounded-lg" width={300} />
            <div className="text-2xl font-bold">
              Marketing <br /> Analytics
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias sunt id vero laborum sed, nisi optio quidem eveniet
              eaque provident.
            </div>
          </div>
          <div className="mx-8 my-8 flex flex-col items-center justify-center">
            <img src={s3} alt="" className="rounded-lg" width={300} />
            <div className="text-2xl font-bold">
              Financial <br /> Planning
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias sunt id vero laborum sed, nisi optio quidem eveniet
              eaque provident.
            </div>
          </div>
        </div>
        <div className="my-8">
          <button className="py-2 px-6 bg-yellow-500 rounded-full hover:transition-all hover:animate-bounce">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
