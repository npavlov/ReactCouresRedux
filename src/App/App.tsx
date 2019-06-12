import React from "react";
import ToDoList from "../ToDoList";
import { IStore, IData } from "../Interfaces";
import Header from "../Header";
import SearchBar from "../SearchBar";
import AddItem from "../AddItem";
import { connect } from "react-redux";

const App = (props: IStore) => {
  const { data, showActive, showDone, pattern } = props;
  let toDoFiltered: IData[] = [...data];
  if (showDone) {
    toDoFiltered = data.filter(x => x.done === true);
  }
  if (showActive) {
    toDoFiltered = data.filter(x => x.done === false);
  }
  if (pattern.length > 0) {
    toDoFiltered = toDoFiltered.filter(x => x.label.indexOf(pattern) > -1);
  }

  return (
    <div>
      <SearchBar done={showDone} active={showActive} pattern={pattern} />
      <Header toDo={data} />
      <ToDoList toDo={toDoFiltered} />
      <AddItem />
    </div>
  );
};

const mapStateToProps = (state: IStore) => {
  return { ...state };
};

export default connect(mapStateToProps)(App);
