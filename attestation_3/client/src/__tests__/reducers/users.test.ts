import usersReducer from '../../reducers/users';
import { USERS_LOAD, USERS_LOAD_SUCCESS } from '../../const/users/actions';

const initialState = {
  users: [],
  page: 0,
  limit: 6,
  total: 0,
};

describe('usersReducer test', () => {
  test('UNKNOWN', () => {
    const action = { ...initialState, type: 'UNKNOWN' };
    expect(usersReducer(initialState, action)).toEqual({ ...initialState });
  });
  test('USERS_LOAD', () => {
    const action = { ...initialState, type: USERS_LOAD };
    expect(usersReducer(initialState, action)).toEqual({ ...initialState });
  });

  test('USERS_LOAD_SUCCESS', () => {
    const page = 1;
    const limit = 40;
    const total = 99;
    const action = { ...initialState, type: USERS_LOAD_SUCCESS, page, limit, total };
    expect(usersReducer(initialState, action)).toEqual({ ...initialState, page, limit, total });
  });
});
