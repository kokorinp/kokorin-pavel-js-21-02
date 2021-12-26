const constDummyapi = require('../const/dummyapi.io');

const fetch = require('node-fetch');

module.exports = {
  GetApi: (path, searchParams) => {
    const url = new URL(path, constDummyapi.API_BASE_URL);
    searchParams &&
      Object.entries(searchParams).forEach((params) => {
        url.searchParams.append(params[0], params[1].toString());
      });
    return fetch(url.toString(), {
      method: constDummyapi.METHOD_GET,
      // headers: new Headers({
      //   [constDummyapi.APP_ID_FIELD]: constDummyapi.APP_TOKEN,
      // }),
      headers: {
        [constDummyapi.APP_ID_FIELD]: constDummyapi.APP_TOKEN,
      },
    }).then((resp) => resp.json());
  },

  PostApi: (path, body) => {
    const url = new URL(path, constDummyapi.API_BASE_URL);
    return fetch(url.toString(), {
      method: constDummyapi.METHOD_POST,
      headers: {
        [constDummyapi.APP_ID_FIELD]: constDummyapi.APP_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  },

  // один в один как post разница в методе
  PutApi: (path, body) => {
    const url = new URL(path, constDummyapi.API_BASE_URL);
    return fetch(url.toString(), {
      method: constDummyapi.METHOD_PUT,
      headers: {
        [constDummyapi.APP_ID_FIELD]: constDummyapi.APP_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  },
};
