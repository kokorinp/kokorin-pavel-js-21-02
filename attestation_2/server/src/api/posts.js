const constDummyapi = require('../const/dummyapi.io');
const { GetApi } = require('./dummyapi.io');

module.exports = {
  getPosts: (page, limit) => GetApi(constDummyapi.API_POST_URL, {
    [constDummyapi.PAGE_FIELD]: page,
    [constDummyapi.LIMIT_FIELD]: limit || 20,
  }),

  getPost: (id) => GetApi(constDummyapi.API_POST_URL.concat('/').concat(id)),

  getCommentsPost: (id, page, limit) => GetApi(constDummyapi.API_POST_URL.concat('/').concat(id).concat('/').concat(constDummyapi.API_COMMENT_URL), {
    [constDummyapi.PAGE_FIELD]: page,
    [constDummyapi.LIMIT_FIELD]: limit || 20,
  }),
};
