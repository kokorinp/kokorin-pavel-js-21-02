import { GetApi } from '../../api/localProxyAPI';
import { API_LIST_URL, API_USER_URL } from '../../const/api/dummyapi.io';

import { getUsers } from '../../api/users';

jest.mock('../../api/localProxyAPI');

describe('getUsers test', () => {
  test('getUsers', () => {
    const page = 5;
    const limit = 30;
    getUsers(page, limit);
    expect(GetApi).toBeCalledWith(API_USER_URL.concat('/').concat(API_LIST_URL), page, limit);
  });

  test('getUsers 0', () => {
    const page = 5;
    getUsers(page);
    expect(GetApi).toBeCalledWith(API_USER_URL.concat('/').concat(API_LIST_URL), page, 20);
  });
});
