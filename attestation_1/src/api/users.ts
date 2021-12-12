import { GetApi } from "./dummyapi.io";
import {
  API_USER_URL,
  LIMIT_FIELD,
  PAGE_FIELD,
} from "../const/api/dummyapi.io";

export const getUsers = (page: number, limit?: number) =>
  GetApi(API_USER_URL, {
    [PAGE_FIELD]: page,
    [LIMIT_FIELD]: limit || 20,
  });
