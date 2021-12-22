const router = require('express').Router();
const PostService = require('../services/postService');

router.get('/list/:page/:limit', PostService.list);
router.get('/id/:id', PostService.id);

module.exports = router;
