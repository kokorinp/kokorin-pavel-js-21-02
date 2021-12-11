import produce from "immer";
import { POSTS_LOAD, POSTS_LOAD_SUCCESS } from "../const/posts/actions";
import { PostsAction } from "../types/posts/actions";
import { PostsState } from "../types/posts/state";
import { getLimitInit, getPageInit } from "../utils/PaginatorUtils";
import { DateToString } from "../utils/DateUtils";
import { PostPreview } from "../types/api/api";

const initialState: PostsState = {
  posts: [],
  page: getPageInit("PostsPage"),
  limit: getLimitInit("PostsLimit"),
  total: 0,
};
// DateToString
const PostsLoadSuccess = (dr: PostsState, ua: PostsAction): PostsState => {
  const p = ua.posts
    ? ua.posts.map((e: PostPreview) => ({
      ...e,
      publishDate: DateToString(e.publishDate),
    }))
    : [];

  return {
    ...dr,
    posts: p,
    page: ua.page || getPageInit("PostsPage"),
    limit: ua.limit || getLimitInit("PostsLimit"),
    total: ua.total || 0,
  };
};

const postsReducer = (state: PostsState = initialState, action: PostsAction) =>
  produce(state, (draft: PostsState) => {
    switch (action.type) {
      case POSTS_LOAD: {
        return {
          ...draft,
        };
      }

      case POSTS_LOAD_SUCCESS: {
        return action.posts ? PostsLoadSuccess(draft, action) : state;
      }

      default:
        return state;
    }
  });

export default postsReducer;
