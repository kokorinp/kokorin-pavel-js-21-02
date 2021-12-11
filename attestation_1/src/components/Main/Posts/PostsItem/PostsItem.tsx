import React, { ReactElement, SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { postLoadAction } from "../../../../actions/post";
import "./PostsItem.scss";
import UserNameWithHelper from "../../../../wrappers/UserNameWithHelper/UserNameWithHelper";
import { PostActionFunc } from "../../../../types/post/actions";
import { State } from "../../../../types/state";

interface Props {
  darkTheme: boolean;
  UserName: string;
  UserImg: string;
  UserID: string;
  PostDate: string;
  PostImg: string;
  PostText: string;
  PostID: string;
  getPost: PostActionFunc;
}

const PostsItem = ({
  darkTheme,
  UserName,
  UserImg,
  UserID,
  PostDate,
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
      <div className="posts__item__user">
        <div className="posts__item__user__img_wrapper">
          <img
            className="posts__item__user__img"
            src={UserImg}
            alt={UserName}
          />
        </div>
        <div className="posts__item__user__text">
          <div className="posts__item__user__text__name">
            <UserNameWithHelper user_id={UserID} darkTheme={darkTheme}>
              <Link
                className="posts__item__user__text__name__link"
                to={`/user/${UserID}`}
              >
                {UserName}
              </Link>
            </UserNameWithHelper>
          </div>
          <div className="posts__item__user__text__date">{PostDate}</div>
        </div>
      </div>
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

// export default PostsItem;

export default connect(
  (state: State) => ({
    post: state.post,
  }),
  (dispatch: Dispatch) => ({
    getPost: bindActionCreators(postLoadAction, dispatch),
  })
)(PostsItem);
