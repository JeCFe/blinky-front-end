import React from "react";
import "./Bart.css";
import Bart from "./Bart";
import "./Button.css";
import "./Desk.css";

export type deskInfo = {
  id: string;
  avibility: boolean;
  name: string;
};

const Desk = (props: deskInfo) => {
  const onClickHandler = () => {};

  return (
    <div className="container">
      <Bart />
      <button className="button-52" onClick={onClickHandler}>
        {props.name}
      </button>
    </div>
  );
};

export default Desk;
