import produce from "immer";
import {
  POST_LOAD,
  POST_LOAD_SUCCESS,
  POST_CLOSE,
} from "../const/post/actions";
import { PostAction } from "../types/post/actions";
import { PostState } from "../types/post/state";
import { UserPreview } from "../types/api/api";
import { DateToString } from "../utils/DateUtils";

const initialState: PostState = {
  id: "",
  text: "",
  image: "",
  likes: 0,
  link: "",
  tags: [],
  publishDate: "",
  isLoading: false,
  owner: {} as UserPreview,
};

const PostLoadSuccess = (dr: PostState, ua: PostAction): PostState => {
  const p = ua.publishDate ? DateToString(ua.publishDate) : "";
  return {
    ...dr,
    id: ua.id || "",
    text: ua.text || "",
    image: ua.image || "",
    likes: ua.likes || 0,
    link: ua.link || "",
    tags: ua.tags || [],
    publishDate: p,
    isLoading: true,
    owner: ua.owner || ({} as UserPreview),
  };
};

const postReducer = (state: PostState = initialState, action: PostAction) =>
  produce(state, (draft: PostState) => {
    switch (action.type) {
      case POST_LOAD: {
        return {
          ...draft,
        };
      }

      case POST_LOAD_SUCCESS: {
        return action.id ? PostLoadSuccess(draft, action) : state;
      }

      case POST_CLOSE: {
        return {
          ...draft,
          isLoading: false,
        };
      }
      default:
        return state;
    }
  });

export default postReducer;
