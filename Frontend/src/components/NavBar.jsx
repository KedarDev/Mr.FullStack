import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import MFLogo from "../../src/assets/MFLogo.png";

import { AppContext } from "../context/applicationContext";

const NavBar = ({ pageTitle = "MrFullStack Portfolio APP" }) => {
  const appContext = useContext(AppContext);
  const [navbar, setNavbar] = useState(false);

  const logout = () => {
    appContext.logout();
  };

  return (
    <nav className="bg-black">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <h4 className=" laptop-l:text-[60px] text-white text-3xl font-semibold">
              {pageTitle}
            </h4>
            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border-red-800 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 px-0 lg:px-16 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className=" laptop:ml-[80px] mobile-s:grid mobile-s:w-screen mobile-s:mt-[-40px] mobile-s:ml-[20px] mobile-s:space-x-[-60px]   mt-[-80px] ml-[290px]    grid grid-cols-4 w-[45%] space-y-0 text-center justify-center align-middle items-center">
              <li className="flex">
                <Link
                  className=" laptop-l:text-[20px] text-[12px] text-white hover:text-red-800"
                  to="/app/dashboard"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="laptop-l:text-[20px] mobile-s:ml-[-10px] text-[12px] text-white hover:text-red-800"
                  to="/app/myFeeds"
                >
                  My Feeds
                </Link>
              </li>
              <li>
                <Link
                  className=" laptop-l:text-[20px] mobile-s:ml-[5px] text-[12px]  text-white hover:text-red-800"
                  to="/app/profile"
                >
                  Profile
                </Link>
              </li>
              <li>
                <div className="w-[80%] border-[4px] h- text-center border-red-700 mobile-s:border-hidden laptop:h-[30px] align-middle">
                  <a
                    className=" laptop:mt-[100px] laptop-l:text-[20px] text-[12px] text-white hover:text-red-800 cursor-pointer"
                    onClick={() => logout()}
                  >
                    Logout
                  </a>
                </div>
              </li>
              <li className="">
                <img
                  className=" mobile-s:hidden ml-[-80px] mt-[-18px] laptop:mt-[-24px] justify-center align-middle items-center w-[180px] h-[12px] laptop:ml-[-180px] laptop:h-[18px] laptop:w-[400px] "
                  src={MFLogo}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
