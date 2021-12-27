import { GetApi } from '../../api/localProxyAPI';
import { API_USER_URL } from '../../const/api/dummyapi.io';

import { getUser } from '../../api/user';

jest.mock('../../api/localProxyAPI');

describe('getUser test', () => {
  test('getUser', () => {
    const id = 'asdf';
    getUser(id);
    expect(GetApi).toBeCalledWith(API_USER_URL.concat('/').concat(id));
  });
});
