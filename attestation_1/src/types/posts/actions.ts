import Action from "../action";
import { PostPreview } from "../api/api";

export interface PostsAction extends Action {
  posts?: Array<PostPreview>;
  total?: number;
  page?: number;
  limit?: number;
  edit?: boolean;
}

export interface PostsActionFunc {
  (page: number, limit: number): PostsAction;
}
