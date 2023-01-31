import React, { useCallback } from "react";

import "./Button.css";

import "../../Pages/Grid.css";

import { DeskAvailability } from "../../generated-sources/openapi";
import { useBook } from "../../Services/useBook";
import Draggable, {
  DraggableData,
  DraggableEvent,
  DraggableEventHandler,
} from "react-draggable";

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
  console.log(
    props.deskData.desk?.name,
    props.deskData.desk?.posX,
    props.deskData.desk?.posY
  );

  const stopHandler = (e: DraggableEvent, data: DraggableData) => {
    console.log(data.x, data.y);
  };

  return (
    <Draggable
      disabled={true}
      defaultPosition={{
        x: props.deskData.desk?.posX as number,
        y: props.deskData.desk?.posY as number,
      }}
      onStop={stopHandler}
    >
      {!props.deskData.assigned ? (
        <div>
          <button className="button-52" onClick={onClickHandler}>
            {props.deskData.desk?.name}
            <br />
            AVAILABLE
          </button>
        </div>
      ) : (
        <div>
          <div className="button-52_NA">
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
