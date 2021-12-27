import React from 'react';
import configureStore from 'redux-mock-store';
import saga from 'redux-saga';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { postsLoadAction } from '../../../../actions/posts';

import Posts from '../../../../components/Main/Posts/Posts';

jest.mock('../../../../actions/posts');

const mockStore = configureStore([saga]);

describe('component Posts', () => {
  test('Posts to have length 1', () => {
    const store = mockStore({
      posts: {
        total: 0,
        page: 0,
        limit: 0,
        posts: [],
      },
    });

    store.dispatch = jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <Posts store={store} />
      </MemoryRouter>,
    );

    expect(wrapper.find('.posts')).toHaveLength(1);
  });

  test('Posts action usersLoadAction', () => {
    const store = mockStore({
      posts: {
        total: 0,
        page: 0,
        limit: 0,
        posts: [],
      },
    });

    store.dispatch = jest.fn();

    mount(
      <MemoryRouter>
        <Posts store={store} />
      </MemoryRouter>,
    );

    expect(postsLoadAction).toBeCalledWith(-1, -1);
  });
});
