import * as React from "react";
import Item from "./Item";

export default function Grid(props) {
  return (
    <div className="flex space-between items-stretch">
      <div className="flex w-full space-between gap-5 mt-8 px-px items-start">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

