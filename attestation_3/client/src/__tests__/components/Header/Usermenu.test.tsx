import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import saga from 'redux-saga';

import { render } from 'enzyme';

import Usermenu from '../../../components/Header/Usermenu/Usermenu';

// jest.mock('../../../actions/auth');

const mockStore = configureStore([saga]);

describe('component Usermenu', () => {
  test('Usermenu render', () => {
    const firstName = 'Гена';
    const store = mockStore({
      auth: {
        id: 'as22df',
        title: 'mr',
        firstName,
        lastName: 'b',
        gender: 'male',
        email: 'rara@rara.com',
        dateOfBirth: '23 Февраля 2021',
        registerDate: '8 Марта 2021',
        dateOfBirthRaw: '2021-02-23',
        registerDateRaw: '2021-03-08',
        phone: '654654654',
        picture: 'zxcv',
        fullname: 'mr. a b',
      },
    });

    const wrapper = render(
      <MemoryRouter>
        <Usermenu store={store} />
      </MemoryRouter>,
    );
    expect(wrapper.find('.user_menu__auth__name').text()).toBe(firstName);
  });

  test('Usermenu not render', () => {
    const id = '';
    const store = mockStore({
      auth: {
        id,
      },
    });

    const wrapper = render(
      <MemoryRouter>
        <Usermenu store={store} />
      </MemoryRouter>,
    );
    expect(wrapper.find('#signin').first().text()).toBe('Вход');
  });
});
