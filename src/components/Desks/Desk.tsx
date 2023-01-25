import React from "react";
import "./Bart.css";
import Bart from "./Bart";

export type deskInfo = {
  id: string;
  avibility: boolean;
  name: string;
};

const Desk = (props: deskInfo) => {
  const onClickHandler = () => {};

  return (
    <div onClick={onClickHandler}>
      <Bart />
      <button>{props.name}</button>
    </div>
  );
};

export default Desk;
