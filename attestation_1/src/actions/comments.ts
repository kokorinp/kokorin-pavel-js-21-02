import { COMMENTS_LOAD_SUCCESS } from "../const/comments/actions";
import { ListResponseTypeComments } from "../types/api/api";

export const postCommentsLoadActionSuccess = (
  resp: ListResponseTypeComments
) => ({
  type: COMMENTS_LOAD_SUCCESS,
  comments: resp.data,
  total: resp.total,
  page: resp.page,
  limit: resp.limit,
});
