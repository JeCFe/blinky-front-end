import React, { useState } from "react";
import { dateToday } from "./GetTodaysDate";
import "./Calander.css";
import { CommonButton } from "../Buttons/CommonButton";

interface props {
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

export const Calander = (props: props) => {
  const [enteredDate, setEnteredDate] = useState(dateToday);

  const dateChangeHandler = (event: any) => {
    setEnteredDate(event.target.value);
    props.setDate(enteredDate);
  };

  return (
    <>
      <form>
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
      </form>
    </>
  );
};
