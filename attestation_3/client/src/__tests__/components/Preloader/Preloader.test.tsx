import React from 'react';
import configureStore from 'redux-mock-store';
import saga from 'redux-saga';
import { render } from 'enzyme';

import Preloader from '../../../components/Preloader/Preloader';

const mockStore = configureStore([saga]);

describe('component Preloader', () => {
  test('Preloader on', () => {
    const store = mockStore({ isLoading: { isLoading: true } });
    const wrapper = render(<Preloader store={store} />);
    expect(wrapper.is('div.preloader_hide')).toBeFalsy();
  });

  test('Preloader off', () => {
    const store = mockStore({ isLoading: { isLoading: false } });
    const wrapper = render(<Preloader store={store} />);
    expect(wrapper.is('div.preloader_hide')).toBeTruthy();
  });
});
