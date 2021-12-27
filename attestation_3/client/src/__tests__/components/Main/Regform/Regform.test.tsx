import React from 'react';
import configureStore from 'redux-mock-store';
import saga from 'redux-saga';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

// import { postCloseAction } from '../../../actions/post';
import Regform from '../../../../components/Main/Regform/Regform';

// jest.mock('antd');

jest.mock('antd', () => ({
  ...jest.requireActual('antd'),
  Form: () => <></>,
  Input: () => <></>,
  Button: () => <></>,
  Select: () => <></>,
  DatePicker: () => <></>,
  Upload: () => <></>,
}));

// jest.mock('../../../actions/post');

const mockStore = configureStore([saga]);

describe('component Regform', () => {
  test('Regform to have length 1', () => {
    const store = mockStore({
      auth: {
        id: 'qwer',
      },
    });

    // store.dispatch = jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <Regform store={store} />
      </MemoryRouter>,
    );
    expect(wrapper.find('.regform')).toHaveLength(1);
  });
});
