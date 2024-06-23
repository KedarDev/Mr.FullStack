import React from "react";

const Wrapper = (props) => {
  return <div className="app bg-gray-100 py-5">{props.children}</div>;
};

export default Wrapper;