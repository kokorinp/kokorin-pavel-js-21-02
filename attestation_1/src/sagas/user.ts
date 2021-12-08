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
import { USER_LOAD } from "../const/user/actions";
import { getUser } from "../api/user";
import { userLoadActionSuccess } from "../actions/user";
import { UserFullType } from "../types/api/api";
import { preloadOffAction, preloadOnAction } from "../actions/preloader";
import { ErrorOnAction } from "../actions/error";

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
        const [user]: Array<UserFullType> = yield all([
          call(getUser, params.id as string),
        ]);

        console.group("saga USER_LOAD");
        console.log(user);
        console.groupEnd();
        if ("id" in user) {
          yield put(userLoadActionSuccess(user));
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

export default function* userWatcher() {
  yield takeEvery(USER_LOAD, userLoad);
}
