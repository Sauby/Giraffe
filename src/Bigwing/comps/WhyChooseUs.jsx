import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-violet-500 text-white text-center">
      <div className="text-3xl font-bold pt-12 flex items-center justify-center">
        <div className="p-3 border-b">Why Choose Us</div>
      </div>
      <div className="my-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
        cumque. Labore odit quibusdam cum recusandae dolores optio ratione, quod
        velit.
      </div>
      <div className="my-6 grid grid-cols-2 gap-10 md:grid-cols-4">
        <div className="text-2xl">
          <div>99%</div>
          <div>
            SATISFIED <br /> CLIENTS
          </div>
        </div>
        <div className="text-2xl">
          <div>5000+</div>
          <div>
            AWESOME <br /> PLANNING
          </div>
        </div>
        <div className="text-2xl">
          <div>3800+</div>
          <div>CLIENTS</div>
        </div>
        <div className="text-2xl">
          <div>10000+</div>
          <div>
            DAILY <br /> BUSINESS
          </div>
        </div>
      </div>
      <div className="my-8 h-10"></div>
    </div>
  );
};

export default WhyChooseUs;
