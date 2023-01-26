import { useEffect, useState } from "react";
import {
  AllDesksResponse,
  BlinkyBackEndApi,
  Configuration,
  ResponseError,
} from "../generated-sources/openapi";

export const useBookDesk = () => {
  const configuration = new Configuration({
    basePath: "http://localhost:5127",
  });
  const api = new BlinkyBackEndApi(configuration);

  const [bookResponse, setBookResponse] = useState<String>();
  const [bookError, setError] = useState<unknown>();

  useEffect(() => {
    api
      .bookDeskPostRaw({ deskId: "desk2", assignedName: "JEssica" })
      .then((response) => {
        if (response.raw.status == 200) {
          setBookResponse("Success");
        } else {
          console.log("Here");
        }
      })
      .catch((error) => {
        if(error.response.status == 409){
            setBookResponse("This ")
        }
        console.log(error.response);
        setError(error);
      });
  }, []);

  return { bookResponse, bookError };
};
