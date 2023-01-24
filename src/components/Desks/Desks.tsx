import React from "react";
import Desk from "./Desk";
import { deskList } from "../../App";

const Desks = (props: deskList[]) => {
  return (
    <ul className="desk-list">
      {props.map((deskList) => (
        <Desk
          id={deskList.id}
          avibility={deskList.avibility}
          name={deskList.name}
        />
      ))}
    </ul>
  );
};

export default Desks;
