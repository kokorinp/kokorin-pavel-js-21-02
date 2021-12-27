import authReducer from '../../reducers/auth';
import { AUTH_LOGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from '../../const/auth/actions';

const initialState = {
  id: '',
  title: '',
  firstName: '',
  lastName: '',
  gender: '',
  email: '',
  dateOfBirth: '',
  registerDate: '',
  dateOfBirthRaw: '',
  registerDateRaw: '',
  phone: '',
  picture: '',
  location: {},
  fullname: '',
};

describe('authReducer test', () => {
  test('UNKNOWN', () => {
    const action = { ...initialState, type: 'UNKNOWN' };
    expect(authReducer(initialState, action)).toEqual({ ...initialState });
  });

  test('AUTH_LOGIN', () => {
    const action = { ...initialState, type: AUTH_LOGIN };
    expect(authReducer(initialState, action)).toEqual({ ...initialState });
  });

  test('AUTH_LOGOUT', () => {
    const action = { ...initialState, type: AUTH_LOGOUT, id: 'asdfa', lastName: 'asdasd' };
    expect(authReducer(initialState, action)).toEqual({ ...initialState });
  });

  test('AUTH_LOGIN_SUCCESS', () => {
    const id = 'asdfasdf';
    const firstName = 'any firstName';
    const email = 'email@any.ho';
    const action = {
      ...initialState,
      type: AUTH_LOGIN_SUCCESS,
      id,
      firstName,
      email,
    };
    expect(authReducer(initialState, action)).toEqual({
      ...initialState,
      id,
      firstName,
      email,
    });
  });
});
