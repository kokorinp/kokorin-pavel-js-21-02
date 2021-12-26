const request = require('supertest');
const app = require('../../src/app');
const { getUser } = require('../../src/api/users');

jest.mock('../../src/api/users');

describe('userRouter', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('get User by ID', async () => {
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
});
