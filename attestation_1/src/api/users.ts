import { GetApi } from "./dummyapi.io";
import {
  API_USERS_URL,
  LIMIT_FIELD,
  PAGE_FIELD,
} from "../const/api/dummyapi.io";

export const getUsers = (page: number, pageSize?: number) =>
  GetApi(API_USERS_URL, {
    [PAGE_FIELD]: page,
    [LIMIT_FIELD]: pageSize || 20,
  });
