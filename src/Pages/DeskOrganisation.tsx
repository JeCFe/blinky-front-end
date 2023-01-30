import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import {
  deskPositioning,
  MoveableDesk,
} from "../components/Desks/MoveableDesk";
import { useGetRoomWithIdAndDate } from "../Services/useGetRoomWithId";

export const DeskOrganisation = () => {
  const [data, error, loading] = useGetRoomWithIdAndDate({
    RoomId: "08db009b-7d6f-4900-8cbb-4acea8e55870",
    date: "2023-10-10",
  });

  return (
    <div>
      <div className="grid-padding">
        <div className="grid">
          {data?.desksAvailability ? (
            data.desksAvailability?.map((desk) => (
              <MoveableDesk
                key={desk.desk?.id}
                id={desk.desk?.id as string}
                x={desk.desk?.posX as number}
                y={desk.desk?.posY as number}
              />
            ))
          ) : (
            <div>{error}</div>
          )}
        </div>
      </div>
    </div>
  );
};
