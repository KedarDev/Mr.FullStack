import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import mflogo from "../../../src/assets/MFLogo.png";
import darkflash from "../../../src/assets/darkflash.png";
import menu from "../../../src/assets/menu.png";
import closeMenu from "../../../src/assets/closeMenu.png";
import { navLink } from "../../constants";

const Navbar = () => {
  const [active, setActive] = useState("");

  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} sticky-top-0 w-full desktop:h-[70px] laptop-l:h-[60px] h-12 flex items-center py-0 fixed top-0 bg-white z-20`}
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
            className=" desktop:w-[50px] desktop:h-[50px] laptop-l:w-[40px] laptop-l:h-[40px] laptop:ml-[10px] laptop:w-[40px] laptop:h-[40px] laptop-l:mt-[-3px] laptop:mt-[-8px] tablet:h-[28px] tablet:mt-[-3px] fixed w-6 h-6 top-3 left-0 object-cover flex justify-center items-center"
          />
          &nbsp;
          <span className="flex justify-center">
            <img
              // onClick={}
              src={mflogo}
              alt="mflogo"
              className=" desktop:ml-[26em] desktop:mt-[px] destop-:w-[500px] desktop:h-[70px] laptop-l:ml-[-10px] laptop-l:w-[500px] laptop-l:h-[60px] laptop-l:mt-[2px] laptop:w-[500px] laptop:h-[50px] laptop:ml-[10px] laptop:mt-0.4 tablet:w-full tablet:h-[49px] tablet:ml-[180px] tablet:mt-[5m] mobile-m:w-[220px] mobile-m:ml-[34px] mobile-l:ml-[65px] mobile-l:w-[220px] mobile-m:mt-[2px] mobile-s:w-[200px] mobile-s:ml-[15px] w-full flex h-10 mx-auto justify-content justify-center items-center object-contain"
            />
          </span>
        </Link>
        <ul className=" list-none hidden sm:flex laptop:flex laptop-l:flex desktop:flex  flex-row gap-5">
          {navLink.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-[#808080]" : "text-black"
              } hover:text-[#FF0000] desktop:text-[25px] laptop:text-[20px] laptop-l:text-[28px] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
          <a href="/user/Login">
            <div className=" desktop:mt-[6px] laptop-l:mt-[8px] laptop:mt-[3px] Button w-28 h-6 relative bottom-[3px] ">
              <div className="Buttonbox w-28 laptop-l:h-10 laptop-l:mt-[-3px] h-8 left-0  absolute mix-blend-hard-light bg-black rounded-xl shadow border-2 border-zinc-800 " />
              <div className="Login w-28 h-8 left-[2px] top-[3px] absolute text-center text-white laptop-l:text-[30px] laptop-l:mt-[-10px] text-[18px] font-normal font-['Inter']">
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
            z-10  rounded-[3%]  border-[3px] border-[#000] border-solid  [background:linear-gradient(180deg,rgb(64,64,64)_99.99%,rgba(255,255,255,0)_100%)]`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLink.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-[#808080]" : "text-white"
                  } font-poppins   text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
              <a href="/user/Login">
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
