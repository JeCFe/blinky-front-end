import React, { useState } from "react";
import "./Calander.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface props {
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

export const Calander = (props: props) => {
  const [enteredDate, setEnteredDate] = useState(new Date());

  const handleChange = (date: any) => {
    console.log(date);
    setEnteredDate(date);
    const newDate = enteredDate.toISOString().split("T")[0];
    props.setDate(newDate);
  };
  return (
    <>
      <div className="date__control">
        <label>Date</label>
        <DatePicker
          minDate={new Date()}
          selected={enteredDate}
          dateFormat="dd/MM/yyyy"
          onChange={handleChange}
        />
      </div>
    </>
  );
};
