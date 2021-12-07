import { UsersState } from "./users/state";
import { PreloadState } from "./preload/state";
import ErrorState from "./error/state";

export interface State {
  // auth: AuthState;
  users: UsersState;
  isLoading: PreloadState;
  isError: ErrorState;
  // comments: CommentListState;
  // posts: PostListState;
}
