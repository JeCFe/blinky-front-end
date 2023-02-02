import React, { useEffect, useState } from "react";
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
  const [posX, setPosX] = useState<number>(props.x);
  const [posY, setPosY] = useState<number>(props.y);
  const [deskMoved, setDeskMoved] = useState<boolean>(false);
  let x = 0;

  const [data, loading, error] = useUpdateDeskPosition({
    deskId: props.id,
    posX: posX,
    posY: posY,
    setDeskMovedBool: deskMoved,
    setDeskMoved: setDeskMoved,
  });

  const stopDrag = (e: DraggableEvent, data: DraggableData) => {
    setPosX(data.x);
    setPosY(data.y);
    setDeskMoved(true);
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
