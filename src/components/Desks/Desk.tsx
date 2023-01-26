import React from "react";
import Bart from "../Bart/Bart";
import "./Button.css";
import "./ButtonNotAvailable.css";
import "../../Pages/Grid.css";
import Krusty from "../Krusty/Krusty";
import {
  BlinkyBackEndApi,
  Configuration,
} from "../../generated-sources/openapi";
import { configuration } from "../Services";

export type deskInfo = {
  id: string;
  availability: boolean;
  name?: string;
  setBookingMade: React.Dispatch<React.SetStateAction<boolean>>;
};

const BookingDesk = (props: deskInfo) => {
  const onClickHandler = () => {
    const api = new BlinkyBackEndApi(configuration);

    var req = {
      deskId: props.id as string,
      assignedName: "props.name as string",
    };

    api
      .bookDeskPostRaw(req)
      .then((response) => {
        if (response.raw.status == 200) {
          props.setBookingMade(true);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 409) {
          console.log("Tried to book a desk already booked");
        } else {
          console.log(error.response);
        }
      });
  };

  return (
    <div className="item">
      {props.availability ? (
        <div>
          <Bart />
          <button className="button-52" onClick={onClickHandler}>
            {props.id}
            <br />
            AVAILABLE
          </button>
        </div>
      ) : (
        <div>
          <Krusty />
          <div className="button-52_NA">
            {props.id}
            <br />
            {props.name}
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default BookingDesk;
