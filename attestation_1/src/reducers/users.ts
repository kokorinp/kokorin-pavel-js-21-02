import produce from "immer";
import { USERS_LOAD, USERS_LOAD_SUCCESS } from "../const/users/actions";
import { UsersAction } from "../types/users/actions";
import { UsersState } from "../types/users/state";
import { getLimitInit, getPageInit } from "../utils/PaginatorUtils";

const initialState: UsersState = {
  users: [],
  page: getPageInit("UsersPage"),
  limit: getLimitInit("UsersLimit"),
  total: 0,
};

const UsersLoadSuccess = (dr: UsersState, ua: UsersAction): UsersState => ({
  ...dr,
  users: ua.users || [],
  page: ua.page || getPageInit("UsersPage"),
  limit: ua.limit || getLimitInit("UsersLimit"),
  total: ua.total || 0,
});

const usersReducer = (state = initialState, action: UsersAction) =>
  produce(state, (draft: UsersState) => {
    switch (action.type) {
      case USERS_LOAD: {
        return {
          ...draft,
        };
      }
      case USERS_LOAD_SUCCESS: {
        return action.users ? UsersLoadSuccess(draft, action) : state;
      }
      default:
        return state;
    }
  });

export default usersReducer;
