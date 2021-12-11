import { GetApi } from "./dummyapi.io";
import { API_POSTS_URL } from "../const/api/dummyapi.io";

export const getPost = (id: string) =>
  GetApi(API_POSTS_URL.concat("/").concat(id));
