import React from "react";
import "./Bart.css";
import Bart from "./Bart";
import { deskInfo } from "../../App";

const Desk = (props: deskInfo) => {
  const onClickHandler = () => {};

  return (
    <div onClick={onClickHandler}>
      <Bart />
    </div>
  );
};

export default Desk;
