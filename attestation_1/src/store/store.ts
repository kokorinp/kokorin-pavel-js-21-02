import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import usersReducer from "../reducers/users";
import preloadReducer from "../reducers/preload";
import errorReducer from "../reducers/error";
import userReducer from "../reducers/user";
import postsReducer from "../reducers/posts";
import postReducer from "../reducers/post";
import registrationReducer from "../reducers/reg";

import usersWatcher from "../sagas/users";
import userWatcher from "../sagas/user";
import postsWatcher from "../sagas/posts";
import postWatcher from "../sagas/post";
import commentsReducer from "../reducers/comments";
import authReducer from "../reducers/auth";
import authWatcher from "../sagas/auth";
import regWatcher from "../sagas/reg";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    // объединяет
    users: usersReducer,
    posts: postsReducer,
    post: postReducer,
    isLoading: preloadReducer,
    isError: errorReducer,
    user: userReducer,
    auth: authReducer,
    comments: commentsReducer,
    // posts: postsReducer,
    reg: registrationReducer,
  }),
  applyMiddleware(sagaMiddleware)
);

function* rootSaga() {
  yield all([
    fork(authWatcher),
    fork(usersWatcher),
    fork(userWatcher),
    fork(postsWatcher),
    fork(postWatcher),
    fork(regWatcher),
    // fork(commentsWatcher),
    // fork(postsWatcher)
  ]);
}

sagaMiddleware.run(rootSaga);

export default store;
