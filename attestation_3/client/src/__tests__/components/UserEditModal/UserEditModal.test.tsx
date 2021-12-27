import React from 'react';
import configureStore from 'redux-mock-store';
import saga from 'redux-saga';
import { mount } from 'enzyme';

import UserEditModal from '../../../components/UserEditModal/UserEditModal';

import { userEditOffAction } from '../../../actions/useredit';

jest.mock('../../../actions/useredit');

jest.mock('antd', () => ({
  ...jest.requireActual('antd'),
  Form: () => <></>,
  Input: () => <></>,
  Button: () => <></>,
  Select: () => <></>,
  DatePicker: () => <></>,
  Upload: () => <></>,
}));

const mockStore = configureStore([saga]);

const auth = {
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
};

describe('component UserEditModal', () => {
  test('UserEditModal to have length 1', () => {
    const store = mockStore({
      auth,
      userEdit: {
        edit: true,
      },
    });
    // store.dispatch = jest.fn();
    const wrapper = mount(<UserEditModal store={store} />);
    expect(wrapper.find('.user-edit')).toHaveLength(1);
  });

  test('UserEditModal to have length 0', () => {
    const store = mockStore({
      auth,
      userEdit: {
        edit: false,
      },
    });
    // store.dispatch = jest.fn();
    const wrapper = mount(<UserEditModal store={store} />);
    expect(wrapper.find('.user-edit')).toHaveLength(0);
  });

  test('UserEditModal click close', () => {
    const store = mockStore({
      auth,
      userEdit: {
        edit: true,
      },
    });
    store.dispatch = jest.fn();
    const wrapper = mount(<UserEditModal store={store} />);
    wrapper.find('.user-edit__fog').simulate('click');
    expect(userEditOffAction).toBeCalled();
  });
});
