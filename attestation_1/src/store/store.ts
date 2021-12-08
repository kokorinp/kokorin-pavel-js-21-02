import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import usersReducer from "../reducers/users";
import preloadReducer from "../reducers/preload";
import errorReducer from "../reducers/error";
import userReducer from "../reducers/user";

import usersWatcher from "../sagas/users";
import userWatcher from "../sagas/user";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    // объединяет
    // auth: authReducer,
    users: usersReducer,
    isLoading: preloadReducer,
    isError: errorReducer,
    user: userReducer,
    // comments: commentsReducer,
    // posts: postsReducer,
  }),
  applyMiddleware(sagaMiddleware)
);

function* rootSaga() {
  yield all([
    // fork(authWatcher),
    fork(usersWatcher),
    fork(userWatcher),
    // fork(commentsWatcher),
    // fork(postsWatcher)
  ]);
}

sagaMiddleware.run(rootSaga);

export default store;
