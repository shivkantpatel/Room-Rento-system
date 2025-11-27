// src/components/ThreeDotsSpinner.js
import React from "react";
import { ThreeDots } from "react-loader-spinner";

const ThreeDotsSpinner = () => {
  return (
    <div className="spinner-container">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
      />
    </div>
  );
};

export default ThreeDotsSpinner;
