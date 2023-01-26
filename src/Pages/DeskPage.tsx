import React from "react";
import "../Pages/Grid.css";
import Desk from "../components/Desks/Desk";
import { deskInfo } from "../components/Desks/Desk";

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

const DeskPage = () => {
  return (
    <div className="grid-padding">
      <div className="grid">
        {dummyDeskList.map((desk) => (
          <Desk id={desk.id} avibility={desk.avibility} name={desk.name} />
        ))}
      </div>
    </div>
  );
};

export default DeskPage;
