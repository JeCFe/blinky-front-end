import React from "react";
import "./Button.css";
import "../../Pages/Grid.css";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useUpdateDeskPosition } from "../../Services/useUpdateDeskPosition";

export type deskPositioning = {
  id: string;
  name: string;
  x: number;
  y: number;
};

export const MoveableDesk = (props: deskPositioning) => {
  const stopDrag = (e: DraggableEvent, data: DraggableData) => {
    console.log(props.id, data.x, data.y);
    useUpdateDeskPosition({ deskId: props.id, posX: data.x, posY: data.y });
    console.log("API OVER");
    //Api call to update desk positioning
  };
  console.log(props.name);

  return (
    <Draggable
      grid={[5, 5]}
      onStop={stopDrag}
      defaultPosition={{
        x: props.x as number,
        y: props.y as number,
      }}
    >
      <div>
        <button className="button-52 drag-padding">
          {props.name}
          <br />
          AVAILABLE
        </button>
      </div>
    </Draggable>
  );
};
