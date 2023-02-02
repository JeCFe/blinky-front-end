import React, { useState } from "react";
import { useGetRoomWithIdAndDate } from "../Services/useGetRoomWithId";
import { DefaultRoomId } from "../Services/DefaultRoomId";
import { dateToday } from "../components/Calander/GetTodaysDate";
import Spinner from "../components/Spinner/Spinner";
import { Calander } from "../components/Calander/Calander";
import BookingDesk from "../components/Desks/Desk";
import { useParams } from "react-router";
import BackButton from "../components/Buttons/BackButton";

const DeskPage = () => {
  const { activeUser } = useParams();
  const [bookingMade, setBookingMade] = useState(false);
  const [date, setDate] = useState(dateToday);
  const [data, error, loading] = useGetRoomWithIdAndDate({
    RoomId: DefaultRoomId,
    date: date,
    updateState: bookingMade,
    setBookingMade: setBookingMade,
  });

  return (
    <div>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <>
          <div className="center content-wrapper">
            <Calander setDate={setDate} />
          </div>
          <div className="center content-wrapper">
            <h2>{data?.roomName}</h2>
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
                style={{ height: "1000px", width: "1000px", padding: "10px" }}
              >
                {data?.desksAvailability ? (
                  data?.desksAvailability.map((desk) => (
                    <BookingDesk
                      key={desk.desk?.id}
                      date={date}
                      activeUser={activeUser as string}
                      setBookingMade={setBookingMade}
                      deskData={desk}
                    />
                  ))
                ) : (
                  <div>{error}</div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      <BackButton />
    </div>
  );
};

export default DeskPage;
