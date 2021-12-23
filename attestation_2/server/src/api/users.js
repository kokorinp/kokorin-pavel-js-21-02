const constDummyapi = require('../const/dummyapi.io');
const { GetApi, PostApi, PutApi } = require('./dummyapi.io');
const { API_POST_URL } = require('../const/dummyapi.io');

module.exports = {
  getUsers: (page, limit) => GetApi(constDummyapi.API_USER_URL, {
    [constDummyapi.PAGE_FIELD]: page,
    [constDummyapi.LIMIT_FIELD]: limit || 20,
  }),

  getUser: (id) => GetApi(constDummyapi.API_USER_URL.concat('/').concat(id)),

  getPostsUser: (id, page, limit) => GetApi(constDummyapi.API_USER_URL.concat('/').concat(id).concat('/').concat(API_POST_URL), {
    [constDummyapi.PAGE_FIELD]: page,
    [constDummyapi.LIMIT_FIELD]: limit || 20,
  }),

  createUser: (body) => PostApi(constDummyapi.API_USER_URL.concat('/').concat(constDummyapi.API_REG_URL), body),

  editUser: (id, body) => PutApi(constDummyapi.API_USER_URL.concat('/').concat(id), body),
};
