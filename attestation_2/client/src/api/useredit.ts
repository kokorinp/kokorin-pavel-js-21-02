import { PutApi } from "./dummyapi.io";
import { API_USER_URL } from "../const/api/dummyapi.io";
import { UserFullType } from "../types/api/api";

export const putUserEdit = (user: UserFullType) =>
  PutApi(API_USER_URL.concat("/").concat(user.id || ""), user);
