import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { RoomsResponse } from "../../../generated-sources/openapi";
import { DefaultRoomId } from "../../Services/DefaultRoomId";

interface props {
  rooms: RoomsResponse;
  setRoomId: React.Dispatch<React.SetStateAction<string>>;
}

const DropdownMenu = (props: props) => {
  const clickHandler = (roomid: string) => {
    props.setRoomId(roomid);
  };
  console.log(props.rooms);
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.rooms.rooms?.map((room) => (
          <Dropdown.Item
            onClick={() => {
              clickHandler(room.id as string);
            }}
          >
            {room.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;
