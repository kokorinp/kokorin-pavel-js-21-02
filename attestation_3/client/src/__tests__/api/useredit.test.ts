import { PutApi } from '../../api/localProxyAPI';
import { API_USER_URL } from '../../const/api/dummyapi.io';

import { putUserEdit } from '../../api/useredit';

jest.mock('../../api/localProxyAPI');

describe('putUserEdit test', () => {
  test('putUserEdit', () => {
    const user = { id: 'asdf' };
    putUserEdit(user);
    expect(PutApi).toBeCalledWith(API_USER_URL.concat('/').concat(user.id), user);
  });

  test('putUserEdit 0', () => {
    const user = {};
    putUserEdit(user);
    expect(PutApi).toBeCalledWith(API_USER_URL.concat('/'), user);
  });
});
