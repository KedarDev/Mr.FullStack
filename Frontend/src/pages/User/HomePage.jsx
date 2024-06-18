import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Navbar from "../../components/HomePageComponents/Navbar";
import Hero from "../../components/HomePageComponents/Hero";
import About from "../../components/HomePageComponents/About";
import Experience from "../../components/HomePageComponents/Experience";
import Tech from "../../components/HomePageComponents/Tech";
import Works from '../../components/HomePageComponents/Works';
import Resume from "../../components/HomePageComponents/Resume";
import Contact from "../../components/HomePageComponents/Contact";
import ScrollToTop from "../../components/HomePageComponents/scrollToTop";

const HomePage = () => {
  return (
    <div className="relative z-0 ">
      <div className="bg-hero-patttern bg-cover bg-no-repeat bg-center">
      <Navbar  />
      <br />
      <br />
      <Hero  className="mobile-s:w-[100%]"/>
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Resume />
      <div className="relative z-0">
      <Contact />
      <ScrollToTop />
      </div>
    </div>
  )
}

export default HomePage