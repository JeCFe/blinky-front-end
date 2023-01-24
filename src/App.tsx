import React, { useEffect } from "react";
import SimpsonLogo from "./logo.png";
import "./App.css";
import { Configuration, BlinkyBackEndApi } from "./generated-sources/openapi";
import Desks from "./components/Desks/Desks";

const configuration = new Configuration({
  basePath: "http://FargateALB-446711393.us-east-1.elb.amazonaws.com",
});

export type deskList = {
  id: string;
  avibility: boolean;
  name: string;
};

const dummyDeskList: deskList[] = [
  { id: "A1", avibility: true, name: "Michal" },
  { id: "A2", avibility: false, name: "Jess" },
];

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
      </header>
      <body className="App-body">
        <Desks deskList={dummyDeskList}></Desks>
      </body>
    </div>
  );
}

export default App;
