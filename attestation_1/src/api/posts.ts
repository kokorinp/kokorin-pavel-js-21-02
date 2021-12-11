import { GetApi } from "./dummyapi.io";
import {
  API_POSTS_URL,
  LIMIT_FIELD,
  PAGE_FIELD,
} from "../const/api/dummyapi.io";

export const getPosts = (page: number, limit?: number) =>
  GetApi(API_POSTS_URL, {
    [PAGE_FIELD]: page,
    [LIMIT_FIELD]: limit || 20,
  });
