import preloadReducer from '../../reducers/preload';
import { PRELOAD_OFF, PRELOAD_ON } from '../../const/preload/actions';

const initialState = {
  isLoading: false,
};

describe('preloadReducer test', () => {
  test('UNKNOWN', () => {
    const action = { ...initialState, type: 'UNKNOWN' };
    expect(preloadReducer(initialState, action)).toEqual({ ...initialState });
  });

  test('PRELOAD_ON', () => {
    const action = { ...initialState, type: PRELOAD_ON };
    expect(preloadReducer(initialState, action)).toEqual({ ...initialState, isLoading: true });
  });

  test('PRELOAD_OFF', () => {
    const action = { ...initialState, type: PRELOAD_OFF };
    expect(preloadReducer(initialState, action)).toEqual({ ...initialState, isLoading: false });
  });
});
