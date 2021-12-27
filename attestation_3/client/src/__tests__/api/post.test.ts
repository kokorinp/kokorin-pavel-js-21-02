import { GetApi } from '../../api/localProxyAPI';
import { API_POST_URL } from '../../const/api/dummyapi.io';
import { getPost } from '../../api/post';

jest.mock('../../api/localProxyAPI');

describe('getPost test', () => {
  test('get', () => {
    const id = 'asdf';

    getPost(id);
    expect(GetApi).toBeCalledWith(API_POST_URL.concat('/').concat(id));
  });
});
