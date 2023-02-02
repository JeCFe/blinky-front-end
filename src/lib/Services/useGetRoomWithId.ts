import { useEffect, useState } from "react";

import {
  BlinkyBackEndApi,
  ViewDesksResponse,
} from "../../generated-sources/openapi";
import { configuration } from "./Services";

interface props {
  RoomId: string;
  date?: string;
  updateState?: boolean;
  setBookingMade?: React.Dispatch<React.SetStateAction<boolean>>;
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
        if (props.setBookingMade) {
          props.setBookingMade(false);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [props.updateState, props.date, props.RoomId]);

  return [data, error, loading];
};
