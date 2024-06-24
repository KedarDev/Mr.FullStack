import React from "react";
import { useField } from "formik";

const AddFeedField = ({ label, ...props }) => {
   
    const [field, meta] = useField(props);
   
    return (

        <>
        <textarea
          {...field}
          {...props}
          className="w-full rounded-lg p-2 text-sm bg-[#808080] border border-transparent appearance-none rounded-tg placeholder-black"
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
  
  export default AddFeedField;