import { useEffect, useState } from "react";
import { configuration } from "./Services";
import {
  BlinkyBackEndApi,
  DeskAvailability,
} from "../../generated-sources/openapi";
import { DefaultRoomId } from "./DefaultRoomId";
import { useGetRoomWithIdAndDate } from "./useGetRoomWithId";
import { render } from "@testing-library/react";
import { MoveableDesk } from "../components/Desks/MoveableDesk";

interface props {
  RoomId: string;
  date?: string;
  updateState?: boolean;
  setBookingMade?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Fixture = (props: props) => {
  const [data, error, loading] = useGetRoomWithIdAndDate({
    RoomId: DefaultRoomId,
    date: props.date,
    updateState: props.updateState,
    setBookingMade: props.setBookingMade,
  });

  return (
    <div>
      {loading ? (
        <div data-testid="loading">loading</div>
      ) : (
        <>
          <div data-testid="data">
            {data?.desksAvailability ? (
              data.desksAvailability?.map((desk) => (
                <MoveableDesk
                  key={desk.desk?.id}
                  name={desk.desk?.name as string}
                  id={desk.desk?.id as string}
                  x={desk.desk?.posX as number}
                  y={desk.desk?.posY as number}
                />
              ))
            ) : (
              <div>{error}</div>
            )}
          </div>
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

const dummyDesk: DeskAvailability[] = [
  {
    desk: {
      id: "1234",
      name: "Test",
      posX: 0,
      posY: 0,
    },
  },
];

describe("useGetRoomWithIdAndDate", () => {
  it("Returns desks", async () => {
    fetchAny.mockResponseOnce(
      JSON.stringify({
        desksAvailability: [
          {
            desk: {
              id: "08db038a-0510-4c83-8363-fc4aa7d9e91e",
              name: "Desk 01",
              posX: 85,
              posY: 55,
            },
            assigned: true,
            assignedName: "Jessica",
          },
        ],
      })
    );
    const container = render(<Fixture RoomId={"Test123"} />);
    const data = await container.findByTestId("data");
    expect(data).toHaveTextContent("Desk 01AVAILABLE");
  });
  it("Returns desks", async () => {
    fetchAny.mockReject(() => Promise.reject(404));
    const container = render(<Fixture RoomId={"Test123"} />);
    const error = await container.findByTestId("error");
    expect(error).toHaveTextContent("404");
  });
});
