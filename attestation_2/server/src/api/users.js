const constDummyapi = require('../const/dummyapi.io');
const { GetApi } = require('./dummyapi.io');

module.exports = {
  getUsers: (page, limit) =>
    GetApi(constDummyapi.API_USER_URL, {
      [constDummyapi.PAGE_FIELD]: page,
      [constDummyapi.LIMIT_FIELD]: limit || 20,
    }),

  getUser: (id) => GetApi(constDummyapi.API_USER_URL.concat('/').concat(id)),
};
