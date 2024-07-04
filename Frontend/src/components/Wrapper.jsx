import React from "react";

const Wrapper = (props) => {
  return <div className="app  bg-white dark:bg-black py-5">{props.children}</div>;
};

export default Wrapper;