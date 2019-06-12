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

  HandleClick = (id: number, propName: string) => {
    this.setState(({ toDo }) => {
      const idx = toDo.findIndex(x => x.id === id);

      const oldItem = toDo[idx];

      const newItem = {
        ...oldItem,
        [propName]: !oldItem[propName]
      };

      const deleteArr: IData[] = propName === "delete" ? [] : [newItem];

      return {
        toDo: [...toDo.slice(0, idx), ...deleteArr, ...toDo.slice(idx + 1)]
      };
    });
  };

  AddItem = (label: string) => {
    this.setState(({ toDo }) => {
      const id = Math.max.apply(Math, toDo.map(x => x.id)) + 1;

      const newItem: IData = {
        id: id,
        label: label,
        important: false,
        done: false
      };

      return {
        toDo: [...toDo, newItem]
      };
    });
  };

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
        />
        <Header {...this.state} />
        <ToDoList toDo={toDoFiltered} onItemChange={this.HandleClick} />
        <AddItem AddItem={this.AddItem} />
      </div>
    );
  }
}
