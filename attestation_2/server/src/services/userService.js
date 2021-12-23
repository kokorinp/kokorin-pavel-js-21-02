const format = require('string-format');
const UserRepository = require('../repositories/userRepository');
const logger = require('../logger/logger');
const { userService: messages } = require('../const/logger');

class UserService {
  // Здесь происходит запросы и обработки данных, валидация запроса и и.д.

  list(req, res) {
    logger.info(format(messages.GET_LIST_PARAMS, JSON.stringify(req.params)));

    if (Number.isNaN(Number(req.params.page)) || Number.isNaN(Number(req.params.limit))) {
      res.status(490).send('Не верные входящие параметры page или limit');
      // после отправки ответа, код продолжает выполнятся... что есть плохо!
    }
    if (req.params.page < 0) {
      res.status(490).send('Не верные входящие параметры. page меньше 0');
    }
    if (req.params.limit < 5 || req.params.limit > 50) {
      res.status(490).send('Не верные входящие параметры. limit может быть в пределах от 5 до 50');
    }

    UserRepository.list(req.params.page, req.params.limit)
      .then((response) => {
        const result = JSON.stringify(response);
        logger.info(format(messages.GET_LIST_SUCCESS, 200, result));
        res.status(200).send(result);
      })
      .catch((error) => {
        logger.error(format(messages.GET_LIST_ERROR, 520, error));
        res.status(520).json(error);
      });
  }

  id(req, res) {
    logger.info(format(messages.USER_ID_PARAMS, JSON.stringify(req.params)));

    UserRepository.id(req.params.id)
      .then((response) => {
        const result = JSON.stringify(response);
        logger.info(format(messages.USER_ID_SUCCESS, 200, result));
        res.status(200).send(result);
      })
      .catch((error) => {
        logger.error(format(messages.USER_ID_ERROR, 520, error));
        res.status(520).json(error);
      });
  }

  post(req, res) {
    logger.info(format(messages.GET_LIST_POST_PARAMS, JSON.stringify(req.params)));

    if (Number.isNaN(Number(req.params.page)) || Number.isNaN(Number(req.params.limit))) {
      res.status(490).send('Не верные входящие параметры page или limit');
      // после отправки ответа, код продолжает выполнятся... что есть плохо!
    }
    if (req.params.page < 0) {
      res.status(490).send('Не верные входящие параметры. page меньше 0');
    }
    if (req.params.limit < 5 || req.params.limit > 50) {
      res.status(490).send('Не верные входящие параметры. limit может быть в пределах от 5 до 50');
    }

    UserRepository.post(req.params.id, req.params.page, req.params.limit)
      .then((response) => {
        const result = JSON.stringify(response);
        logger.info(format(messages.GET_LIST_POST_SUCCESS, 200, result));
        res.status(200).send(result);
      })
      .catch((error) => {
        logger.error(format(messages.GET_LIST_POST_ERROR, 520, error));
        res.status(520).json(error);
      });
  }

  create(req, res) {
    logger.info(format(messages.CREATE_PARAMS, JSON.stringify(req.body)));
    UserRepository.create(req.body)
      .then((response) => {
        const result = JSON.stringify(response);
        logger.info(format(messages.CREATE_SUCCESS, 200, result));
        res.status(200).send(result);
      })
      .catch((error) => {
        logger.error(format(messages.CREATE_ERROR, 520, error));
        res.status(520).json(error);
      });
  }

  edit(req, res) {
    logger.info(format(messages.EDIT_PARAMS, req.params.id, JSON.stringify(req.body)));
    UserRepository.edit(req.params.id, req.body)
      .then((response) => {
        const result = JSON.stringify(response);
        logger.info(format(messages.EDIT_SUCCESS, 200, result));
        res.status(200).send(result);
      })
      .catch((error) => {
        logger.error(format(messages.EDIT_ERROR, 520, error));
        res.status(520).json(error);
      });
  }
}

module.exports = new UserService();
