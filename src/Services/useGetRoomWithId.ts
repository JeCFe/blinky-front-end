import { useEffect, useState } from "react";
import { configuration } from "../components/Services";
import {
  BlinkyBackEndApi,
  ViewDesksResponse,
} from "../generated-sources/openapi";

interface props {
  RoomId: string;
  date?: string;
  updateState: boolean;
  setBookingMade: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useGetRoomWithIdAndDate = (
  props: props
): [ViewDesksResponse | undefined, any | undefined, boolean | undefined] => {
  const [data, setData] = useState<ViewDesksResponse>();
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const api = new BlinkyBackEndApi(configuration);

  useEffect(() => {
    api
      .roomsRoomIdGetRaw({ roomId: props.RoomId, date: props.date })
      .then(async (awaitResponse) => {
        const response = await awaitResponse;
        const data = await response.value();
        setData(data);
        setLoading(false);
        props.setBookingMade(false);
      })
      .catch((error) => {
        setError(error.response);
        console.log(error.response);
      });
  }, [props.updateState]);

  return [data, error, loading];
};
