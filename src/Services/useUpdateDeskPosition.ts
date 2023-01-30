import { useEffect, useState } from "react";
import { configuration } from "../components/Services";
import {
  BlinkyBackEndApi,
  ViewDesksResponse,
} from "../generated-sources/openapi";

interface props {
  deskId: string;
  posX: number;
  posY: number;
}

export const useUpdateDeskPosition = (props: props) => {
  const api = new BlinkyBackEndApi(configuration);

  api
    .updatePositionPostRaw({
      deskId: props.deskId,
      x: props.posX,
      y: props.posY,
    })
    .then((response) => {
      console.log(response.raw.status);
    })
    .catch((error) => {
      console.log(error.response);
    });
};
