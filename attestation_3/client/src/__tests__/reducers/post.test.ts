import postReducer from '../../reducers/post';
import { UserPreview } from '../../types/api/api';
import { PostState } from '../../types/post/state';
import { POST_CLOSE, POST_LOAD, POST_LOAD_SUCCESS } from '../../const/post/actions';

const initialState: PostState = {
  id: '',
  text: '',
  image: '',
  likes: 0,
  link: '',
  tags: [],
  publishDate: '',
  isLoading: false,
  owner: {} as UserPreview,
};

describe('postReducer test', () => {
  test('UNKNOWN', () => {
    const action = { ...initialState, type: 'UNKNOWN' };
    expect(postReducer(initialState, action)).toEqual({ ...initialState });
  });

  test('POST_LOAD', () => {
    const action = { ...initialState, type: POST_LOAD };
    expect(postReducer(initialState, action)).toEqual({ ...initialState });
  });

  test('POST_LOAD_SUCCESS', () => {
    const id = 'asdf';
    const text = 'l;fkrkasklaadk a';
    const action = { ...initialState, type: POST_LOAD_SUCCESS, id, text };
    expect(postReducer(initialState, action)).toEqual({ ...initialState, id, text, isLoading: true });
  });

  test('POST_CLOSE', () => {
    const action = { ...initialState, type: POST_CLOSE };
    expect(postReducer(initialState, action)).toEqual({ ...initialState, isLoading: false });
  });
});
