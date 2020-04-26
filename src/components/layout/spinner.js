import React from "react";
import spin from "./spinner.gif";
const spinner = () => {
  return (
    <div>
      <img
        src={spin}
        alt="loading...."
        style={{ display: "block", margin: "auto", width: "200px" }}
      />
    </div>
  );
};

export default spinner;
