import { useEffect, useState } from "react";
import { configuration } from "./Services";
import {
  BlinkyBackEndApi,
  RoomsResponse,
} from "../../generated-sources/openapi";

export const useRoom = () => {
  const api = new BlinkyBackEndApi(configuration);
  const [data, setData] = useState<RoomsResponse>();
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    api
      .roomsGetRaw()
      .then(async (response) => {
        var data = await response;
        var FinalData = await data.value();
        setData(FinalData);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);
  return [data, loading, error];
};
