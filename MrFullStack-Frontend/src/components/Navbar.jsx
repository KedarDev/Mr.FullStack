import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import mflogo from "../assets/mflogo.png";
import darkflash from "../assets/darkflash.png";
import { navLink } from "../../src/constants";

const Navbar = () => {
  const [active, setActive] = useState("");

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-0 fixed top-0 bg-white z-20">
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/" 
          className="flex items-center gap-2"
          onClick={() => {
            setActive(""); // keeps track of where the user is on the page
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={darkflash}
            alt="darkflash"
            className="fixed w-6 h-6 top-1 left-0 object-cover"
          />
          <img
            src={mflogo}
            alt="mflogo"
            className="w-full h-8 ml-20 justify-center items-center object-contain  "
          />
        </Link>
        {navLink.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-" : "text-black"
              } hover:text-[#808080] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}     
      </div>
    </nav>
  );
};

export default Navbar;
