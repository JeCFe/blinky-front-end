import React, { useState } from "react";
import "./Calander.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { CommonButton } from "../Buttons/CommonButton";

interface props {
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

export const Calander = (props: props) => {
  const [enteredDate, setEnteredDate] = useState(new Date());

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setEnteredDate(event.target.value);
    const newDate = enteredDate.toISOString().split("T")[0];
    props.setDate(newDate);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="data__controls">
          <div className="date__control">
            <label>Date</label>
            <DatePicker
              minDate={new Date()}
              selected={enteredDate}
              dateFormat="dd/MM/yyyy"
              onChange={(date: any) => setEnteredDate(date)}
            />
          </div>
        </div>
      </form>
    </>
  );
};
