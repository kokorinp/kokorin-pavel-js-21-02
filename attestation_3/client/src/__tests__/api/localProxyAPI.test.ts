import { GetApi, PutApi, PostApi } from '../../api/localProxyAPI';
import {
  API_BASE_URL,
  API_REG_URL,
  API_USER_URL,
  METHOD_GET,
  METHOD_POST,
  METHOD_PUT,
} from '../../const/api/dummyapi.io';

describe('localProxyAPI', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('GetApi should to BeCalledWith params', () => {
    const fetchResponse = {
      data: 'any data',
    };
    fetch.mockResponse(JSON.stringify(fetchResponse));
    const page = 2;
    const limit = 6;

    GetApi(API_USER_URL, page, limit);
    expect(fetch).toBeCalledWith(API_BASE_URL.concat(API_USER_URL).concat(`/${page}/${limit}`), { method: METHOD_GET });
  });

  test('PostApi should to BeCalledWith params', () => {
    const fetchResponse = {
      data: 'any data',
    };
    fetch.mockResponse(JSON.stringify(fetchResponse));
    const body = {
      data: 'any daggta',
    };
    PostApi(API_REG_URL, body);

    expect(fetch).toBeCalledWith(API_BASE_URL.concat(API_REG_URL), {
      headers: new Headers({ 'Content-Type': 'application/json' }),
      method: METHOD_POST,
      body: JSON.stringify(body),
    });
  });

  test('PutApi should to BeCalledWith params', () => {
    const fetchResponse = {
      data: 'any data',
    };
    fetch.mockResponse(JSON.stringify(fetchResponse));
    const body = {
      data: 'any dasdasdaggta',
    };
    PutApi(API_USER_URL, body);

    expect(fetch).toBeCalledWith(API_BASE_URL.concat(API_USER_URL), {
      headers: new Headers({ 'Content-Type': 'application/json' }),
      method: METHOD_PUT,
      body: JSON.stringify(body),
    });
  });
});
