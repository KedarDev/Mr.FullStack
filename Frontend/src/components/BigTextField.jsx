import React from "react";
import { useField } from "formik";


const BigTextField = ({ label, ...props }) => {

    const [field, meta] = useField(props);


    return (
        <>
      <label className="block mb-2 text-sm text-white">{label}</label>
      <textarea
        {...field}
        {...props}
        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md  focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
        onKeyPress={(e) => {
          if (e.key === "Enter") e.preventDefault();
        }}
      ></textarea>

      {meta.touched && meta.error ? (
        <p className="text-red-600 text-xs italic mt-1">{meta.error}</p>
      ) : null}
</>
    )
  };
  
  export default BigTextField;