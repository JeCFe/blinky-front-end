import { useEffect, useState } from "react";
import {
  AllDesksResponse,
  BlinkyBackEndApi,
  Configuration,
} from "../generated-sources/openapi";

export const useAllDecks = () => {
  const configuration = new Configuration({
    basePath: "http://localhost:5127",
  });
  const api = new BlinkyBackEndApi(configuration);

  const [response, setResponse] = useState<AllDesksResponse>();
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    api
      .allDesksGetRaw()
      .then(async (awaitResponse) => {
        let d = await awaitResponse;
        console.log(d);
        let data = await d.value();
        setResponse(data as AllDesksResponse);
      })
      .catch((error) => {});
  }, []);

  return { response, error };
};
