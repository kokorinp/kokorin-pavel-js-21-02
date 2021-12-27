import React from 'react';
import configureStore from 'redux-mock-store';
import saga from 'redux-saga';
import { mount } from 'enzyme';

import Errormsg from '../../../components/Errormsg/Errormsg';

const mockStore = configureStore([saga]);

describe('component Errormsg', () => {
  test('Errormsg on', () => {
    const textError = 'asdfasdfasdf';
    const store = mockStore({
      isError: {
        isError: true,
        textError,
      },
    });
    store.dispatch = jest.fn();
    const wrapper = mount(<Errormsg store={store} />);

    expect(wrapper.find('.error_msg__modal__body__text').text()).toBe(textError);
  });

  test('Errormsg off', () => {
    const store = mockStore({
      isError: {
        isError: false,
      },
    });
    // store.dispatch = jest.fn();
    const wrapper = mount(<Errormsg store={store} />);

    expect(wrapper.isEmptyRender()).toBeTruthy();
  });
});
