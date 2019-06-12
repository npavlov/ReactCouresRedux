const AddItemAction = (label: string) => {
  return {
    type: "ADD",
    label: label
  };
};

const RemoveItemAction = (id: number) => {
  return {
    type: "REMOVE",
    id: id
  };
};

const ImportantItemAction = (id: number) => {
  return {
    type: "IMPORTANT",
    id: id
  };
};

const DoneItemAction = (id: number) => {
  return {
    type: "DONE",
    id: id
  };
};

const FilterAction = (active: boolean) => {
  return {
    type: "FILTER",
    active: active
  };
};

const PatternAction = (pattern: string) => {
  return {
    type: "PATTERN",
    pattern: pattern
  };
};

export {
  AddItemAction,
  RemoveItemAction,
  ImportantItemAction,
  DoneItemAction,
  FilterAction,
  PatternAction
};
