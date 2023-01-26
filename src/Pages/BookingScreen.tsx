import React from "react";
import { useEffect, useState } from "react";
import { Configuration, BlinkyBackEndApi } from "../generated-sources/openapi";
import Spinner from "../components/Spinner";
import DeskPage from "./DeskPage";

const configuration = new Configuration({
  basePath: "http://FargateALB-446711393.us-east-1.elb.amazonaws.com",
});

export const BookingScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

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
    <div>
      <button onClick={loadingPage} />
      {isLoading ? <Spinner /> : <DeskPage />}
    </div>
  );
};
