import {
  takeEvery,
  put,
  all,
  call,
  AllEffect,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { UserAction } from "../types/user/actions";
import { getUser } from "../api/user";

import { AUTH_LOGIN } from "../const/auth/actions";
import { authLoginActionSuccess } from "../actions/auth";

import { preloadOffAction, preloadOnAction } from "../actions/preloader";
import { ErrorOnAction } from "../actions/error";

function* authLogin(
  params: UserAction
): Generator<
  AllEffect<CallEffect<any>> | PutEffect<UserAction>,
  void,
  [any, any]
  > {
  try {
    switch (params.type) {
      case AUTH_LOGIN: {
        // const user: UserFullType = {};
        // user.id = "228";
        yield put(preloadOnAction()); // показать прелоадер
        const [user] = yield all([call(getUser, params.id as string)]);

        // console.group("saga AUTH_LOGIN");
        // console.log(user);
        // console.groupEnd();
        if ("id" in user) {
          yield put(authLoginActionSuccess(user));
        } else {
          yield put(
            ErrorOnAction("Авторизация не удалась! ".concat(user.error))
          );
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

export default function* authWatcher() {
  yield takeEvery(AUTH_LOGIN, authLogin);
}
