import {
  takeEvery,
  put,
  all,
  call,
  AllEffect,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { PostAction } from "../types/post/actions";
import { POST_LOAD } from "../const/post/actions";
import { postLoadActionSuccess } from "../actions/post";
import { preloadOffAction, preloadOnAction } from "../actions/preloader";
import { ErrorOnAction } from "../actions/error";
import { getPost } from "../api/post";
import { getCommetsByPost } from "../api/comments";
import { postCommentsLoadActionSuccess } from "../actions/comments";

function* postLoad(
  params: PostAction
): Generator<
  AllEffect<CallEffect<any>> | PutEffect<PostAction>,
  void,
  [any, any]
  > {
  try {
    switch (params.type) {
      case POST_LOAD: {
        // const post: PostFullType = {};
        // post.id = "228";
        yield put(preloadOnAction()); // показать прелоадер
        const [post, comments] = yield all([
          call(getPost, params.id as string),
          call(getCommetsByPost, params.id as string),
        ]);

        // console.group("saga POST_LOAD");
        // console.log(comments);
        // console.groupEnd();
        if ("id" in post) {
          yield put(postLoadActionSuccess(post));
        } else if ("error" in post) {
          yield put(ErrorOnAction(post.error));
        } else {
          yield put(ErrorOnAction("Неизвестная ошибка в SAGA POST_LOAD"));
        }

        if ("data" in comments) {
          yield put(postCommentsLoadActionSuccess(comments));
        } else if ("error" in comments) {
          yield put(ErrorOnAction(comments.error));
        } else {
          yield put(ErrorOnAction("Неизвестная ошибка в SAGA POST_LOAD"));
        }

        yield put(preloadOffAction()); // скрыть прелоадер
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

export default function* postWatcher() {
  yield takeEvery(POST_LOAD, postLoad);
}
