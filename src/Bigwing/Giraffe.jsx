import React from "react";
import Hero from "./comps/Hero";
import Welcome from "./comps/Welcome";
import Services from "./comps/Services";
import WhyChooseUs from "./comps/WhyChooseUs";
import Problem from "./comps/Problem";
import Contact from "./comps/Contact";
import Footer from "./comps/Footer";

const Giraffe = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Services />
      <Problem />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Giraffe;
