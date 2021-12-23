import {
  takeEvery,
  put,
  all,
  call,
  AllEffect,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { PostsAction } from "../types/posts/actions";
import { POSTS_LOAD } from "../const/posts/actions";
import { getPosts } from "../api/posts";
import { postsLoadActionSuccess } from "../actions/posts";
import { ListResponseTypePostPreview } from "../types/api/api";
import { preloadOffAction, preloadOnAction } from "../actions/preloader";
import { ErrorOnAction } from "../actions/error";

function* postsLoad(
  params: PostsAction
): Generator<
  AllEffect<CallEffect<any>> | PutEffect<PostsAction>,
  void,
  [any, any]
  > {
  try {
    switch (params.type) {
      case POSTS_LOAD: {
        yield put(preloadOnAction()); // показать прелоадер
        const [posts]: Array<ListResponseTypePostPreview> = yield all([
          call(getPosts, params.page as number, params.limit as number),
        ]);
        // console.group("saga POSTS_LOAD");
        // console.log(posts);
        // console.groupEnd();
        if ("data" in posts) {
          yield put(postsLoadActionSuccess(posts));
          yield put(preloadOffAction()); // скрыть прелоадер
        }
        break;
      }
      default:
    }
  } catch (e: any) {
    yield put(
      ErrorOnAction(
        e.name.toString().concat(" - ").concat(e.message.toString())
      )
    );
    yield put(preloadOffAction()); // скрыть прелоадер
  }
}

export default function* postsWatcher() {
  yield takeEvery(POSTS_LOAD, postsLoad);
}
