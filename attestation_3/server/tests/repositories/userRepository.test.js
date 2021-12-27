const userRepository = require('../../src/repositories/userRepository');
const { getUser, getUsers, getPostsUser, createUser, editUser } = require('../../src/api/users');

jest.mock('../../src/api/users');

describe('userRepository.list', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getUsers should return resolved', (done) => {
    const page = 2;
    const limit = 5;
    const UserList = { page, limit, data: [{ title: 'qwer', firstName: 'asdf', lastName: 'zxcv' }] };
    const UserListResult = {
      ...UserList,
      data: [{ title: 'qwer', firstName: 'asdf', lastName: 'zxcv', fullname: 'qwer. asdf zxcv' }],
    };
    getUsers.mockResolvedValue(UserList);
    userRepository.list(page, limit).then((result) => {
      expect(result).toEqual(UserListResult);
      done();
    });
  });

  test('getUsers should return rejected', (done) => {
    const page = 2;
    const limit = 5;
    const TextError = { error: 'text error' };

    getUsers.mockRejectedValue(TextError);
    userRepository.list(page, limit).catch((result) => {
      expect(result).toEqual(TextError);
      done();
    });
  });
});

describe('userRepository.id', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getUser should return resolved', (done) => {
    const id = 'asdfasdf654654';
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
    userRepository.id(id).then((result) => {
      expect(result).toEqual(UserResult);
      done();
    });
  });

  test('getUser should return rejected', (done) => {
    const id = 'asdfasdf654654';
    const TextError = { error: 'text error' };

    getUser.mockRejectedValue(TextError);
    userRepository.id(id).catch((result) => {
      expect(result).toEqual(TextError);
      done();
    });
  });
});

describe('userRepository.post', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getPostsUser should return resolved', (done) => {
    const id = 'asdfasdf654654';
    const page = 2;
    const limit = 5;
    const Post = { id, page, limit, ololoevololosh: 'Всё что угодно! Ибо тут ничего не делается с данными! :(' };
    getPostsUser.mockResolvedValue(Post);
    userRepository.post(id, page, limit).then((result) => {
      expect(result).toEqual(Post);
      done();
    });
  });

  test('getPostsUser should return rejected', (done) => {
    const id = 'asdfasdf654654';
    const page = 2;
    const limit = 5;
    const TextError = { error: 'text error' };
    getPostsUser.mockRejectedValue(TextError);
    userRepository.post(id, page, limit).catch((result) => {
      expect(result).toEqual(TextError);
      done();
    });
  });
});

describe('userRepository.create', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('createUser should return resolved', (done) => {
    const id = 'asdfasdf654654';
    const body = JSON.stringify({ id, aasdf: 'не имеет значения что, это не попадёт никуда' });
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
    userRepository.create(body).then((result) => {
      expect(result).toEqual(UserResult);
      done();
    });
  });

  test('createUser should return rejected', (done) => {
    const id = 'asdfasdf654654';
    const body = JSON.stringify({ id, aasdf: 'не имеет значения что, это не попадёт никуда' });
    const TextError = { error: 'text error' };
    createUser.mockRejectedValue(TextError);
    userRepository.create(body).catch((result) => {
      expect(result).toEqual(TextError);
      done();
    });
  });
});

describe('userRepository.edit', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('editUser should return resolved', (done) => {
    const id = 'asdfasdf654654';
    const body = JSON.stringify({ id, aasdf: 'не имеет значения что, это не попадёт никуда' });
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
    userRepository.edit(id, body).then((result) => {
      expect(result).toEqual(UserResult);
      done();
    });
  });

  test('editUser should return rejected', (done) => {
    const id = 'asdfasdf654654';
    const body = JSON.stringify({ id, aasdf: 'не имеет значения что, это не попадёт никуда' });
    const TextError = { error: 'text error' };
    editUser.mockRejectedValue(TextError);
    userRepository.edit(id, body).catch((result) => {
      expect(result).toEqual(TextError);
      done();
    });
  });
});
