import React from "react";
// import Hero from "./Hero";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Awards from "./Awards";
import Education from "./Education";

import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
function HomePage() {
  return (
    <>
      {/* <Navbar/> */}
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      {/* <Footer/> */}
      
    </>
  );
}
export default HomePage;
