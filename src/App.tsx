import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Configuration, BlinkyBackEndApi } from "./generated-sources/openapi";

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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
