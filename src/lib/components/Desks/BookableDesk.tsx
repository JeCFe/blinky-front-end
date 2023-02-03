import React, { useCallback } from "react";
import { DeskAvailability } from "../../../generated-sources/openapi";
import { useBook } from "../../Services/useBook";
import Draggable from "react-draggable";
import "./Button.css";

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
    <Draggable
      disabled={true}
      defaultPosition={{
        x: props.deskData.desk?.posX as number,
        y: props.deskData.desk?.posY as number,
      }}
    >
      {!props.deskData.assigned ? (
        <div>
          <button className="desk shared-desk" onClick={onClickHandler}>
            {props.deskData.desk?.name}
            <br />
            AVAILABLE
          </button>
        </div>
      ) : (
        <div>
          <div className="bookedDesk shared-desk">
            {props.deskData.desk?.name}
            <br />
            {props.deskData.assignedName}
          </div>{" "}
        </div>
      )}
    </Draggable>
  );
};

export default BookingDesk;
