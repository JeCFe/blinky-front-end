import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { RoomsResponse } from "../../../generated-sources/openapi";
import { DefaultRoomId } from "../../Services/DefaultRoomId";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DropdownMenu.css";

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
    <>
      <Dropdown>
        <div className="DrowndownWrapper">
          <Dropdown.Toggle variant="NoVariant" id="dropdown-basic">
            Office Selector
          </Dropdown.Toggle>
        </div>

        <Dropdown.Menu>
          {props.rooms.rooms?.map((room) => (
            <Dropdown.Item
              className="dropdownItem"
              key={room.id}
              onClick={() => {
                clickHandler(room.id as string);
              }}
            >
              {room.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownMenu;
