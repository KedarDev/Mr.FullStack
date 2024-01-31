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
    <nav className="w-full flex items-center py-0 fixed top-0 bg-white z-20">
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex w-[80%] items-center justify-center gap-2"
          onClick={() => {
            setActive(""); // keeps track of where the user is on the page
            window.scrollTo(0, 0);
          }}
        >
          <img
            // onClick={}
            src={darkflash}
            alt="darkflash"
            className=" w-6 h-6 top-1 left-0 object-cover flex justify-center items-center"
          />
  &nbsp; <span className="flex mx-auto justify-center item">
          <img
            // onClick={}
            src={mflogo}
            alt="mflogo"
            className=" mx-auto flex w-full h-8 justify-content items-center object-contain"
          />
          </span>
        </Link>
        <ul className="list-none hidden sm:flex mx-auto flex-row gap-6">
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
            <div className="Button w-28 h-6 relative right-1 bottom-[3px] ">
              <div className="Buttonbox w-28 h-8 left-0  absolute mix-blend-hard-light bg-black rounded-xl shadow border-2 border-zinc-800" />
              <div className="Login w-28 h-8 left-[3px] top-[3px] absolute text-center text-white text-[18px] font-normal font-['Inter']">
                Login
              </div>
            </div>
          </a>
        </ul>
        {/* Hamberger Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            className="h-10 w-10 top-0 left-0 object-contain cursor-pointer"
            src={toggle ? closeMenu : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-8 right-[-15px] mx-4 my-2 min-w[140px] 
          z-10  rounded-xl  border-[3px] border-solid  [background:linear-gradient(180deg,rgb(64,64,64)_99.99%,rgba(255,255,255,0)_100%)]`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLink.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-[#808080]" : "text-black"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
              <a href="">
                <div className="Button w-28 h-6 relative">
                  <div className="Buttonbox w-28 h-8 left-0 top-0 absolute mix-blend-hard-light bg-black rounded-xl shadow border-4 border-zinc-800" />
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
