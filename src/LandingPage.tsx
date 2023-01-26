import React from "react";
import Desk from "./components/Desks/Desk";
import SimpsonLogo from "./logo.png";
import { useEffect, useState } from "react";
import { Configuration, BlinkyBackEndApi } from "./generated-sources/openapi";
import { deskInfo } from "./components/Desks/Desk";
import "./App.css";
import "./Grid.css";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const loadingPage = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1);
  };

  return (
    <div>
      <header className="App-header" onClick={loadingPage}>
        {isLoading ? (
          <div>
            <img className="Spinner" alt="" />
          </div>
        ) : (
          <img src={SimpsonLogo} className="App-logo" alt="logo" />
        )}
      </header>
    </div>
  );
};

export default LandingPage;
