const router = require('express').Router();
const UserService = require('../services/userService');

router.get('/list/:page/:limit', UserService.list);
router.get('/id/:id', UserService.id);

// router.post('/createUser', UserService.createUser);

module.exports = router;
