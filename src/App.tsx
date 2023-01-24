import React, { useEffect } from "react";
import SimpsonLogo from "./SimpsonLogo.png";
import "./App.css";
import { Configuration, BlinkyBackEndApi } from "./generated-sources/openapi";
import Desks from "./components/Desks/Desks";

const configuration = new Configuration({
  basePath: "http://FargateALB-446711393.us-east-1.elb.amazonaws.com",
});

function App() {
  useEffect(() => {
    const api = new BlinkyBackEndApi(configuration);
    api.testGet().then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={SimpsonLogo} className="App-logo" alt="logo" />

        <Desks></Desks>
      </header>
    </div>
  );
}

export default App;
