import { PostAction, PostActionFunc } from "../types/post/actions";
import {
  POST_CLOSE,
  POST_LOAD,
  POST_LOAD_SUCCESS,
} from "../const/post/actions";
import { PostFullType } from "../types/api/api";

export const postLoadAction: PostActionFunc = (newid: string): PostAction => ({
  type: POST_LOAD,
  id: newid,
  isLoading: false,
});

export const postCloseAction = (): PostAction => ({
  type: POST_CLOSE,
  id: "",
  isLoading: false,
});

export const postLoadActionSuccess = (resp: PostFullType): PostAction => ({
  type: POST_LOAD_SUCCESS,
  isLoading: true,
  id: resp.id,
  text: resp.text,
  image: resp.image,
  likes: resp.likes,
  link: resp.link,
  tags: resp.tags,
  publishDate: resp.publishDate,
  owner: resp.owner,
});
