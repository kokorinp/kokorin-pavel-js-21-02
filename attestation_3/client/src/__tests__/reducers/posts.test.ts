import postsReducer from '../../reducers/posts';
import { PostsState } from '../../types/posts/state';
import { POSTS_LOAD, POSTS_LOAD_SUCCESS } from '../../const/posts/actions';

const initialState: PostsState = {
  posts: [],
  page: 0,
  limit: 0,
  total: 0,
};

describe('authReducer test', () => {
  test('UNKNOWN', () => {
    const action = { ...initialState, type: 'UNKNOWN' };
    expect(postsReducer(initialState, action)).toEqual({ ...initialState });
  });

  test('POSTS_LOAD', () => {
    const action = { ...initialState, type: POSTS_LOAD };
    expect(postsReducer(initialState, action)).toEqual({ ...initialState });
  });

  test('POSTS_LOAD_SUCCESS', () => {
    const page = 50;
    const total = 700;
    const limit = 5;
    const action = { ...initialState, type: POSTS_LOAD_SUCCESS, page, total, limit };
    expect(postsReducer(initialState, action)).toEqual({ ...initialState, page, total, limit });
  });
});
