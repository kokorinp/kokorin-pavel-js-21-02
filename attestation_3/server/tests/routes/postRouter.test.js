const request = require('supertest');
const app = require('../../src/app');
const { getPosts, getPost, getCommentsPost } = require('../../src/api/posts');

jest.mock('../../src/api/posts');

describe('postRouter', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('getPosts', async () => {
    const page = 3;
    const limit = 7;
    const Posts = { page, limit, anyKey: 'any value' };

    getPosts.mockResolvedValue(Posts);

    const result = await request(app).get('/api/post/list/'.concat(page).concat('/').concat(limit)).send();
    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual(Posts);
  });

  test('getPost', async () => {
    const id = 'asdasd55asd5';
    const Post = { id, anyKey: 'any value' };

    getPost.mockResolvedValue(Post);

    const result = await request(app).get('/api/post/'.concat(id)).send();
    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual(Post);
  });

  test('getCommentsPost', async () => {
    const id = 'asdasd55asd5';
    const page = 3;
    const limit = 7;
    const PostComm = { id, page, limit, anyKey: 'any value', comments: [{ key: 'vv' }, { key: 'dd' }] };

    getCommentsPost.mockResolvedValue(PostComm);

    const result = await request(app)
      .get('/api/post/'.concat(id).concat('/').concat('comment').concat('/').concat(page).concat('/').concat(limit))
      .send();
    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual(PostComm);
  });
});
