import produce from "immer";
import { CommentsState } from "../types/comments/state";
import { CommentFullType } from "../types/api/api";
import { CommentsAction } from "../types/comments/actions";
import { COMMENTS_LOAD_SUCCESS } from "../const/comments/actions";
import { DateToString } from "../utils/DateUtils";

const initialState: CommentsState = {
  comments: [] as Array<CommentFullType>,
  page: 0,
  limit: 0,
  total: 0,
};

const commentsReducer = (
  state: CommentsState = initialState,
  action: CommentsAction
) =>
  produce(state, (draft: CommentsState) => {
    switch (action.type) {
      case COMMENTS_LOAD_SUCCESS: {
        const c = action.comments
          ? action.comments.map((e: CommentFullType) => ({
            ...e,
            publishDate: e.publishDate ? DateToString(e.publishDate) : "",
          }))
          : ([] as Array<CommentFullType>);
        return {
          ...draft,
          comments: c || initialState.comments,
          page: action.page || initialState.page,
          limit: action.limit || initialState.limit,
          total: action.total || initialState.total,
        };
      }

      default:
        return state;
    }
  });

export default commentsReducer;
