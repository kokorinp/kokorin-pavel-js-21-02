import Action from "../action";

export interface ErrorAction extends Action {
  isError: boolean;
  textError?: string;
}

export interface ErrorActionFunc {
  (text?: string): ErrorAction;
}
