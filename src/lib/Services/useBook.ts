import { useEffect, useState } from "react";
import { configuration } from "./Services";
import { BlinkyBackEndApi } from "../../generated-sources/openapi";

interface props {
  deskId: string;
  userName: string;
  date: string;
  setBookingMade: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useBook = (props: props) => {
  //const [error, setError] = useState<any>(null);
  //const [loading, setLoading] = useState<boolean>(true);
  const api = new BlinkyBackEndApi(configuration);

  api
    .bookPostRaw({
      deskId: props.deskId,
      userName: props.userName,
      date: props.date,
    })
    .then(() => {
      props.setBookingMade(true);
    })
    .catch((error) => {
      console.log(error.response);
    });
};
