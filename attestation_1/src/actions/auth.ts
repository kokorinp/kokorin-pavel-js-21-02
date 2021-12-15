import { UserAction, UserActionFunc } from "../types/user/actions";

import { UserFullType } from "../types/api/api";
import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
} from "../const/auth/actions";

export const authLoginAction: UserActionFunc = (id: string) => ({
  type: AUTH_LOGIN,
  id,
});

export const authLoginActionSuccess = (resp: UserFullType): UserAction => ({
  type: AUTH_LOGIN_SUCCESS,
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

export const authLogoutAction = (): UserAction => ({ type: AUTH_LOGOUT });
