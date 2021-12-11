import { UserAction, UserActionFunc } from "../types/user/actions";
import { USER_LOAD, USER_LOAD_SUCCESS } from "../const/user/actions";
import { UserFullType } from "../types/api/api";

export const userLoadAction: UserActionFunc = (newid: string) => ({
  type: USER_LOAD,
  id: newid,
});

// console.group("Action USER_LOAD");
// console.log(page);
// console.log(pageSize);
// console.groupEnd();

export const userLoadActionSuccess = (resp: UserFullType): UserAction => ({
  type: USER_LOAD_SUCCESS,
  edit: false,
  id: resp.id || "",
  title: resp.title || "",
  firstName: resp.firstName || "",
  lastName: resp.lastName || "",
  gender: resp.gender || "",
  email: resp.email || "",
  dateOfBirth: resp.dateOfBirth || "",
  registerDate: resp.registerDate || "",
  phone: resp.phone || "",
  picture: resp.picture || "",
  location: resp.location || {},
});
