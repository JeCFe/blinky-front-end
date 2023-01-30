import React from "react";
import "./Button.css";
import "./ButtonNotAvailable.css";
import "../../Pages/Grid.css";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
export type deskPositioning = {
  id: string;
  x: number;
  y: number;
};

export const MoveableDesk = (props: deskPositioning) => {
  const stopDrag = (e: DraggableEvent, data: DraggableData) => {
    console.log(data.x, data.y);
    //Api call to update desk positioning
  };

  return (
    <Draggable onStop={stopDrag}>
      <div>
        <button className="button-52">
          {props.id}
          <br />
          AVAILABLE
        </button>
      </div>
    </Draggable>
  );
};
