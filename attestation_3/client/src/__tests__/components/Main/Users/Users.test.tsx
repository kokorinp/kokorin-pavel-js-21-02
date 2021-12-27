import React from 'react';
import configureStore from 'redux-mock-store';
import saga from 'redux-saga';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { usersLoadAction } from '../../../../actions/users';

import Users from '../../../../components/Main/Users/Users';

jest.mock('../../../../actions/users');

const mockStore = configureStore([saga]);

describe('component Users', () => {
  test('Users to have length 1', () => {
    const store = mockStore({
      users: {
        total: 0,
        page: 0,
        limit: 0,
        users: [],
      },
    });

    store.dispatch = jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <Users store={store} />
      </MemoryRouter>,
    );

    expect(wrapper.find('.users')).toHaveLength(1);
  });

  test('Users action usersLoadAction', () => {
    const store = mockStore({
      users: {
        total: 0,
        page: 0,
        limit: 0,
        users: [],
      },
    });

    store.dispatch = jest.fn();

    mount(
      <MemoryRouter>
        <Users store={store} />
      </MemoryRouter>,
    );

    expect(usersLoadAction).toBeCalledWith(-1, -1);
  });
});
