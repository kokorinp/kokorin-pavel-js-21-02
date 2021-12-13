import Action from "../action";
import { CommentFullType } from "../api/api";

export interface CommentsAction extends Action {
  comments?: Array<CommentFullType>;
  total?: number;
  page?: number;
  limit?: number;
}

export interface CommentsByPostActionFunc {
  (id: string, page?: number, limit?: number): CommentsAction;
}
