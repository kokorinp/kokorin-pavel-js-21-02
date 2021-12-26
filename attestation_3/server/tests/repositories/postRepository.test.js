const { getPosts, getPost, getCommentsPost } = require('../../src/api/posts');
const postRepository = require('../../src/repositories/postRepository');

jest.mock('../../src/api/posts');

describe('postRepository.list', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getPosts should return resolved', (done) => {
    const page = 2;
    const limit = 5;
    const PostsList = { page, limit, data: [{ title: 'что угодно', firstName: 'маппера нет', lastName: 'zxcv' }] };

    getPosts.mockResolvedValue(PostsList);
    postRepository.list(page, limit).then((result) => {
      expect(result).toEqual(PostsList);
      done();
    });
  });

  test('getPosts should return rejected', (done) => {
    const page = 2;
    const limit = 5;
    const TextError = { error: 'text error' };

    getPosts.mockRejectedValue(TextError);
    postRepository.list(page, limit).catch((result) => {
      expect(result).toEqual(TextError);
      done();
    });
  });
});

describe('postRepository.id', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('getPost should return resolved', (done) => {
    const id = 'asdfzxcvawsdf';
    const PostsList = { id, title: 'что угодно', firstName: 'маппера нет', lastName: 'zxcv' };
    getPost.mockResolvedValue(PostsList);
    postRepository.id(id).then((result) => {
      expect(result).toEqual(PostsList);
      done();
    });
  });

  test('getPost should return rejected', (done) => {
    const id = 'asdfzxcvawsdf';
    const TextError = { error: 'text error' };
    getPost.mockRejectedValue(TextError);
    postRepository.id(id).catch((result) => {
      expect(result).toEqual(TextError);
      done();
    });
  });
});

describe('postRepository.comment', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('getPost should return resolved', (done) => {
    const id = 'asdfzxcvawsdf';
    const page = 2;
    const limit = 5;
    const PostsList = { id, page, limit, title: 'что угодно', firstName: 'маппера нет', lastName: 'zxcv' };
    getCommentsPost.mockResolvedValue(PostsList);
    postRepository.comment(id, page, limit).then((result) => {
      expect(result).toEqual(PostsList);
      done();
    });
  });

  test('getPost should return rejected', (done) => {
    const id = 'asdfzxcvawsdf';
    const page = 2;
    const limit = 5;
    const TextError = { error: 'text error' };
    getCommentsPost.mockRejectedValue(TextError);
    postRepository.comment(id, page, limit).catch((result) => {
      expect(result).toEqual(TextError);
      done();
    });
  });
});
