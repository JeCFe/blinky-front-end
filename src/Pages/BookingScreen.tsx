import React, { useEffect, useState } from "react";
import BookingDesk from "../components/Desks/Desk";
import {
  BlinkyBackEndApi,
  AllDesksResponse,
} from "../generated-sources/openapi";
import "../Grid.css";
import { configuration } from "../components/Services";

export const BookingScreen = () => {
  const [response, setResponse] = useState<AllDesksResponse>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [bookingMade, setBookingMade] = useState(false);

  const api = new BlinkyBackEndApi(configuration);
  useEffect(() => {
    api
      .allDesksGetRaw()
      .then(async (awaitResponse) => {
        const response = await awaitResponse;
        const data = await response.value();
        setResponse(data);
        setIsLoading(false);
        setBookingMade(false);
      })
      .catch((error) => {
        setError(error.response);
        console.log(error.response);
      });
  }, [bookingMade]);

  return (
    <div>
      {isLoading ? (
        <div>
          <div>test</div>
          <img className="Spinner" alt="" />
        </div>
      ) : (
        <div className="grid">
          {response?.desks ? (
            response?.desks.map((desk) => (
              <BookingDesk
                key={desk.deskId}
                id={desk.deskId as string}
                availability={desk.isAvailable as boolean}
                name={desk.assignedName || undefined}
                setBookingMade={setBookingMade}
              />
            ))
          ) : (
            <div>{error}</div>
          )}
        </div>
      )}
    </div>
  );
};
