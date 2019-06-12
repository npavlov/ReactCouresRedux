import React from "react";
import "./Header.css";
import { IData } from "../Interfaces/IData";

const Header = (props: { toDo: IData[] }) => {
  const { toDo } = props;

  const done = toDo.filter(x => x.done).length;
  const active = toDo.length - done;

  return (
    <div className="Header">
      <div className="text-right">
        Done: {done} Active {active}
      </div>
    </div>
  );
};

export default Header;
