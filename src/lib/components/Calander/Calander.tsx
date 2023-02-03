import React, { useState } from "react";
import { dateToday } from "./GetTodaysDate";
import "./Calander.css";
import { CommonButton } from "../Buttons/CommonButton";

interface props {
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

export const Calander = (props: props) => {
  const [enteredDate, setEnteredDate] = useState<string>();

  const dateChangeHandler = (event: any) => {
    setEnteredDate(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.setDate(enteredDate ?? dateToday);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="data__controls">
          <div className="date__control">
            <input
              type="date"
              min={dateToday}
              max="2024-12-31"
              value={enteredDate ?? dateToday}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <CommonButton type="submit" value="CONFIRM DATE" />
      </form>
    </>
  );
};
