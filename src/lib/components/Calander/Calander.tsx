import React, { useState } from "react";
import { dateToday } from "./GetTodaysDate";
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
    props.setDate(enteredDate);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="data__controls">
          <div className="date__control">
            <label>Date</label>
            <input
              type="date"
              min={dateToday}
              max="2024-12-31"
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
