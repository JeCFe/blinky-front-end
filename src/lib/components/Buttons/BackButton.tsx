import React from "react";
import "./BackButton.css";
import { NavLink } from "react-router-dom";

const BackButton = () => {
  return (
    <div className="back-btn-padding">
      <NavLink to="/" className="back-btn">
        Back
      </NavLink>
    </div>
  );
};

export default BackButton;
