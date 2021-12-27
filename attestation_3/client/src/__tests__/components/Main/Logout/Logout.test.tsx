import React from 'react';
import configureStore from 'redux-mock-store';
import saga from 'redux-saga';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { authLogoutAction } from '../../../../actions/auth';

import Logout from '../../../../components/Main/Logout/Logout';

jest.mock('../../../../actions/auth');

const mockStore = configureStore([saga]);

describe('component Logout', () => {
  test('Logout to have length 1', () => {
    const store = mockStore({
      auth: {
        id: 'qwer',
      },
    });

    store.dispatch = jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <Logout store={store} />
      </MemoryRouter>,
    );
    expect(wrapper).toHaveLength(1);
  });

  test('Logout authLogoutAction call', () => {
    const store = mockStore({
      auth: {
        id: 'qwer',
      },
    });

    store.dispatch = jest.fn();
    mount(
      <MemoryRouter>
        <Logout store={store} />
      </MemoryRouter>,
    );
    expect(authLogoutAction).toBeCalled();
  });
});
