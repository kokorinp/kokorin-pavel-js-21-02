import {
  takeEvery,
  put,
  all,
  call,
  AllEffect,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { UsersAction } from "../types/users/actions";
import { USERS_LOAD } from "../const/users/actions";
import { getUsers } from "../api/users";
import { usersLoadActionSuccess } from "../actions/users";
import { ListResponseTypeUserPreview } from "../types/api/api";
import { preloadOffAction, preloadOnAction } from "../actions/preloader";
import { ErrorOnAction } from "../actions/error";

function* usersLoad(
  params: UsersAction
): Generator<
  AllEffect<CallEffect<any>> | PutEffect<UsersAction>,
  void,
  [any, any]
  > {
  try {
    switch (params.type) {
      case USERS_LOAD: {
        yield put(preloadOnAction()); // показать прелоадер
        const [users]: Array<ListResponseTypeUserPreview> = yield all([
          call(getUsers, params.page as number, params.limit as number),
        ]);
        // console.group("saga USERS_LOAD");
        // console.log(users);
        // console.groupEnd();
        // if (users.hasOwnProperty("data")) {
        if ("data" in users) {
          yield put(usersLoadActionSuccess(users));
          yield put(preloadOffAction()); // скрыть прелоадер
        }
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

export default function* usersWatcher() {
  yield takeEvery(USERS_LOAD, usersLoad);
}
