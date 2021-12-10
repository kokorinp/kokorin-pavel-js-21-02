import { PostPreview } from "../api/api";

export interface PostsState {
  edit?: boolean;
  posts: Array<PostPreview>;
  page: number;
  limit: number;
  total: number;
}
