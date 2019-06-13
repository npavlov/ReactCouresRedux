import React from "react";
import ToDoListItem from "../ToDoListItem";
import "./ToDoList.css";
import { IData } from "../Interfaces";

interface TodoListProps {
  toDo: IData[];
}

const ToDoList = (props: TodoListProps) => {
  const { toDo } = props;

  const elements = toDo.map(item => {
    const { id } = item;
    return (
      <li key={id} className="list-group-item">
        <ToDoListItem data={item} />
      </li>
    );
  });

  return <ul className="list-group">{elements}</ul>;
};

export default ToDoList;
