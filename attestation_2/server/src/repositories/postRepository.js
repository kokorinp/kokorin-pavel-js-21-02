// const UserMapper = require('../mappers/userMapper');
const format = require('string-format');
const logger = require('../logger/logger');
const { postRepository: messages } = require('../const/logger');
const { getPosts, getPost, getCommentsPost } = require('../api/posts');

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

  comment(id, page, limit) {
    logger.info(format(messages.LIST_COMMENTS_INVOKE, id, page, limit));
    return getCommentsPost(id, page, limit)
      .then((resp) => {
        logger.info(format(messages.LIST_COMMENTS_SUCCESS, id, page, limit, JSON.stringify(resp)));
        // const result = UserMapper.list(resp);
        // logger.info(format(messages.LIST_COMMENTS_MAPPER_RESULT, JSON.stringify(result)));
        // return result;
        return resp;
      })
      .catch((error) => {
        logger.error(format(messages.LIST_COMMENTS_REPLY_ERROR, JSON.stringify(error)));
        return Promise.reject(error);
      });
  }
}

module.exports = new PostRepository();
