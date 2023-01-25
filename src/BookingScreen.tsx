import React from "react";
import Desk from "./components/Desks/Desk";
import SimpsonLogo from "./logo.png";
import { useEffect, useState } from "react";
import { Configuration, BlinkyBackEndApi } from "./generated-sources/openapi";
import { deskInfo } from "./components/Desks/Desk";
import "./App.css";
import "./Grid.css";

const configuration = new Configuration({
  basePath: "http://FargateALB-446711393.us-east-1.elb.amazonaws.com",
});

const dummyDeskList: deskInfo[] = [
  { id: "A1", avibility: true, name: "Michal" },
  { id: "A2", avibility: false, name: "Jess" },
  { id: "A3", avibility: false, name: "Jess" },
  { id: "A4", avibility: true, name: "Jess" },
  { id: "A5", avibility: false, name: "Jess" },
  { id: "A6", avibility: true, name: "Jess" },
  { id: "A7", avibility: true, name: "Jess" },
  { id: "A8", avibility: false, name: "Jess" },
  { id: "A9", avibility: true, name: "Jess" },
  { id: "A1", avibility: true, name: "Michal" },
  { id: "A2", avibility: false, name: "Jess" },
  { id: "A3", avibility: false, name: "Jess" },
  { id: "A4", avibility: true, name: "Jess" },
  { id: "A5", avibility: false, name: "Jess" },
  { id: "A6", avibility: true, name: "Jess" },
  { id: "A7", avibility: true, name: "Jess" },
  { id: "A8", avibility: false, name: "Jess" },
  { id: "A9", avibility: true, name: "Jess" },
  { id: "A1", avibility: true, name: "Michal" },
  { id: "A2", avibility: false, name: "Jess" },
  { id: "A3", avibility: false, name: "Jess" },
  { id: "A4", avibility: true, name: "Jess" },
  { id: "A5", avibility: false, name: "Jess" },
  { id: "A6", avibility: true, name: "Jess" },
  { id: "A7", avibility: true, name: "Jess" },
  { id: "A8", avibility: false, name: "Jess" },
  { id: "A9", avibility: true, name: "Jess" },
];

export const BookingScreen = () => {
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

      <div className="grid">
        {dummyDeskList.map((desk) => (
          <Desk id={desk.id} avibility={desk.avibility} name={desk.name} />
        ))}
      </div>
    </div>
  );
};
