import userReducer from '../../reducers/user';
import { USER_LOAD, USER_LOAD_SUCCESS } from '../../const/user/actions';

const initialState = {
  // edit: false,
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

describe('userReducer test', () => {
  test('UNKNOWN', () => {
    const action = { ...initialState, type: 'UNKNOWN' };
    expect(userReducer(initialState, action)).toEqual({ ...initialState });
  });

  test('USER_LOAD', () => {
    const id = 'asdfas';
    const action = { ...initialState, type: USER_LOAD, id };
    expect(userReducer(initialState, action)).toEqual({ ...initialState, id });
  });

  test('USER_LOAD_SUCCESS', () => {
    const id = 'asdfas';
    const email = 'asdF@asdf.sd';
    const lastName = 'asdasdddsdf.sd';
    const action = { ...initialState, type: USER_LOAD_SUCCESS, id, email, lastName };
    expect(userReducer(initialState, action)).toEqual({ ...initialState, id, email, lastName });
  });
});
