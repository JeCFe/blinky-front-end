import React, { useState, useEffect } from "react";
import Desk from "../components/Desks/Desk";
import BookingDesk from "../components/Desks/Desk";
import "../Grid.css";
import Spinner from "../components/Spinner/Spinner";
import { useGetRoomWithIdAndDate } from "../Services/useGetRoomWithId";
import { useParams } from "react-router";
import { Calander } from "../components/Calander/Calander";

const DeskPage = () => {
  const { activeUser } = useParams();
  const [bookingMade, setBookingMade] = useState(false);
  const [date, setDate] = useState("2023-10-10");
  const [data, error, loading] = useGetRoomWithIdAndDate({
    RoomId: "08db009b-7d6f-4900-8cbb-4acea8e55870",
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
    </div>
  );
};

export default DeskPage;
