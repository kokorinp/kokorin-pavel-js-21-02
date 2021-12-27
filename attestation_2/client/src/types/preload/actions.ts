import Action from "../action";

export interface PreloadAction extends Action {
  isLoading: boolean;
}

export interface PreloadActionFunc {
  (): PreloadAction;
}
