import commentsReducer from '../../reducers/comments';
import { COMMENTS_LOAD_SUCCESS } from '../../const/comments/actions';
import { CommentFullType } from '../../types/api/api';

const initialState = {
  comments: [] as Array<CommentFullType>,
  page: 0,
  limit: 0,
  total: 0,
};

describe('commentsReducer test', () => {
  test('UNKNOWN', () => {
    const action = { type: 'UNKNOWN' };
    expect(commentsReducer(initialState, action)).toEqual({ ...initialState });
  });

  test('COMMENTS_LOAD_SUCCESS', () => {
    const page = 5;
    const comments = [] as Array<CommentFullType>;
    const action = { type: COMMENTS_LOAD_SUCCESS, page, comments };
    expect(commentsReducer(initialState, action)).toEqual({ ...initialState, page, comments });
  });
});
