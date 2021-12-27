const format = require('string-format');
const PostRepository = require('../repositories/postRepository');
const logger = require('../logger/logger');
const { postService: messages } = require('../const/logger');

class postService {
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

    PostRepository.list(req.params.page, req.params.limit)
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
    logger.info(format(messages.POST_ID_PARAMS, JSON.stringify(req.params)));

    PostRepository.id(req.params.id)
      .then((response) => {
        const result = JSON.stringify(response);
        logger.info(format(messages.POST_ID_SUCCESS, 200, result));
        res.status(200).send(result);
      })
      .catch((error) => {
        logger.error(format(messages.POST_ID_ERROR, 520, error));
        res.status(520).json(error);
      });
  }

  comment(req, res) {
    logger.info(format(messages.GET_LIST_COMMENT_PARAMS, JSON.stringify(req.params)));

    if (Number.isNaN(Number(req.params.page)) || Number.isNaN(Number(req.params.limit))) {
      res.status(490).send('Не верные входящие параметры page или limit');
    }
    if (req.params.page < 0) {
      res.status(490).send('Не верные входящие параметры. page меньше 0');
    }
    if (req.params.limit < 5 || req.params.limit > 50) {
      res.status(490).send('Не верные входящие параметры. limit может быть в пределах от 5 до 50');
    }

    PostRepository.comment(req.params.id, req.params.page, req.params.limit)
      .then((response) => {
        const result = JSON.stringify(response);
        logger.info(format(messages.GET_LIST_COMMENT_SUCCESS, 200, result));
        res.status(200).send(result);
      })
      .catch((error) => {
        logger.error(format(messages.GET_LIST_COMMENT_ERROR, 520, error));
        res.status(520).json(error);
      });
  }
}

module.exports = new postService();
