import React, { ReactElement, useContext } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import "./PostModal.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { State } from "../../types/state";
import { postCloseAction } from "../../actions/post";
import { PostState } from "../../types/post/state";
import UserNameWithHelper from "../../wrappers/UserNameWithHelper/UserNameWithHelper";

interface Props {
  post: PostState;
  closePost: () => void;
}

const PostModal = ({ post, closePost }: Props): ReactElement => {
  // console.log(post);
  const handleClose = () => {
    closePost();
  };
  const themeContext = useContext(ThemeContext);
  return post.isLoading ? (
    <div className={`post ${themeContext.darkTheme ? "post_dark" : ""}`}>
      <div
        className={`post__fog ${
          themeContext.darkTheme ? "post__fog_dark" : ""
        }`}
        onClick={handleClose}
      />
      <div
        className={`post__close ${
          themeContext.darkTheme ? "post__close_dark" : ""
        }`}
      >
        <CloseOutlined onClick={handleClose} />
      </div>
      <div
        className={`post__modal ${
          themeContext.darkTheme ? "post__modal_dark" : ""
        }`}
      >
        <div className="post__modal__header">
          <div className="post__modal__header__user">
            <div className="post__modal__header__user__img_wrapper">
              <img
                src={post.owner?.picture}
                className="post__modal__header__user__img"
                alt={`${post.owner?.title}. ${post.owner?.lastName} ${post.owner?.firstName}`}
              />
            </div>
            <div className="post__modal__header__user__name">
              <UserNameWithHelper
                user_id={post.owner?.id ? post.owner?.id : ""}
                darkTheme={
                  themeContext.darkTheme ? themeContext.darkTheme : false
                }
              >
                <a
                  href={`/user/${post.owner?.id}`}
                  className="post__modal__header__user__name__link"
                >
                  {`${post.owner?.title}. ${post.owner?.lastName} ${post.owner?.firstName}`}
                </a>
              </UserNameWithHelper>
            </div>
          </div>
          <div className="post__modal__header__date">{post.publishDate}</div>
        </div>
        <div className="post__modal__body">
          <div className="post__modal__body__img_wrapper">
            <img
              className="post__modal__body__img"
              src={post.image}
              alt={`${post.owner?.title}. ${post.owner?.lastName} ${post.owner?.firstName}`}
              title={`${post.owner?.title}. ${post.owner?.lastName} ${post.owner?.firstName}`}
            />
          </div>
          <div className="post__modal__body__text">{post.text}</div>
        </div>
        <div className="post__modal__footer">foo</div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default connect(
  (state: State) => ({
    post: state.post,
  }),
  (dispatch: Dispatch) => ({
    closePost: bindActionCreators(postCloseAction, dispatch),
  })
)(PostModal);

// export default PostModal;
