import react, { useState } from "react";
import BackButton from "../components/Buttons/BackButton";

import { MoveableDesk } from "../components/Desks/MoveableDesk";
import Spinner from "../components/Spinner/Spinner";
import { DefaultRoomId } from "../Services/DefaultRoomId";
import { useGetRoomWithIdAndDate } from "../Services/useGetRoomWithId";
import { useRoom } from "../Services/useRoom";
import DropdownMenu from "../components/DropdownMenu/DropdownMenu";

export const DeskOrganisation = () => {
  const [roomId, setRoomId] = useState<string>();

  const [roomData, roomError, roomLoading] = useRoom();

  const [data, error, loading] = useGetRoomWithIdAndDate({
    RoomId: roomId ?? DefaultRoomId,
    date: "2023-10-10",
  });

  return (
    <>
      {loading || roomLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <>
          <div className="center content-wrapper">
            <DropdownMenu
              rooms={roomData}
              roomName={data?.roomName as string}
              setRoomId={
                setRoomId as React.Dispatch<React.SetStateAction<string>>
              }
            />
          </div>

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
          <BackButton />
        </>
      )}
    </>
  );
};
