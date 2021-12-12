import React, { ReactElement, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { postLoadAction } from "../../../../../actions/post";
import "./PostsByUserItem.scss";

import { PostActionFunc } from "../../../../../types/post/actions";
import { State } from "../../../../../types/state";

interface Props {
  darkTheme: boolean;

  PostImg: string;
  PostText: string;
  PostID: string;
  getPost: PostActionFunc;
}

const PostsByUserItem = ({
  darkTheme,

  PostImg,
  PostText,
  PostID,
  getPost,
}: Props): ReactElement => {
  const handleGetPost = (e: SyntheticEvent): void => {
    getPost(e.currentTarget.getAttribute("data-post") as string);
    // console.log(e.currentTarget.getAttribute("data-post"));
  };
  return (
    <div className={`posts__item ${darkTheme ? "posts__item_dark" : ""}`}>
      <div className="posts__item__post" title={PostText}>
        <div
          className="posts__item__post__img_wrapper"
          onClick={handleGetPost}
          data-post={PostID}
        >
          <img
            className="posts__item__post__img"
            src={PostImg}
            alt={PostText}
          />
        </div>
        <div className="posts__item__post__text">{PostText}</div>
      </div>
    </div>
  );
};

// export default PostsByUserItem;

export default connect(
  (state: State) => ({
    post: state.post,
  }),
  (dispatch: Dispatch) => ({
    getPost: bindActionCreators(postLoadAction, dispatch),
  })
)(PostsByUserItem);
