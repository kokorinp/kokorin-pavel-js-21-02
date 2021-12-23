const format = require('string-format');
const UserMapper = require('../mappers/userMapper');
const logger = require('../logger/logger');
const { userRepository: messages } = require('../const/logger');
const {
  getUsers, getUser, getPostsUser, createUser, editUser,
} = require('../api/users');

class UserRepository {
  list(page, limit) {
    logger.info(format(messages.LIST_INVOKE, page, limit));
    return getUsers(page, limit)
      .then((resp) => {
        logger.info(format(messages.LIST_SUCCESS, page, limit, JSON.stringify(resp)));
        const result = UserMapper.list(resp);
        logger.info(format(messages.LIST_MAPPER_RESULT, JSON.stringify(result)));
        return result;
        // return resp;
      })
      .catch((error) => {
        logger.error(format(messages.LIST_REPLY_ERROR, JSON.stringify(error)));
        return Promise.reject(error);
      });
  }

  id(id) {
    logger.info(format(messages.USER_ID_INVOKE, id));
    return getUser(id)
      .then((resp) => {
        logger.info(format(messages.USER_ID_SUCCESS, id, JSON.stringify(resp)));
        const result = UserMapper.userid(resp);
        logger.info(format(messages.USER_ID_MAPPER_RESULT, JSON.stringify(result)));
        return result;
        // return resp;
      })
      .catch((error) => {
        logger.error(format(messages.USER_ID_REPLY_ERROR, JSON.stringify(error)));
        return Promise.reject(error);
      });
  }

  post(id, page, limit) {
    logger.info(format(messages.LIST_POST_INVOKE, id, page, limit));
    return getPostsUser(id, page, limit)
      .then((resp) => {
        logger.info(format(messages.LIST_POST_SUCCESS, page, limit, JSON.stringify(resp)));
        // const result = UserMapper.list(resp);
        // logger.info(format(messages.LIST_POST_MAPPER_RESULT, JSON.stringify(result)));
        // return result;
        return resp;
      })
      .catch((error) => {
        logger.error(format(messages.LIST_POST_REPLY_ERROR, JSON.stringify(error)));
        return Promise.reject(error);
      });
  }

  create(body) {
    logger.info(format(messages.CREATE_USER_INVOKE, JSON.stringify(body)));
    return createUser(body)
      .then((resp) => {
        logger.info(format(messages.CREATE_USER_SUCCESS, JSON.stringify(resp)));
        const result = UserMapper.userid(resp);
        logger.info(format(messages.CREATE_USER_MAPPER_RESULT, JSON.stringify(result)));
        return result;
      })
      .catch((error) => {
        logger.error(format(messages.CREATE_USER_REPLY_ERROR, JSON.stringify(error)));
        return Promise.reject(error);
      });
  }

  edit(id, body) {
    logger.info(format(messages.EDIT_USER_INVOKE, id, JSON.stringify(body)));
    return editUser(id, body)
      .then((resp) => {
        logger.info(format(messages.EDIT_USER_SUCCESS, JSON.stringify(resp)));
        const result = UserMapper.userid(resp);
        logger.info(format(messages.EDIT_USER_MAPPER_RESULT, JSON.stringify(result)));
        return result;
      })
      .catch((error) => {
        logger.error(format(messages.EDIT_USER_REPLY_ERROR, JSON.stringify(error)));
        return Promise.reject(error);
      });
  }
}
module.exports = new UserRepository();
