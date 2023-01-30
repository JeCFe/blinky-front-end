import React from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm/LoginForm";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/organisation");
  };
  return (
    <div>
      <LoginForm />
      <button onClick={clickHandler}>Go to desk organisation</button>
    </div>
  );
};
