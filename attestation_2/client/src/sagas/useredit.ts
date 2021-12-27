import {
  takeEvery,
  put,
  all,
  call,
  AllEffect,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";

import { authLoginActionSuccess } from "../actions/auth";

import { preloadOffAction, preloadOnAction } from "../actions/preloader";
import { ErrorOnAction } from "../actions/error";
import { USEREDIT_UPDATE } from "../const/useredit/actions";
import { RegistrationAction } from "../types/reg/actions";
import { putUserEdit } from "../api/useredit";
import { UserFullType } from "../types/api/api";
import { userLoadActionSuccess } from "../actions/user";

function* userEditUpdate(
  params: RegistrationAction
): Generator<AllEffect<CallEffect<any>> | PutEffect<any>, void, [any, any]> {
  try {
    switch (params.type) {
      case USEREDIT_UPDATE: {
        // const user: UserFullType = {};
        // user.id = "228";
        yield put(preloadOnAction()); // показать прелоадер
        const [user]: Array<UserFullType> = yield all([
          call(putUserEdit, params.user),
        ]);

        // console.group("saga USEREDIT_UPDATE");
        // console.log(user);
        // console.groupEnd();

        if ("id" in user) {
          // сага умеет запускать события одновременно? делать all([call,call]) умеет/
          yield put(authLoginActionSuccess(user));
          yield put(userLoadActionSuccess(user));
        } else if ("error" in user) {
          yield put(
            ErrorOnAction(
              "Не удаласось обновить данные! "
                .concat(user.error as string)
                .concat(" ")
                .concat(Object.values(user.data).join(" | "))
            )
          );
        } else {
          yield put(
            ErrorOnAction(
              "Не удаласось обновить данные! Неизвестная ошибка в SAGA USEREDIT_UPDATE"
            )
          );
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

export default function* userEditWatcher() {
  yield takeEvery(USEREDIT_UPDATE, userEditUpdate);
}
