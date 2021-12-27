import React from 'react';
import configureStore from 'redux-mock-store';
import saga from 'redux-saga';
import { mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { userLoadAction } from '../../../../actions/user';

import User from '../../../../components/Main/User/User';

jest.mock('../../../../actions/user');

const mockStore = configureStore([saga]);

describe('component User', () => {
  test('User to have 1', () => {
    const store = mockStore({
      auth: {
        id: 'asdasdasd2',
      },
      user: {
        id: 'zxcv',
        title: 'mr',
        firstName: 'firstName',
        lastName: 'lastName',
        fullname: 'mr. firstName lastName',
        gender: 'male',
        email: 'zxcv@zxcv.zxc',
        dateOfBirth: '1 января 2021',
        dateOfBirthRaw: '2021-01-01',
        registerDate: '1 марта 2022',
        registerDateRaw: '2022-03-01',
        phone: '1234',
        picture: 'http://aaa.aaa.aa/aaa.jpg',
      },
      posts: { posts: [], page: 0, limit: 0, total: 0 },
    });
    store.dispatch = jest.fn();
    const wrapper = render(
      <MemoryRouter>
        <User store={store} />
      </MemoryRouter>,
    );

    expect(wrapper.find('.user')).toHaveLength(1);
  });

  test('User action loadUser', () => {
    const store = mockStore({
      auth: {
        id: 'asdasdasd2',
      },
      user: {
        id: 'zxcv',
        title: 'mr',
        firstName: 'firstName',
        lastName: 'lastName',
        fullname: 'mr. firstName lastName',
        gender: 'male',
        email: 'zxcv@zxcv.zxc',
        dateOfBirth: '1 января 2021',
        dateOfBirthRaw: '2021-01-01',
        registerDate: '1 марта 2022',
        registerDateRaw: '2022-03-01',
        phone: '1234',
        picture: 'http://aaa.aaa.aa/aaa.jpg',
      },
      posts: { posts: [], page: 0, limit: 0, total: 0 },
    });

    store.dispatch = jest.fn();

    mount(
      <MemoryRouter>
        <User store={store} />
      </MemoryRouter>,
    );

    expect(userLoadAction).toBeCalled();
  });
});
