import React from "react";
import ToDoList from "../ToDoList";
import { IData } from "../Interfaces/IData";
import Header from "../Header";
import SearchBar from "../SearchBar";
import AddItem from "../AddItem";

export default class App extends React.Component<
  { toDo: IData[] },
  { toDo: IData[]; showDone: boolean; showActive: boolean; pattern: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { ...props, pattern: "", showActive: false, showDone: false };
  }

  HandleSearchBarDoneClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    this.setState(({ showDone }) => {
      return {
        showDone: !showDone,
        showActive: false
      };
    });
  };

  HandleSearchBarActiveClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    this.setState(({ showActive }) => {
      return {
        showDone: false,
        showActive: !showActive
      };
    });
  };

  HandleSearchBarPattern = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      pattern: e.target.value
    });
  };

  render() {
    const { toDo, showActive, showDone, pattern } = this.state;

    let toDoFiltered: IData[] = [...toDo];
    if (showDone) {
      toDoFiltered = toDo.filter(x => x.done === true);
    }
    if (showActive) {
      toDoFiltered = toDo.filter(x => x.done === false);
    }
    if (pattern.length > 0) {
      toDoFiltered = toDoFiltered.filter(x => x.label.indexOf(pattern) > -1);
    }

    return (
      <div>
        <SearchBar
          onDoneChanged={this.HandleSearchBarDoneClick}
          onActiveChanged={this.HandleSearchBarActiveClick}
          done={showDone}
          active={showActive}
          onPatternChanged={this.HandleSearchBarPattern}
          pattern=""
        />
        <Header {...this.state} />
        <ToDoList {...toDoFiltered} />
        <AddItem />
      </div>
    );
  }
}
