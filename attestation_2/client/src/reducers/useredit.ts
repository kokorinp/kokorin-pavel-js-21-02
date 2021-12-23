import produce from "immer";
import { UserAction } from "../types/user/actions";
import { UserState } from "../types/user/state";
import {
  USEREDIT_OFF,
  USEREDIT_ON,
  USEREDIT_UPDATE,
} from "../const/useredit/actions";

const initialState: UserState = {
  edit: false,
};

const userEditReducer = (state: UserState = initialState, action: UserAction) =>
  produce(state, (draft: UserState) => {
    switch (action.type) {
      case USEREDIT_ON: {
        return {
          ...draft,
          edit: true,
        };
      }

      case USEREDIT_UPDATE: // закрываем форму при апдейте
      case USEREDIT_OFF: {
        return {
          ...draft,
          edit: false,
        };
      }
      default:
        return state;
    }
  });

export default userEditReducer;
