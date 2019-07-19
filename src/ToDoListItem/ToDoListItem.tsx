import React from "react";
import "./ToDoListItem.css";
import { connect } from "react-redux";
import { IData } from "../Interfaces";
import * as actions from "../AC";

const ToDoListItem = (props: {
  data: IData;
  RemoveItemAction(id: number): void;
  ImportantItemAction(id: number): void;
  DoneItemAction(id: number): void;
}) => {
  const { label, important, done, id } = props.data;

  const className = done ? "done" : "";

  const style: React.CSSProperties = {
    fontWeight: important ? 600 : 100
  };

  return (
    <div style={style} className={className}>
      <input
        type="checkbox"
        checked={done}
        onChange={() => {
          props.DoneItemAction(id);
        }}
      />
      {label}
      <button
        className="btn btn-outline-danger btn-sm float-right"
        onClick={() => {
          props.RemoveItemAction(id);
        }}
      >
        <i className="fa fa-trash" />
      </button>
      <button
        className="btn btn-outline-success btn-sm float-right"
        onClick={() => {
          props.ImportantItemAction(id);
        }}
      >
        <i className="fa fa-exclamation-triangle" />
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  ...actions
};

export default connect(
  null,
  mapDispatchToProps
)(ToDoListItem);
