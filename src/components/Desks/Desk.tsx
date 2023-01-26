import React from "react";
import Bart from "../Bart/Bart";
import "./Button.css";
import "./ButtonNotAvailable.css";
import "../../Grid.css";
import Krusty from "../Krusty/Krusty";

export type deskInfo = {
  id: string;
  avibility: boolean;
  name: string;
};

const Desk = (props: deskInfo) => {
  const onClickHandler = () => {};

  return (
    <div className="item">
      {props.avibility ? (
        <div>
          <Bart />
          <button className="button-52" onClick={onClickHandler}>
            AVAILABLE
          </button>
        </div>
      ) : (
        <div>
          <Krusty />
          <button className="button-52_NA" onClick={onClickHandler}>
            {props.name}
          </button>{" "}
        </div>
      )}
    </div>
  );
};

export default Desk;
