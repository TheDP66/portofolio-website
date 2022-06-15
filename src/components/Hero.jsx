import React from "react";
import Portfolio from "./Portfolio";
import About from "./About";
import Course from "./Course";
import Client from "./Client";
import Contact from "./Contact";
import Profile from "./Profile";

const Hero = () => {
  return (
    <div id="home">
      <Profile />
      <About />
      <Portfolio />
      {/* <Client /> */}
      <Course />
      <Contact />
    </div>
  );
};

export default Hero;
