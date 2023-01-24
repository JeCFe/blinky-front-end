import React from "react";
import "./Bart.css";
import Bart from "./Bart";
import { deskList } from "../../App";

const Desk = (props: deskList) => {
  const onClickHandler = () => {};

  return (
    <div onClick={onClickHandler}>
      <Bart />
    </div>
  );
};

export default Desk;
