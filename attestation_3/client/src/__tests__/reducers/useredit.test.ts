import userEditReducer from '../../reducers/useredit';
import { USEREDIT_OFF, USEREDIT_ON, USEREDIT_UPDATE } from '../../const/useredit/actions';

const initialState = {
  edit: false,
};

describe('userEditReducer test', () => {
  test('UNKNOWN', () => {
    const action = { ...initialState, type: 'UNKNOWN' };
    expect(userEditReducer(initialState, action)).toEqual({ ...initialState });
  });

  test('USEREDIT_ON', () => {
    const action = { ...initialState, type: USEREDIT_ON };
    expect(userEditReducer(initialState, action)).toEqual({ ...initialState, edit: true });
  });

  test('USEREDIT_UPDATE', () => {
    const action = { ...initialState, type: USEREDIT_UPDATE };
    expect(userEditReducer(initialState, action)).toEqual({ ...initialState, edit: false });
  });
  test('USEREDIT_OFF', () => {
    const action = { ...initialState, type: USEREDIT_OFF };
    expect(userEditReducer(initialState, action)).toEqual({ ...initialState, edit: false });
  });
});
