import React from "react";

const Button = ({ text, fullWidth = true }) => {
    return <>
    <input
      type="submit"
      className={`${
        fullWidth && "w-full"
      } px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 focus:ring focus:ring-red-400 focus:ring-opacity-50`}
      value={text}
    />
  </>
 };
 
 export default Button;