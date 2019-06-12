import { IData } from "./IData";

export default interface IStore {
  data: IData[];
  showDone: boolean;
  showActive: boolean;
  pattern: string;
}
