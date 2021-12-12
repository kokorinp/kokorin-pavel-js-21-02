import { GetApi } from "./dummyapi.io";
import { API_POST_URL } from "../const/api/dummyapi.io";

export const getPost = (id: string) =>
  GetApi(API_POST_URL.concat("/").concat(id));
