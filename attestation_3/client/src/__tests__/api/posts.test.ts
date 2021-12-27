import { GetApi } from '../../api/localProxyAPI';
import { API_LIST_URL, API_POST_URL, API_USER_URL } from '../../const/api/dummyapi.io';
import { getPosts, getPostsByUser } from '../../api/posts';

jest.mock('../../api/localProxyAPI');

describe('getPosts test', () => {
  test('getPosts', () => {
    const page = 5;
    const limit = 20;
    getPosts(page, limit);
    expect(GetApi).toBeCalledWith(API_POST_URL.concat('/').concat(API_LIST_URL), page, limit);
  });

  test('getPosts 0', () => {
    const page = 5;
    getPosts(page);
    expect(GetApi).toBeCalledWith(API_POST_URL.concat('/').concat(API_LIST_URL), page, 20);
  });

  test('getPostsByUser', () => {
    const id = 'asdf';
    const page = 5;
    const limit = 20;
    getPostsByUser(id, page, limit);
    expect(GetApi).toBeCalledWith(API_USER_URL.concat('/').concat(id).concat('/').concat(API_POST_URL), page, limit);
  });

  test('getPostsByUser 0', () => {
    const id = 'asdf';
    getPostsByUser(id);
    expect(GetApi).toBeCalledWith(API_USER_URL.concat('/').concat(id).concat('/').concat(API_POST_URL), 0, 6);
  });
});
