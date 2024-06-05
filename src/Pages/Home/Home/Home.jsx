import React from "react";
import Slider from "./Slider/Slider";
import About from "./About/About";
import Testimonials from "./Testimonials/Testimonials";
import BestSelling from "./BestSelling/BestSelling";
import BestSeller from "./BestSeller/BestSeller";

const Home = () => {
  return (
    <div>
      <Slider />
      <BestSelling />
      <BestSeller/>
      <Testimonials />
      <About />
    </div>
  );
};

export default Home;
