import React from 'react';
import configureStore from 'redux-mock-store';
import saga from 'redux-saga';
import { mount } from 'enzyme';

import PostModal from '../../../components/PostModal/PostModal';

import { postCloseAction } from '../../../actions/post';

jest.mock('../../../actions/post');

const mockStore = configureStore([saga]);
const post = {
  id: 'asdf',
  text: 'zzxcv',
  image: 'zxcv',
  likes: 0,
  link: 'zcvvv',
  tags: [],
  publishDate: '2021-01-01',
  isLoading: true,
  owner: {},
};
const comments = { comments: [], page: 0, limit: 0, total: 0 };

describe('component Posts', () => {
  test('Posts to have length 1', () => {
    const store = mockStore({
      post,
      comments,
    });

    store.dispatch = jest.fn();
    const wrapper = mount(<PostModal store={store} />);
    expect(wrapper.find('.post')).toHaveLength(1);
  });

  test('Posts to have length 0', () => {
    const store = mockStore({
      post: { ...post, isLoading: false },
      comments,
    });

    store.dispatch = jest.fn();
    const wrapper = mount(<PostModal store={store} />);

    expect(wrapper.find('.post')).toHaveLength(0);
  });

  test('Post action postCloseAction click', () => {
    const store = mockStore({
      post: { ...post, isLoading: true },
      comments,
    });

    store.dispatch = jest.fn();

    const wrapper = mount(<PostModal store={store} />);
    wrapper.find('.post__fog').simulate('click');
    expect(postCloseAction).toBeCalled();
  });
});
