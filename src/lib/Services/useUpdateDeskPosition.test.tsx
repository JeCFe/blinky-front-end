import { render } from "@testing-library/react";
import jest from "jest";
import React, { useState } from "react";
import { DefaultRoomId } from "./DefaultRoomId";
import { useGetRoomWithIdAndDate } from "./useGetRoomWithId";
import fetchMock from "jest-fetch-mock";
import { useUpdateDeskPosition } from "./useUpdateDeskPosition";

interface props {
  id: string;
  posX: number;
  posY: number;
}

const Fixture = (props: props) => {
  const [deskMoved, setDeskMoved] = useState<boolean>(false);
  const [data, loading, error] = useUpdateDeskPosition({
    deskId: props.id,
    posX: props.posX,
    posY: props.posY,
    setDeskMovedBool: deskMoved,
    setDeskMoved: setDeskMoved,
  });

  return (
    <div>
      {loading ? (
        <div data-testid="loading">loading</div>
      ) : (
        <>
          <div data-testid="data">{data}</div>
          <div data-testid="error">{error}</div>
        </>
      )}
    </div>
  );
};
const fetchAny = fetch as any;
beforeEach(() => {
  fetchAny.resetMocks();
});

describe("UseUpdateDeskPoition", () => {
  it("Returns status 200", async () => {
    fetchAny.mockResponseOnce(200);
    const container = render(<Fixture id={""} posX={0} posY={0} />);
    const data = await container.findByTestId("data");
    expect(data).toHaveTextContent("200");
  });
  it("Returns status 404", async () => {
    fetchAny.mockReject(() => Promise.reject(404));
    const container = render(<Fixture id={""} posX={0} posY={0} />);
    const error = await container.findByTestId("error");
    expect(error).toHaveTextContent("404");
  });
});
