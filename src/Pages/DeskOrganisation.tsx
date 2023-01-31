import react from "react";

import { MoveableDesk } from "../components/Desks/MoveableDesk";
import { DefaultRoomId } from "../Services/DefaultRoomId";
import { useGetRoomWithIdAndDate } from "../Services/useGetRoomWithId";
import BackButton from "../components/BackButton/BackButton";

export const DeskOrganisation = () => {
  const [data, error, loading] = useGetRoomWithIdAndDate({
    RoomId: DefaultRoomId,
    date: "2023-10-10",
  });

  return (
    <>
      <BackButton />
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
