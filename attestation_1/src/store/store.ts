import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import usersReducer from "../reducers/users";
import usersWatcher from "../sagas/users";
import preloadReducer from "../reducers/preload";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    // объединяет
    // auth: authReducer,
    users: usersReducer,
    isLoading: preloadReducer,
    // comments: commentsReducer,
    // posts: postsReducer,
  }),
  applyMiddleware(sagaMiddleware)
);

function* rootSaga() {
  yield all([
    // fork(authWatcher),
    fork(usersWatcher),
    // fork(commentsWatcher),
    // fork(postsWatcher)
  ]);
}

sagaMiddleware.run(rootSaga);

export default store;
