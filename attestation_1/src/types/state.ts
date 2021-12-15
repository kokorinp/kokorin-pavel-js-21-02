import { UsersState } from "./users/state";
import { PreloadState } from "./preload/state";
import ErrorState from "./error/state";
import { UserState } from "./user/state";
import { PostsState } from "./posts/state";
import { PostState } from "./post/state";
import { CommentsState } from "./comments/state";

export interface State {
  users: UsersState;
  posts: PostsState;
  post: PostState;
  isLoading: PreloadState;
  isError: ErrorState;
  user: UserState;
  auth: UserState;
  comments: CommentsState;
}
