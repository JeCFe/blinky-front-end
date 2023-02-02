import React, { useState } from "react";
import { dateToday } from "./GetTodaysDate";
import "./Calander.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { CommonButton } from "../Buttons/CommonButton";

interface props {
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

export const Calander = (props: props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [enteredDate, setEnteredDate] = useState("");

  const dateChangeHandler = (event: any) => {
    setEnteredDate(event.target.value);
    props.setDate(enteredDate);
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
            <DatePicker
              minDate={startDate}
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
            />
          </div>
        </div>
      </form>
    </>
  );
};
