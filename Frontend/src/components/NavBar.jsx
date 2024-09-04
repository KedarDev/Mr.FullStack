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
        <nav className="bg-black w-full">
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
            <ul
            className="mt-[-80px] ml-[290px] grid grid-cols-4 w-[45%] space-y-0 text-center"
            // className=" desktop:ml-[700px] desktop:mt-[20px] desktop-s:ml-[604px] laptop-l:ml-[400px] laptop-l:mt-[.2px] mobile-s:grid mobile-m:grid mobile-l:grid mobile-l:w-[120%] mobile-m:w-[115%] mobile-s:w-[110%] mobile-s:mt-[20px] mobile-m:mt-[-20px] mobile-l:mt-[-20px] mobile-l:ml-[-28px] mobile-m:ml-[-25px]  mobile-s:ml-[-20px] mt-[-80px] pl-[40px] ml-[250px] grid grid-cols-4 w-[50%]  items-center justify-center space-y-0 md:flex md:space-x-6  md:space-y-0"
            
            >
              <li>
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
                <div className="w-[80%] border-[2px] h-[25px] text-center border-red-700 align-middle">

                <a
                  className=" laptop-l:text-[20px] text-[12px] text-white hover:text-red-800 cursor-pointer"
                  onClick={() => logout()}
                  >
                  Logout
                </a>
                  </div>
              </li>
              <li className="">
                <img
                className="ml-[-80px] mt-[-18px] w-[180px] h-[12px] " src={MFLogo} width={300} 
                // className=" laptop-l:ml-[200px] desktop:mt-[50px] desktop:h-[25px] desktop:ml-[360px] desktop-s:ml-[955px] desktop-s:mt-[-32px] laptop-l:mt-[30px] tablet:ml-[100px] mobile-s:ml-[100px] mobile-s:mt-[20px] tablet:mt-[20px] mobile-m:ml-[110px] mobile-m:mt-[20px] mobile-l:ml-[140px] mobile-l:mt-[20px]  ml-[-100px] mt-[-14px] " src={MFLogo} width={300} 
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    )
  };
  export default NavBar;