import { UsersState } from "./users/state";
import { PreloadState } from "./preload/state";

export interface State {
  // auth: AuthState;
  users: UsersState;
  isLoading: PreloadState;
  // comments: CommentListState;
  // posts: PostListState;
}
