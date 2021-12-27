import { getCommetsByPost } from '../../api/comments';

import { GetApi } from '../../api/localProxyAPI';
import { API_COMMENT_URL, API_POST_URL } from '../../const/api/dummyapi.io';

jest.mock('../../api/localProxyAPI');

describe('getCommetsByPost test', () => {
  test('get', () => {
    const id = 'asdf';
    const page = 5;
    const limit = 20;
    getCommetsByPost(id, page, limit);
    expect(GetApi).toBeCalledWith(API_POST_URL.concat('/').concat(id).concat('/').concat(API_COMMENT_URL), page, limit);
  });

  test('get 0', () => {
    const id = 'asdf';
    getCommetsByPost(id);
    expect(GetApi).toBeCalledWith(API_POST_URL.concat('/').concat(id).concat('/').concat(API_COMMENT_URL), 0, 50);
  });
});
