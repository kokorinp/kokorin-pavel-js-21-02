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
import { REGISTRATION_ON } from "../const/reg/actions";
import { RegistrationAction } from "../types/reg/actions";
import { regUser } from "../api/reg";
import { UserFullType } from "../types/api/api";

function* regLogin(
  params: RegistrationAction
): Generator<AllEffect<CallEffect<any>> | PutEffect<any>, void, [any, any]> {
  try {
    switch (params.type) {
      case REGISTRATION_ON: {
        // const user: UserFullType = {};
        // user.id = "228";
        yield put(preloadOnAction()); // показать прелоадер
        const [user]: Array<UserFullType> = yield all([
          call(regUser, params.user),
        ]);

        // console.group("saga REGISTRATION_ON");
        // console.log(user);
        // console.groupEnd();
        if ("id" in user) {
          yield put(authLoginActionSuccess(user));
        } else if ("error" in user) {
          yield put(
            ErrorOnAction(
              "Регистрация не удалась! "
                .concat(user.error as string)
                .concat(" ")
                .concat(Object.values(user.data).join(" | "))
            )
          );
        } else {
          yield put(
            ErrorOnAction(
              "Регистрация не удалась! Неизвестная ошибка в SAGA REGISTRATION_ON"
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

export default function* regWatcher() {
  yield takeEvery(REGISTRATION_ON, regLogin);
}
