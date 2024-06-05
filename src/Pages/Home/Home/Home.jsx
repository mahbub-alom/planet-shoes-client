import React from "react";
import Slider from "./Slider/Slider";
import About from "./About/About";
import Testimonials from "./Testimonials/Testimonials";
import BestSelling from "./BestSelling/BestSelling";

const Home = () => {
  return (
    <div>
      <Slider />
      <BestSelling />
      <Testimonials />
      <About />
    </div>
  );
};

export default Home;
