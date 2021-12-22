const FakeApi = require('../api/fakeApi');
const UserMapper = require('../mappers/userMapper');
const logger = require('../logger/logger');
const format = require('string-format');
const { userRepository: messages } = require('../const/logger');
const { getUsers, getUser } = require('../api/users');

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
}

module.exports = new UserRepository();
