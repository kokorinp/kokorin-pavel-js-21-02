const router = require('express').Router();
const PostService = require('../services/postService');

router.get('/list/:page/:limit', PostService.list);
router.get('/:id', PostService.id);
router.get('/:id/comment/:page/:limit', PostService.comment);
module.exports = router;
