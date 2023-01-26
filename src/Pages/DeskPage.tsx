import React, { useState, useEffect } from "react";
import "../Pages/Grid.css";
import Desk from "../components/Desks/Desk";
import { deskInfo } from "../components/Desks/Desk";
import BookingDesk from "../components/Desks/Desk";
import {
  BlinkyBackEndApi,
  AllDesksResponse,
} from "../generated-sources/openapi";
import "../Grid.css";
import { configuration } from "../components/Services";
import Spinner from "../components/Spinner/Spinner";

interface props {
  activeUser: string;
}

const DeskPage = (props: props) => {
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
          <Spinner />
        </div>
      ) : (
        <div className="grid-padding">
          <div className="grid">
            {response?.desks ? (
              response?.desks.map((desk) => (
                <BookingDesk
                  activeUser={props.activeUser}
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
        </div>
      )}
      ;
    </div>
  );
};

export default DeskPage;
