import React, { useCallback } from "react";
import Bart from "../Bart/Bart";
import "./Button.css";
import "./ButtonNotAvailable.css";
import "../../Pages/Grid.css";
import Krusty from "../Krusty/Krusty";
import { DeskAvailability } from "../../generated-sources/openapi";
import { useBook } from "../../Services/useBook";
import Draggable from "react-draggable";

export type deskInfo = {
  deskData: DeskAvailability;
  setBookingMade: React.Dispatch<React.SetStateAction<boolean>>;
  activeUser: string;
  date: string;
};

const BookingDesk = (props: deskInfo) => {
  const onClickHandler = () => {
    useBook({
      deskId: props.deskData.desk?.id as string,
      date: props.date,
      userName: props.activeUser,
      setBookingMade: props.setBookingMade,
    });
  };

  return (
    <Draggable disabled={true}>
      <div className="item">
        {!props.deskData.assigned ? (
          <div>
            <Bart />
            <button className="button-52" onClick={onClickHandler}>
              {props.deskData.desk?.name}
              <br />
              AVAILABLE
            </button>
          </div>
        ) : (
          <div>
            <Krusty />
            <div className="button-52_NA">
              {props.deskData.desk?.name}
              <br />
              {props.deskData.assignedName}
            </div>{" "}
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default BookingDesk;
