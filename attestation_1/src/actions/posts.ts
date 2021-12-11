import { PostsAction, PostsActionFunc } from "../types/posts/actions";
import { POSTS_LOAD, POSTS_LOAD_SUCCESS } from "../const/posts/actions";
import { ListResponseTypePostPreview } from "../types/api/api";
import {
  getLimitInit,
  getPageInit,
  setToLocalStorage,
} from "../utils/PaginatorUtils";

export const postsLoadAction: PostsActionFunc = (
  page: number,
  limit: number
) => {
  const p: number = page > -1 ? page : getPageInit("PostsPage");
  const l: number = limit > -1 ? limit : getLimitInit("PostsLimit");
  return {
    type: POSTS_LOAD,
    page: p,
    limit: l,
  };
};

export const postsLoadActionSuccess = (
  resp: ListResponseTypePostPreview
): PostsAction => {
  setToLocalStorage("PostsPage", resp.page.toString());
  setToLocalStorage("PostsLimit", resp.limit.toString());
  setToLocalStorage("PostsTotal", resp.total.toString());
  return {
    type: POSTS_LOAD_SUCCESS,
    total: resp.total,
    page: resp.page,
    limit: resp.limit,
    posts: resp.data,
  };
};
