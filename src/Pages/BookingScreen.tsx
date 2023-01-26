import React from "react";
import { useEffect, useState } from "react";
import { Configuration, BlinkyBackEndApi } from "../generated-sources/openapi";
import Spinner from "../components/Spinner/Spinner";
import DeskPage from "./DeskPage";
import LoginForm from "../components/LoginForm/LoginForm";

export const BookingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogegdIn, setIsLoggedIn] = useState(false);

  let userName = "";

  const loadingPage = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1);
  };

  return (
    <div className="background" onClick={loadingPage}>
      {!isLogegdIn ? (
        <LoginForm />
      ) : (
        <div>{isLoading ? <Spinner /> : <DeskPage />} </div>
      )}
    </div>
  );
};
