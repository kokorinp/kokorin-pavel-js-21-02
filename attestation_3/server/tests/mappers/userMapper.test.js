const userMapper = require('../../src/mappers/userMapper');

describe('UserMapper', () => {
  test('UserMapper.list', () => {
    const UserList = {
      page: 0,
      limit: 5,
      data: [
        {
          title: 'qwer',
          firstName: 'asdf',
          lastName: 'zxcv',
        },
      ],
    };
    const UserListResult = {
      ...UserList,
      data: [
        {
          title: 'qwer',
          firstName: 'asdf',
          lastName: 'zxcv',
          fullname: 'qwer. asdf zxcv',
        },
      ],
    };
    expect(userMapper.list(UserList)).toEqual(UserListResult);
  });

  test('UserMapper.list test undefined title', () => {
    const UserList = {
      page: 0,
      limit: 5,
      data: [
        {
          firstName: 'asdf',
          lastName: 'zxcv',
        },
      ],
    };
    const UserListResult = {
      ...UserList,
      data: [
        {
          firstName: 'asdf',
          lastName: 'zxcv',
          fullname: 'asdf zxcv',
        },
      ],
    };
    expect(userMapper.list(UserList)).toEqual(UserListResult);
  });

  test('UserMapper.userid', () => {
    const User = {
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
    expect(userMapper.userid(User)).toEqual(UserResult);
  });
});
