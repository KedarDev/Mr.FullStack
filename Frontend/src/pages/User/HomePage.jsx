import React, {useEffect} from 'react'
import Navbar from "../../components/HomePageComponents/Navbar";
import Hero from "../../components/HomePageComponents/Hero";
import About from "../../components/HomePageComponents/About";
import Experience from "../../components/HomePageComponents/Experience";
import Tech from "../../components/HomePageComponents/Tech";
import Works from '../../components/HomePageComponents/Works';
import Resume from "../../components/HomePageComponents/Resume";
import Contact from "../../components/HomePageComponents/Contact";
import ScrollToTop from '../../components/HomePageComponents/ScrollToTop';

const HomePage = () => {

  useEffect(() => {
    document.title = "MRFULLSTACK | Portfolio APP";
  }, []);

  return (
    <section className="relative z-0 ">
      <section className="dark:bg-white  dark:h-[66px] dark:w-screen  bg-hero-patttern bg-cover  bg-center">
      <Navbar  className="" />
      <br />
      <br />
      <Hero  className=""/>
      </section>
      <About  className=""/>
      <Experience />
      <Tech  />
      <Works /> 
      <Resume  className=""/>
      <section className="">
      <Contact />
      <ScrollToTop />
      </section>
    </section>
  )

}

export default HomePage