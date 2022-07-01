import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Triangle } from "react-loader-spinner";
export default function MainLoader() {
  return (
    <div className="mainLoader__container">
      <Triangle
        width="130"
        height="130"
        ariaLabel="loading-indicator"
        color="#4f78f9"
      />
    </div>
  );
}
