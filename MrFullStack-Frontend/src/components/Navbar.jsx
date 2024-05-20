import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import mflogo from "../assets/mflogo.png";
import darkflash from "../assets/darkflash.png";
import menu from "../assets/menu.png";
import closeMenu from "../assets/closeMenu.png";
import { navLink } from "../../src/constants";

const Navbar = () => {
  const [active, setActive] = useState("");

  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} sticky-top-0 w-full h-12 flex items-center py-0 fixed top-0 bg-white z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1">
        <Link
          to="/"
          className="flex items-center justify-center mx-auto gap-2"
          onClick={() => {
            setActive(""); // keeps track of where the user is on the page
            window.scrollTo(0, 0);
          }}
        >
          <img
            // onClick={}
            src={darkflash}
            alt="darkflash"
            className="fixed w-6 h-6 top-3 left-0 object-cover flex justify-center items-center"
          />
          &nbsp;
          <span className="flex justify-center">
            <img
              // onClick={}
              src={mflogo}
              alt="mflogo"
              className=" mobile-m:w-[220px] mobile-m:ml-[34px] mobile-l:ml-[65px] mobile-l:w-[220px] mobile-m:mt-[2px] mobile-s:w-[200px] mobile-s:ml-[15px] w-full flex h-10 mx-auto justify-content justify-center items-center object-contain"
            />
          </span>
        </Link>
        <ul className=" list-none hidden sm:flex laptop:flex laptop-l:flex desktop:flex  flex-row gap-5">
          {navLink.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-[#808080]" : "text-black"
              } hover:text-[#FF0000] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
          <a href="">
            <div className="Button w-28 h-6 relative bottom-[3px] ">
              <div className="Buttonbox w-28 h-8 left-0  absolute mix-blend-hard-light bg-black rounded-xl shadow border-2 border-zinc-800 " />
              <div className="Login w-28 h-8 left-[2px] top-[3px] absolute text-center text-white text-[18px] font-normal font-['Inter']">
                Login
              </div>
            </div>
          </a>
        </ul>
        {/* Hamberger Menu */}
        <div className="sm:hidden laptop:hidden laptop-l:hidden desktop:hidden flex flex-1 justify-end items-center">
          <img
            className=" mobile-m:h-[32px] mobile-l:h-[32px] mobile-s:h-[30px] mobile-s:w-[30px] h-10 w-10 top-0 left-0 object-contain cursor-pointer"
            src={toggle ? closeMenu : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} 
            p-6 absolute top-8 right-[-15px] mx-4 my-2 min-w[140px] 
            z-10  rounded-xl  border-[3px] border-solid  [background:linear-gradient(180deg,rgb(64,64,64)_99.99%,rgba(255,255,255,0)_100%)]`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLink.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-[#808080]" : "text-white"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
              <a href="/">
                <div className="Button w-28 h-6 relative">
                  <div className="Buttonbox w-28 h-8 left-0 top-0 absolute mix-blend-hard-light bg-black rounded-xl shadow border-5 border-zinc-800" />
                  <div className="Login w-28 h-8 left-[3px] top-[3px] absolute text-center text-white text-[18px] font-normal font-['Inter']">
                    Login
                  </div>
                </div>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
