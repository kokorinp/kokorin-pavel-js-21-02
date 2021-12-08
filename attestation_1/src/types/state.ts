import { UsersState } from "./users/state";
import { PreloadState } from "./preload/state";
import ErrorState from "./error/state";
import { UserState } from "./user/state";

export interface State {
  // auth: AuthState;
  users: UsersState;
  isLoading: PreloadState;
  isError: ErrorState;
  user: UserState;
  // comments: CommentListState;
  // posts: PostListState;
}
