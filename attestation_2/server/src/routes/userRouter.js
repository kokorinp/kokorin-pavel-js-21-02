const router = require('express').Router();
const UserService = require('../services/userService');

router.get('/list/:page/:limit', UserService.list);
router.get('/:id', UserService.id);
router.get('/:id/post/:page/:limit', UserService.post);

router.post('/create', UserService.create);

router.put('/:id', UserService.edit);

module.exports = router;
