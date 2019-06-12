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

export { AddItemAction, RemoveItemAction, ImportantItemAction, DoneItemAction };
