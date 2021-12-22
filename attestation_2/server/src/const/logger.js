module.exports = {
  // ----------------USER------------------------------------------------------------------------
  userService: {
    GET_LIST_PARAMS: '[userService.list] params={}',
    GET_LIST_SUCCESS: '[userService.list] status={} result={}',
    GET_LIST_ERROR: '[userService.list] success status={} response={}',

    USER_ID_PARAMS: '[userService.id] id={}',
    USER_ID_SUCCESS: '[userService.id] status={} result={}',
    USER_ID_ERROR: '[userService.id] success status={} response={}',

    // GET_POST_PARAMS_PARAMS: '[userService.getPostList] userid={}, page={}, limit={}',
    // GET_POST_SUCCESS: '[userService.getPostList] success status={} result={}',
    // GET_POST_ERROR: '[userService.getPostList] error status={} response={}',
    //
    // UPDATE_PARAMS: '[userService.update] userid={}, user {}',
    // UPDATE_SUCCESS: '[userService.update] success status={} result={}',
    // UPDATE_ERROR: '[userService.update] error status={} response={}',
  },

  userRepository: {
    LIST_INVOKE: '[userRepository.list] invoke page={}, limit={}',
    LIST_SUCCESS: '[userRepository.list] success page={}, limit={}, response={}',
    LIST_MAPPER_RESULT: '[userRepository.list] mapper result {}',
    LIST_REPLY_ERROR: '[userRepository.list] error replay id_user={}',

    USER_ID_INVOKE: '[userRepository.id] invoke id_user={}',
    USER_ID_SUCCESS: '[userRepository.id] success id_user={}',
    USER_ID_MAPPER_RESULT: '[userRepository.id] mapper result id_user={}',
    USER_ID_REPLY_ERROR: '[userRepository.id] error replay id_user={}',
  },

  // --------POST---------------------------------------------------------------------------------

  postService: {
    GET_LIST_PARAMS: '[postService.list] params={}',
    GET_LIST_SUCCESS: '[postService.list] status={} result={}',
    GET_LIST_ERROR: '[postService.list] success status={} response={}',

    POST_ID_PARAMS: '[postService.id] id={}',
    POST_ID_SUCCESS: '[postService.id] status={} result={}',
    POST_ID_ERROR: '[postService.id] success status={} response={}',
  },

  postRepository: {
    LIST_INVOKE: '[postRepository.list] invoke page={}, limit={}',
    LIST_SUCCESS: '[postRepository.list] success page={}, limit={}, response={}',
    LIST_MAPPER_RESULT: '[postRepository.list] mapper result {}',
    LIST_REPLY_ERROR: '[postRepository.list] error replay id_post={}',

    POST_ID_INVOKE: '[postRepository.id] invoke id_post={}',
    POST_ID_SUCCESS: '[postRepository.id] success id_post={}',
    POST_ID_MAPPER_RESULT: '[postRepository.id] mapper result id_post={}',
    POST_ID_REPLY_ERROR: '[postRepository.id] error replay id_post={}',
  },

  postApi: {
    GET: '[postApi.loadFile] url={}',
    GET_FAIL: '[postApi.loadFile] fail id={}, error={}',
    GET_SUCCESS: '[postApi.loadFile] success id={}, content={}',
  },

  // ----------------------------------------------------------------------------
};
