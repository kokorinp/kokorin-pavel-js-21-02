import { PostApi } from '../../api/localProxyAPI';
import { API_REG_URL, API_USER_URL } from '../../const/api/dummyapi.io';
import { regUser } from '../../api/reg';

jest.mock('../../api/localProxyAPI');

describe('regUser test', () => {
  test('regUser', () => {
    const user = {};
    regUser(user);
    expect(PostApi).toBeCalledWith(API_USER_URL.concat('/').concat(API_REG_URL), user);
  });
});
