import { CommentFullType } from "../api/api";

export interface CommentsState {
  comments: Array<CommentFullType>;
  page: number;
  limit: number;
  total: number;
}
