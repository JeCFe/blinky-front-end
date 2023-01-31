import React from "react";
import "./BackButton.css";
import { NavLink } from "react-router-dom";

const BackButton = () => {
  return (
    <div className="back-btn-padding">
      <NavLink to="/" className="button-53">
        Back
      </NavLink>
    </div>
  );
};

export default BackButton;
