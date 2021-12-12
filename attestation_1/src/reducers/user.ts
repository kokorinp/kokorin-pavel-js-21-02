import produce from "immer";
import { USER_LOAD, USER_LOAD_SUCCESS } from "../const/user/actions";
import { UserAction } from "../types/user/actions";
import { UserState } from "../types/user/state";
import { DateToString } from "../utils/DateUtils";

const initialState: UserState = {
  edit: false,
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

const UserLoadSuccess = (dr: UserState, ua: UserAction): UserState => {
  const getGender = (g: string): string => {
    switch (g) {
      case "male":
        return "Мужской";
      case "female":
        return "Женский";
      case "other":
        return "Другой";
      default:
        return "";
    }
  };

  return {
    ...dr,
    edit: ua.edit || false,
    id: ua.id || "",
    title: ua.title || "",
    firstName: ua.firstName || "",
    lastName: ua.lastName || "",
    gender: ua.gender ? getGender(ua.gender) : "",
    email: ua.email || "",
    dateOfBirth: ua.dateOfBirth ? DateToString(ua.dateOfBirth) : "",
    registerDate: ua.registerDate ? DateToString(ua.registerDate) : "",
    phone: ua.phone || "",
    picture: ua.picture || "",
    location: ua.location || {},
  };
};

const userReducer = (state: UserState = initialState, action: UserAction) =>
  produce(state, (draft: UserState) => {
    switch (action.type) {
      case USER_LOAD: {
        return {
          ...draft,
          edit: action.edit || false,
          id: action.id || "",
        };
      }

      case USER_LOAD_SUCCESS: {
        return action.id ? UserLoadSuccess(draft, action) : state;
      }

      default:
        return state;
    }
  });

export default userReducer;
