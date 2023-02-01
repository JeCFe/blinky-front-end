import { useEffect, useState } from "react";
import { configuration } from "./Services";
import { BlinkyBackEndApi } from "../../generated-sources/openapi";

interface props {
  deskId: string;
  posX: number;
  posY: number;
  setDeskMovedBool: boolean;
  setDeskMoved: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useUpdateDeskPosition = (props: props) => {
  const api = new BlinkyBackEndApi(configuration);
  const [data, setData] = useState<number>();
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    api
      .updatePositionPostRaw({
        deskId: props.deskId,
        x: props.posX,
        y: props.posY,
      })
      .then((response) => {
        setData(response.raw.status);
        setLoading(false);
        props.setDeskMoved(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [props.setDeskMovedBool]);
  return [data, loading, error];
};
