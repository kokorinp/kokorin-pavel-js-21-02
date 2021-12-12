import {
  UserAction,
  UserActionFunc,
  UserPostsActionFunc,
} from "../types/user/actions";
import {
  USER_LOAD,
  USER_LOAD_SUCCESS,
  USER_POSTS_LOAD,
} from "../const/user/actions";
import { ListResponseTypePostPreview, UserFullType } from "../types/api/api";
import { PostsAction } from "../types/posts/actions";
import { POSTS_LOAD_SUCCESS } from "../const/posts/actions";

export const userLoadAction: UserActionFunc = (newid: string) => ({
  type: USER_LOAD,
  id: newid,
});

// console.group("Action USER_LOAD");
// console.log(page);
// console.log(pageSize);
// console.groupEnd();

export const userLoadActionSuccess = (resp: UserFullType): UserAction => ({
  type: USER_LOAD_SUCCESS,
  edit: false,
  id: resp.id || "",
  title: resp.title || "",
  firstName: resp.firstName || "",
  lastName: resp.lastName || "",
  gender: resp.gender || "",
  email: resp.email || "",
  dateOfBirth: resp.dateOfBirth || "",
  registerDate: resp.registerDate || "",
  phone: resp.phone || "",
  picture: resp.picture || "",
  location: resp.location || {},
});

export const userPostsLoadActionSuccess = (
  resp: ListResponseTypePostPreview
): PostsAction => ({
  type: POSTS_LOAD_SUCCESS,
  total: resp.total,
  page: resp.page,
  limit: resp.limit,
  posts: resp.data,
});

export const userPostsLoadAction: UserPostsActionFunc = (
  id: string,
  page: number,
  limit: number
) => ({
  type: USER_POSTS_LOAD,
  id,
  page,
  limit,
});
