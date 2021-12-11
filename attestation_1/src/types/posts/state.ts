import { PostPreview } from "../api/api";

export interface PostsState {
  posts: Array<PostPreview>;
  page: number;
  limit: number;
  total: number;
}
