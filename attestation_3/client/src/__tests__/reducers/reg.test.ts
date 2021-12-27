import registrationReducer from '../../reducers/reg';

import { REGISTRATION_ON } from '../../const/reg/actions';

const initialState = {
  isRegistration: false,
};

describe('authReducer test', () => {
  test('UNKNOWN', () => {
    const action = { ...initialState, type: 'UNKNOWN' };
    expect(registrationReducer(initialState, action)).toEqual({ ...initialState });
  });

  test('REGISTRATION_ON', () => {
    const action = { ...initialState, type: REGISTRATION_ON };
    expect(registrationReducer(initialState, action)).toEqual({ ...initialState, isRegistration: true });
  });
});
