import React from "react";
import ToDoListItem from "../ToDoListItem";
import "./ToDoList.css";
import { IData } from "../Interfaces/IData";
import { connect } from "react-redux";

interface TodoListProps {
  toDo: IData[];
}

class ToDoList extends React.Component<TodoListProps, TodoListProps> {
  render() {
    const { toDo } = this.props;

    const elements = toDo.map(item => {
      const { id } = item;
      return (
        <li key={id} className="list-group-item">
          <ToDoListItem data={item} />
        </li>
      );
    });

    return <ul className="list-group">{elements}</ul>;
  }
}

const mapStateToProps = (state: IData[]) => {
  return {
    toDo: state
  };
};

export default connect(mapStateToProps)(ToDoList);
