import { IData } from "../Interfaces/IData";

const data: IData[] = [
  { id: 1, label: "test1", important: true, done: true },
  { id: 2, label: "test2", important: false, done: true },
  { id: 3, label: "test2", important: true, done: false },
  { id: 4, label: "clean my ass", important: true, done: false }
];

const ToDoReducer = (state: IData[], action: any) => {
  if (state === undefined) {
    return data;
  }

  if (action.type === "ADD") {
    const id = Math.max.apply(Math, state.map(x => x.id)) + 1;

    const newItem: IData = {
      label: action.label,
      important: false,
      done: false,
      id: id
    };

    return [...state, newItem];
  }

  if (action.type === "REMOVE") {
    return handleClick(state, action.id, action.type);
  }
  if (action.type === "IMPORTANT") {
    return handleClick(state, action.id, "important");
  }
  if (action.type === "DONE") {
    return handleClick(state, action.id, "done");
  }

  return state;
};

const handleClick = (toDo: IData[], id: number, propName: string): IData[] => {
  const idx = toDo.findIndex(x => x.id === id);

  const oldItem = toDo[idx];

  const newItem = {
    ...oldItem,
    [propName]: !oldItem[propName]
  };

  const deleteArr: IData[] = propName === "REMOVE" ? [] : [newItem];

  return [...toDo.slice(0, idx), ...deleteArr, ...toDo.slice(idx + 1)];
};

export default ToDoReducer;
