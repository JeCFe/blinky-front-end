import React, { useState, useEffect } from "react";
import Desk from "../components/Desks/Desk";
import BookingDesk from "../components/Desks/Desk";
import "../Grid.css";
import Spinner from "../components/Spinner/Spinner";
import { useGetRoomWithIdAndDate } from "../Services/useGetRoomWithId";
import { useParams } from "react-router";

const DeskPage = () => {
  const { activeUser } = useParams();
  const [bookingMade, setBookingMade] = useState(false);
  const [data, error, loading] = useGetRoomWithIdAndDate({
    RoomId: "08db009b-7d6f-4900-8cbb-4acea8e55870",
    date: "2023-10-10",
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
        <div className="grid-padding">
          <div className="grid">
            {data?.desksAvailability ? (
              data?.desksAvailability.map((desk) => (
                <BookingDesk
                  key={desk.desk?.id}
                  date={"2023-10-10"}
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
      )}
      ;
    </div>
  );
};

export default DeskPage;
