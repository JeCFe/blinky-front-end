import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { deserialize } from "v8";
import { Calander } from "../components/Calander/Calander";
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
    <>
      <div className="center content-wrapper">
        <div
          className="box"
          style={{
            height: "500px",
            width: "100%",
            position: "relative",
            overflow: "auto",
            padding: "0",
            backgroundColor: "white",
            border: "1px solid",
          }}
        >
          <div
            className="test"
            style={{ height: "1000px", width: "1000px", padding: "10px" }}
          >
            {data?.desksAvailability ? (
              data.desksAvailability?.map((desk) => (
                <MoveableDesk
                  key={desk.desk?.id}
                  name={desk.desk?.name as string}
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
    </>
  );
};
