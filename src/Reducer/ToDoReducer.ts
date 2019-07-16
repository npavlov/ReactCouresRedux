import { IData, IStore } from "../Interfaces";

const data: IData[] = [
  { id: 1, label: "test1", important: true, done: true },
  { id: 2, label: "test2", important: false, done: true },
  { id: 3, label: "test2", important: true, done: false },
  { id: 4, label: "clean my ass", important: true, done: false }
];

const initialState = {
  data: data,
  showActive: false,
  showDone: false,
  pattern: ""
};

const handleClick = (toDo: IData[], id: number, propName: string): IData[] => {
  const idx = toDo.findIndex(x => x.id === id);

  const oldItem: any = toDo[idx];

  const newItem = {
    ...oldItem,
    [propName]: !oldItem[propName]
  };

  const deleteArr: IData[] = propName === "REMOVE" ? [] : [newItem];

  return [...toDo.slice(0, idx), ...deleteArr, ...toDo.slice(idx + 1)];
};

const ToDoReducer = (state: IStore = initialState, action: any): IStore => {
  if (action.type === "ADD") {
    const id = Math.max.apply(Math, state.data.map(x => x.id)) + 1;

    const newItem: IData = {
      label: action.label,
      important: false,
      done: false,
      id: id
    };

    state.data = [...state.data, newItem];

    return state;
  }

  if (action.type === "REMOVE") {
    return { ...state, data: handleClick(state.data, action.id, action.type) };
  }
  if (action.type === "IMPORTANT") {
    return { ...state, data: handleClick(state.data, action.id, "important") };
  }
  if (action.type === "DONE") {
    return { ...state, data: handleClick(state.data, action.id, "done") };
  }
  if (action.type === "FILTER") {
    const newState = {
      ...state,
      showActive: action.active ? !state.showActive : false,
      showDone: !action.active ? !state.showDone : false
    };
    return newState;
  }
  if (action.type === "PATTERN") {
    return { ...state, pattern: action.pattern };
  }

  return state;
};

export default ToDoReducer;
