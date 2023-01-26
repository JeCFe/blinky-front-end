import React from "react";
import { useEffect, useState } from "react";
import { Configuration, BlinkyBackEndApi } from "../generated-sources/openapi";
import Spinner from "../components/Spinner/Spinner";
import DeskPage from "./DeskPage";
import LoginForm from "../components/LoginForm/LoginForm";

const configuration = new Configuration({
  basePath: "http://FargateALB-446711393.us-east-1.elb.amazonaws.com",
});

export const BookingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogegdIn, setIsLoggedIn] = useState(false);
  const [isShowLogin, setIsShowLogin] = useState(true);

  useEffect(() => {
    const api = new BlinkyBackEndApi(configuration);
    api.testGet().then((response) => {
      console.log(response);
    });
  }, []);

  const loadingPage = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1);
  };
  return (
    <div className="background" onClick={loadingPage}>
      {!isLogegdIn ? (
        <LoginForm isShowLogin={isShowLogin} />
      ) : (
        <div>{isLoading ? <Spinner /> : <DeskPage />} </div>
      )}
    </div>
  );
};
