export interface ITodoListItem {
  label: string;
  done: boolean;
  important: boolean;
  onItemCheckBoxChange(e: any): void;
  onItemDelete(e: any): void;
  onItemImportant(e: any): void;
}
