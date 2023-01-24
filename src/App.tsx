import React, { useEffect, useState } from "react";
import SimpsonLogo from "./logo.png";
import "./App.css";
import { Configuration, BlinkyBackEndApi } from "./generated-sources/openapi";
import "./components/Spinner.css";
import Desks from "./components/Desks/Desks";

const configuration = new Configuration({
  basePath: "http://FargateALB-446711393.us-east-1.elb.amazonaws.com",
});

export type deskInfo = {
  id: string;
  avibility: boolean;
  name: string;
};

const dummyDeskList: deskInfo[] = [
  { id: "A1", avibility: true, name: "Michal" },
  { id: "A2", avibility: false, name: "Jess" },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const api = new BlinkyBackEndApi(configuration);
    api.testGet().then((response) => {
      console.log(response);
    });
  }, []);

  const loadingPage = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="App">
      <header className="App-header" onClick={loadingPage}>
        {isLoading ? (
          <div>
            <img className="Spinner" alt="" />
          </div>
        ) : (
          <img src={SimpsonLogo} className="App-logo" alt="logo" />
        )}
      </header>
      <body className="App-body"></body>
    </div>
  );
}

export default App;
