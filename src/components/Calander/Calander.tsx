import React, { useState } from "react";
import { isPropertySignature } from "typescript";
import "./Calander.css";

interface props {
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

export const Calander = (props: props) => {
  const [enteredDate, setEnteredDate] = useState("");

  const dateChangeHandler = (event: any) => {
    setEnteredDate(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(enteredDate);
    props.setDate(enteredDate);
    console.log("Calander", enteredDate);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="data__controls">
          <div className="date__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <input type="submit" value="SELECT DATE" className="login-btn" />
      </form>
    </>
  );
};
