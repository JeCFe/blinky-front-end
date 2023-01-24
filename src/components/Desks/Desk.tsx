import React from "react";

const Desk = (props: { name: string }) => {
  return (
    <div>
      <button>{props.name}</button>
    </div>
  );
};

export default Desk;
