import React from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useUpdateDeskPosition } from "../../Services/useUpdateDeskPosition";
import "./Button.css";

export type deskPositioning = {
  id: string;
  name: string;
  x: number;
  y: number;
};

export const MoveableDesk = (props: deskPositioning) => {
  const stopDrag = (e: DraggableEvent, data: DraggableData) => {
    useUpdateDeskPosition({ deskId: props.id, posX: data.x, posY: data.y });
  };

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
        <button className="desk drag-padding">
          {props.name}
          <br />
          AVAILABLE
        </button>
      </div>
    </Draggable>
  );
};
