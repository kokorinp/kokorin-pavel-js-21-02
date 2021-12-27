const request = require('supertest');
const app = require('../../src/app');
const { getUser, getUsers, getPostsUser, createUser, editUser } = require('../../src/api/users');

jest.mock('../../src/api/users');

describe('userRouter', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('getUsers', async () => {
    const page = 3;
    const limit = 7;
    const UserList = { page, limit, data: [{ title: 'qwer', firstName: 'asdf', lastName: 'zxcv' }] };
    const UserListResult = {
      ...UserList,
      data: [{ title: 'qwer', firstName: 'asdf', lastName: 'zxcv', fullname: 'qwer. asdf zxcv' }],
    };

    getUsers.mockResolvedValue(UserList);

    const result = await request(app).get('/api/user/list/'.concat(page).concat('/').concat(limit)).send();
    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual(UserListResult);
  });

  test('getUser', async () => {
    const id = 'poiu1234';
    const User = {
      id,
      title: 'qwer',
      firstName: 'asdf',
      lastName: 'zxcv',
      dateOfBirth: '2021-03-08',
      registerDate: '2021-02-23',
    };

    const UserResult = {
      ...User,
      fullname: 'qwer. asdf zxcv',
      dateOfBirth: '8 марта 2021 г.',
      registerDate: '23 февраля 2021 г.',
      dateOfBirthRaw: '2021-03-08',
      registerDateRaw: '2021-02-23',
    };

    getUser.mockResolvedValue(User);

    const result = await request(app).get('/api/user/'.concat(id)).send();
    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual(UserResult);
  });

  test('getPostsUser', async () => {
    const id = 'podwiu1234';
    const page = 3;
    const limit = 7;
    const Post = { id, page, limit, anykey: 'any data' };

    getPostsUser.mockResolvedValue(Post);

    const result = await request(app)
      .get('/api/user/'.concat(id).concat('/post/').concat(page).concat('/').concat(limit))
      .send();
    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual(Post);
  });

  test('createUser', async () => {
    const id = 'poiuas1234';
    const User = {
      id,
      title: 'qwer',
      firstName: 'asdf',
      lastName: 'zxcv',
      dateOfBirth: '2021-03-08',
      registerDate: '2021-02-23',
    };
    const UserResult = {
      ...User,
      fullname: 'qwer. asdf zxcv',
      dateOfBirth: '8 марта 2021 г.',
      registerDate: '23 февраля 2021 г.',
      dateOfBirthRaw: '2021-03-08',
      registerDateRaw: '2021-02-23',
    };

    createUser.mockResolvedValue(User);

    const result = await request(app).post('/api/user/create').send();
    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual(UserResult);
  });

  test('editUser', async () => {
    const id = 'poiuas1234';
    const User = {
      id,
      title: 'qwer',
      firstName: 'asdf',
      lastName: 'zxcv',
      dateOfBirth: '2021-03-08',
      registerDate: '2021-02-23',
    };
    const UserResult = {
      ...User,
      fullname: 'qwer. asdf zxcv',
      dateOfBirth: '8 марта 2021 г.',
      registerDate: '23 февраля 2021 г.',
      dateOfBirthRaw: '2021-03-08',
      registerDateRaw: '2021-02-23',
    };

    editUser.mockResolvedValue(User);

    const result = await request(app).put('/api/user/'.concat(id)).send();
    expect(result.statusCode).toBe(200);
    expect(result.body).toEqual(UserResult);
  });
});
