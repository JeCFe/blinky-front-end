import { useEffect, useState } from "react";
import { configuration } from "../components/Services";
import {
  BlinkyBackEndApi,
  ViewDesksResponse,
} from "../generated-sources/openapi";

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
      //setLoading(false);
    })
    .catch((error) => {
      //setError(error.response);
      console.log(error.response);
    });

  //return [error, loading];
};
