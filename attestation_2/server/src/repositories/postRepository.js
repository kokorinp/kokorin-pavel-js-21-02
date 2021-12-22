// const UserMapper = require('../mappers/userMapper');
const logger = require('../logger/logger');
const format = require('string-format');
const { postRepository: messages } = require('../const/logger');
const { getPosts, getPost } = require('../api/posts');

class PostRepository {
  list(page, limit) {
    logger.info(format(messages.LIST_INVOKE, page, limit));
    return getPosts(page, limit)
      .then((resp) => {
        logger.info(format(messages.LIST_SUCCESS, page, limit, JSON.stringify(resp)));
        // const result = UserMapper.list(resp);
        // logger.info(format(messages.LIST_MAPPER_RESULT, JSON.stringify(result)));
        // return result;
        return resp;
      })
      .catch((error) => {
        logger.error(format(messages.LIST_REPLY_ERROR, JSON.stringify(error)));
        return Promise.reject(error);
      });
  }

  id(id) {
    logger.info(format(messages.POST_ID_INVOKE, id));
    return getPost(id)
      .then((resp) => {
        logger.info(format(messages.POST_ID_SUCCESS, id, JSON.stringify(resp)));
        // const result = UserMapper.userid(resp);
        // logger.info(format(messages.USER_ID_MAPPER_RESULT, JSON.stringify(result)));
        // return result;
        return resp;
      })
      .catch((error) => {
        logger.error(format(messages.POST_ID_REPLY_ERROR, JSON.stringify(error)));
        return Promise.reject(error);
      });
  }
}

module.exports = new PostRepository();
