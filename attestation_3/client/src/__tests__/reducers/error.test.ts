import errorReducer from '../../reducers/error';
import { ERROR_OFF, ERROR_ON } from '../../const/error/actions';

const initialState = { textError: '', isError: false };

describe('authReducer test', () => {
  test('UNKNOWN', () => {
    const action = { ...initialState, type: 'UNKNOWN' };
    expect(errorReducer(initialState, action)).toEqual({ ...initialState });
  });

  test('ERROR_ON', () => {
    const textError = 'asdfkawerlkn asdlkf laskdmf asdlkfm';
    const action = { ...initialState, type: ERROR_ON, textError };
    expect(errorReducer(initialState, action)).toEqual({
      isError: true,
      textError,
    });
  });

  test('ERROR_OFF', () => {
    const textError = '';
    const action = { ...initialState, type: ERROR_OFF, textError };
    expect(errorReducer(initialState, action)).toEqual({
      isError: false,
      textError,
    });
  });
});
