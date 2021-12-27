const constDummyapi = require('../../src/const/dummyapi.io');
const { GetApi, PostApi, PutApi } = require('../../src/api/dummyapi.io');

const fetch = require('node-fetch');
const data = {
  data: 'api response',
};
jest.mock('node-fetch', () =>
  jest.fn(() =>
    Promise.resolve({
      json: () => data,
    }),
  ),
);

describe('dummyapi.io GetApi', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('GetApi should to BeCalledWith params', () => {
    const page = 2;
    const limit = 6;
    const params = {
      [constDummyapi.PAGE_FIELD]: page,
      [constDummyapi.LIMIT_FIELD]: limit,
    };

    GetApi(constDummyapi.API_USER_URL, params);

    expect(fetch).toBeCalledWith(
      constDummyapi.API_BASE_URL.concat(constDummyapi.API_USER_URL).concat(
        `?${constDummyapi.PAGE_FIELD}=${page}&${constDummyapi.LIMIT_FIELD}=${limit}`,
      ),
      { headers: { [constDummyapi.APP_ID_FIELD]: constDummyapi.APP_TOKEN }, method: constDummyapi.METHOD_GET },
    );
  });

  test('GetApi should return promise', () => {
    const page = 2;
    const limit = 6;
    const params = {
      [constDummyapi.PAGE_FIELD]: page,
      [constDummyapi.LIMIT_FIELD]: limit,
    };
    const res = GetApi(constDummyapi.API_USER_URL, params);

    expect(res).toEqual(expect.any(Promise));
    expect(res).resolves.toEqual(data);
  });
});

describe('dummyapi.io PostApi', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('PostApi should to BeCalledWith params', () => {
    const body = {
      data: 'any daggta',
    };
    PostApi(constDummyapi.API_REG_URL, body);

    expect(fetch).toBeCalledWith(constDummyapi.API_BASE_URL.concat(constDummyapi.API_REG_URL), {
      headers: { [constDummyapi.APP_ID_FIELD]: constDummyapi.APP_TOKEN, 'Content-Type': 'application/json' },
      method: constDummyapi.METHOD_POST,
      body: JSON.stringify(body),
    });
  });

  test('PostApi should return promise', () => {
    const body = {
      data: 'any daggta',
    };
    const res = PostApi(constDummyapi.API_REG_URL, body);

    expect(res).toEqual(expect.any(Promise));
    expect(res).resolves.toEqual(data);
  });
});

describe('dummyapi.io PutApi', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('PutApi should to BeCalledWith params', () => {
    const body = {
      data: 'any dagasasasasgta',
    };
    PutApi(constDummyapi.API_REG_URL, body);

    expect(fetch).toBeCalledWith(constDummyapi.API_BASE_URL.concat(constDummyapi.API_REG_URL), {
      headers: { [constDummyapi.APP_ID_FIELD]: constDummyapi.APP_TOKEN, 'Content-Type': 'application/json' },
      method: constDummyapi.METHOD_PUT,
      body: JSON.stringify(body),
    });
  });

  test('PutApi should return promise', () => {
    const body = {
      data: 'any daggta',
    };
    const res = PutApi(constDummyapi.API_REG_URL, body);

    expect(res).toEqual(expect.any(Promise));
    expect(res).resolves.toEqual(data);
  });
});
