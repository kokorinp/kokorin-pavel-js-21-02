import {
  takeEvery,
  put,
  all,
  call,
  AllEffect,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { UserAction, UserPostsAction } from "../types/user/actions";
import { USER_LOAD, USER_POSTS_LOAD } from "../const/user/actions";
import { getUser } from "../api/user";
import {
  userLoadActionSuccess,
  userPostsLoadActionSuccess,
} from "../actions/user";

import { preloadOffAction, preloadOnAction } from "../actions/preloader";
import { ErrorOnAction } from "../actions/error";
import { getPostsByUser } from "../api/posts";

function* userLoad(
  params: UserAction
): Generator<
  AllEffect<CallEffect<any>> | PutEffect<UserAction>,
  void,
  [any, any]
  > {
  try {
    switch (params.type) {
      case USER_LOAD: {
        // const user: UserFullType = {};
        // user.id = "228";
        yield put(preloadOnAction()); // показать прелоадер
        const [user, posts] = yield all([
          call(getUser, params.id as string),
          call(getPostsByUser, params.id as string),
        ]);

        // console.group("saga USER_LOAD");
        // console.log(posts);
        // console.groupEnd();
        if ("id" in user) {
          yield put(userLoadActionSuccess(user));
        } else {
          yield put(ErrorOnAction(user.error));
        }
        if ("data" in posts) {
          yield put(userPostsLoadActionSuccess(posts));
        } else {
          yield put(ErrorOnAction(posts.error));
        }

        yield put(preloadOffAction()); // скрыть прелоадер
        break;
      }
      default:
    }
  } catch (e: any) {
    // yield put(usersErrorAction(e.toString()));
    // yield put(e.toString());
    // console.log(e.toString());
    yield put(
      ErrorOnAction(
        e.name.toString().concat(" - ").concat(e.message.toString())
      )
    );
    yield put(preloadOffAction()); // скрыть прелоадер
  }
}

function* userPostLoad(
  params: UserPostsAction
): Generator<
  AllEffect<CallEffect<any>> | PutEffect<UserAction>,
  void,
  [any, any]
  > {
  try {
    switch (params.type) {
      case USER_POSTS_LOAD: {
        // const user: UserFullType = {};
        // user.id = "228";
        yield put(preloadOnAction()); // показать прелоадер
        const [posts] = yield all([
          call(
            getPostsByUser,
            params.id as string,
            params.page as number,
            params.limit as number
          ),
        ]);

        // console.group("saga USER_POSTS_LOAD");
        // console.log(posts);
        // console.groupEnd();

        if ("data" in posts) {
          yield put(userPostsLoadActionSuccess(posts));
        } else {
          yield put(ErrorOnAction(posts.error));
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

export default function* userWatcher() {
  yield takeEvery(USER_LOAD, userLoad);
  yield takeEvery(USER_POSTS_LOAD, userPostLoad);
}
