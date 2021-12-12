import { GetApi } from "./dummyapi.io";
import {
  API_POST_URL,
  API_USER_URL,
  LIMIT_FIELD,
  PAGE_FIELD,
} from "../const/api/dummyapi.io";

export const getPosts = (page: number, limit?: number) =>
  GetApi(API_POST_URL, {
    [PAGE_FIELD]: page,
    [LIMIT_FIELD]: limit || 20,
  });

export const getPostsByUser = (id: string, page?: number, limit?: number) =>
  GetApi(API_USER_URL.concat("/").concat(id).concat("/").concat(API_POST_URL), {
    [PAGE_FIELD]: page || 0,
    [LIMIT_FIELD]: limit || 6,
  });
