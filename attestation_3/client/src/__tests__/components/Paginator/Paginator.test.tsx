import { mount } from 'enzyme';

import React from 'react';
import Paginator from '../../../components/Paginator/Paginator';

describe('component Paginator', () => {
  test('Paginator on', () => {
    const page = 0;
    const limit = 10;
    const total = 99;
    const arroptions = [5, 6, 9, 10];
    const setNewPage = jest.fn();
    const setNewLimit = jest.fn();
    const KeyPrefix = 'aaa';

    const wrapper = mount(
      <Paginator
        page={page}
        limit={limit}
        total={total}
        arroptions={arroptions}
        setNewLimit={setNewLimit}
        setNewPage={setNewPage}
        KeyPrefix={KeyPrefix}
      />,
    );

    expect(wrapper.find('.paginator')).toHaveLength(1);
  });
});
