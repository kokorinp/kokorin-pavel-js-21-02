import produce from "immer";
import { PreloadAction } from "../types/preload/actions";
import { PreloadState } from "../types/preload/state";
import { PRELOAD_OFF, PRELOAD_ON } from "../const/preload/actions";

const initialState: PreloadState = {
  isLoading: false,
};

const preloadReducer = (
  state: PreloadState = initialState,
  action: PreloadAction
) =>
  produce(state, (draft: PreloadState) => {
    switch (action.type) {
      case PRELOAD_ON: {
        return {
          ...draft,
          isLoading: true,
        };
      }
      case PRELOAD_OFF: {
        return {
          ...draft,
          isLoading: false,
        };
      }
      default:
        return state;
    }
  });

export default preloadReducer;
