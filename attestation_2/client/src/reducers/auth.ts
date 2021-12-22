import produce from "immer";
import { UserAction } from "../types/user/actions";
import { UserState } from "../types/user/state";
import { DateToString } from "../utils/DateUtils";
import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
} from "../const/auth/actions";
// import { getGender } from "../utils/utils";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../utils/PaginatorUtils";

const auth = JSON.parse(getFromLocalStorage("Auth") || "{}");

const initialState: UserState = Object.keys(auth).length
  ? auth
  : {
    id: "",
    title: "",
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    dateOfBirth: "",
    registerDate: "",
    phone: "",
    picture: "",
    location: {},
  };

const authUserLoadSuccess = (dr: UserState, ua: UserAction): UserState => {
  const r = {
    ...dr,
    id: ua.id || "",
    title: ua.title || "",
    firstName: ua.firstName || "",
    lastName: ua.lastName || "",
    // gender: ua.gender ? getGender(ua.gender) : "",
    gender: ua.gender || "",
    email: ua.email || "",
    dateOfBirth: ua.dateOfBirth ? DateToString(ua.dateOfBirth) : "",
    dateOfBirthRaw: ua.dateOfBirth || "",
    registerDate: ua.registerDate ? DateToString(ua.registerDate) : "",
    registerDateRaw: ua.registerDate || "",
    phone: ua.phone || "",
    picture: ua.picture || "",
    location: ua.location || {},
  };
  setToLocalStorage("Auth", JSON.stringify(r));
  return r;
};

const authReducer = (state: UserState = initialState, action: UserAction) =>
  produce(state, (draft: UserState) => {
    switch (action.type) {
      case AUTH_LOGIN: {
        return {
          ...draft,
          // id: action.id || "",
        };
      }

      case AUTH_LOGIN_SUCCESS: {
        return action.id ? authUserLoadSuccess(draft, action) : state;
      }

      case AUTH_LOGOUT: {
        return authUserLoadSuccess(draft, {} as UserAction);
      }

      default:
        return state;
    }
  });

export default authReducer;
