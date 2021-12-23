module.exports = {
  // ----------------USER------------------------------------------------------------------------
  userService: {
    GET_LIST_PARAMS: '[userService.list] params={}',
    GET_LIST_SUCCESS: '[userService.list] status={} result={}',
    GET_LIST_ERROR: '[userService.list] success status={} response={}',

    USER_ID_PARAMS: '[userService.id] id_user={}',
    USER_ID_SUCCESS: '[userService.id] status={} result={}',
    USER_ID_ERROR: '[userService.id] success status={} response={}',

    GET_LIST_POST_PARAMS: '[userService.post] params={}',
    GET_LIST_POST_SUCCESS: '[userService.post] status={} result={}',
    GET_LIST_POST_ERROR: '[userService.post] success status={} response={}',

    CREATE_PARAMS: '[userService.create] body {}',
    CREATE_SUCCESS: '[userService.create] success status={} result={}',
    CREATE_ERROR: '[userService.create] error status={} response={}',

    EDIT_PARAMS: '[userService.edit] id_user={} body {}',
    EDIT_SUCCESS: '[userService.edit] success status={} result={}',
    EDIT_ERROR: '[userService.edit] error status={} response={}',
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

    LIST_POST_INVOKE: '[userRepository.post] invoke id_user={} page={}, limit={}',
    LIST_POST_SUCCESS: '[userRepository.post] success page={}, limit={}, response={}',
    LIST_POST_MAPPER_RESULT: '[userRepository.post] mapper result {}',
    LIST_POST_REPLY_ERROR: '[userRepository.post] error replay id_user={}',

    CREATE_USER_INVOKE: '[userRepository.create] invoke body={}',
    CREATE_USER_SUCCESS: '[userRepository.create] success response={}',
    CREATE_USER_MAPPER_RESULT: '[userRepository.create] mapper result={}',
    CREATE_USER_REPLY_ERROR: '[userRepository.create] error replay {}',

    EDIT_USER_INVOKE: '[userRepository.edit] invoke id_user={} body={}',
    EDIT_USER_SUCCESS: '[userRepository.edit] success response={}',
    EDIT_USER_MAPPER_RESULT: '[userRepository.edit] mapper result={}',
    EDIT_USER_REPLY_ERROR: '[userRepository.edit] error replay {}',
  },

  // --------POST---------------------------------------------------------------------------------

  postService: {
    GET_LIST_PARAMS: '[postService.list] params={}',
    GET_LIST_SUCCESS: '[postService.list] status={} result={}',
    GET_LIST_ERROR: '[postService.list] success status={} response={}',

    POST_ID_PARAMS: '[postService.id] id={}',
    POST_ID_SUCCESS: '[postService.id] status={} result={}',
    POST_ID_ERROR: '[postService.id] success status={} response={}',

    GET_LIST_COMMENT_PARAMS: '[postService.comment] params={}',
    GET_LIST_COMMENT_SUCCESS: '[postService.comment] status={} result={}',
    GET_LIST_COMMENT_ERROR: '[postService.comment] success status={} response={}',
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

    LIST_COMMENTS_INVOKE: '[postRepository.comment] invoke id_post={} page={}, limit={}',
    LIST_COMMENTS_SUCCESS: '[postRepository.comment] success id_post={} page={}, limit={}, response={}',
    LIST_COMMENTS_MAPPER_RESULT: '[postRepository.comment] mapper result {}',
    LIST_COMMENTS_REPLY_ERROR: '[postRepository.comment] error replay id_post={}',
  },

  postApi: {
    GET: '[postApi.loadFile] url={}',
    GET_FAIL: '[postApi.loadFile] fail id={}, error={}',
    GET_SUCCESS: '[postApi.loadFile] success id={}, content={}',
  },

  // ----------------------------------------------------------------------------
};
