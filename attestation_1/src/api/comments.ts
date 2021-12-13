import { GetApi } from "./dummyapi.io";
import {
  API_COMMENT_URL,
  API_POST_URL,
  LIMIT_FIELD,
  PAGE_FIELD,
} from "../const/api/dummyapi.io";

export const getCommetsByPost = (id: string, page?: number, limit?: number) =>
  GetApi(
    API_POST_URL.concat("/").concat(id).concat("/").concat(API_COMMENT_URL),
    {
      [PAGE_FIELD]: page || 0,
      [LIMIT_FIELD]: limit || 6,
    }
  );
