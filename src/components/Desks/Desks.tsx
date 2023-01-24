import React from "react";
import Desk from "./Desk";
import { deskInfo } from "../../App";

const Desks = (props: deskInfo[]) => {
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
