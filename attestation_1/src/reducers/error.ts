import produce from "immer";
import { ErrorAction } from "../types/error/action";
import ErrorState from "../types/error/state";
import { ERROR_OFF, ERROR_ON } from "../const/error/const";

const initialState: ErrorState = {
  textError: "",
  isError: false,
};

const errorReducer = (state: ErrorState = initialState, action: ErrorAction) =>
  produce(state, (draft: ErrorState) => {
    switch (action.type) {
      case ERROR_ON: {
        return {
          textError: action.textError,
          isError: true,
        };
      }
      case ERROR_OFF: {
        return {
          textError: "",
          isError: false,
        };
      }
      default:
        return state;
    }
  });

export default errorReducer;
