import React from "react";
import SpinnerHommer from "../../Assets/SpinnerHomer.png";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-background">
      <img alt="spinner" src={SpinnerHommer} />
      <p className="spinner-loading-info"> Loading Data... </p>
    </div>
  );
};

export default Spinner;
