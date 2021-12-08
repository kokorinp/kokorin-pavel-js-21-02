import { GetApi } from "./dummyapi.io";
import { API_USERS_URL } from "../const/api/dummyapi.io";

export const getUser = (id: string) =>
  GetApi(API_USERS_URL.concat("/").concat(id));
