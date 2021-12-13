import React, { ReactElement } from "react";

import "./Comment.scss";
import UserNameWithHelper from "../../../wrappers/UserNameWithHelper/UserNameWithHelper";

interface Props {
  darkTheme: boolean;
  message: string;
  publishDate: string;
  owner_id: string;
  owner_name: string;
  owner_img: string;
}

const Comment = ({
  darkTheme,
  message,
  publishDate,
  owner_id,
  owner_img,
  owner_name,
}: Props): ReactElement => {
  console.log("Comment");

  return (
    <div className={`comment ${darkTheme ? "comment_dark" : ""}`}>
      <div className="comment__img_wrapper">
        <img src={owner_img} className="comment__img" alt={owner_name} />
      </div>
      <div className="comment__text">
        <div className="comment__text__user">
          <div className="comment__text__user__name">
            <UserNameWithHelper user_id={owner_id} darkTheme={darkTheme}>
              <a
                href={`/user/${owner_id}`}
                className="post__modal__header__user__name__link"
              >
                {owner_name}
              </a>
            </UserNameWithHelper>
          </div>
          <div className="comment__text__user__date">{publishDate}</div>
        </div>
        <div className="comment__text__text">{message}</div>
      </div>
    </div>
  );
};

export default Comment;
