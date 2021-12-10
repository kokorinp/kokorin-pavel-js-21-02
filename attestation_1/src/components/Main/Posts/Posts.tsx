import React, { ReactElement, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { State } from "../../../types/state";
import { UsersState } from "../../../types/users/state";
import { usersLoadAction } from "../../../actions/users";
import Paginator from "../../Paginator/Paginator";

import "./Posts.scss";
import PostsItem from "./PostsItem/PostsItem";
import { ThemeContext } from "../../../contexts/ThemeContext";

interface Props {
  users: UsersState;
  getUsers: (page: number, limit: number) => void;
}

// const Posts = ({ users, getUsers }: Props): ReactElement => {
const Posts = (): ReactElement => {
  // console.log(users);
  // const setNewPage = (newp: number): void => {
  //   getUsers(newp, users.limit);
  // };
  //
  // const setNewLimit = (newl: number): void => {
  //   getUsers(0, newl);
  // };
  //
  // useEffect(() => {
  //   // getUsers(users.page, users.limit);
  //   getUsers(-1, -1);
  // }, []);

  console.group("component posts");
  console.log("posts");
  console.groupEnd();
  const themeContext = useContext(ThemeContext);

  return (
    <div>
      <div className="posts">
        <PostsItem
          darkTheme={themeContext.darkTheme ? themeContext.darkTheme : false}
          UserName="mr. Anderson (Neo)"
          UserID="61a11f4241cd2e4c4b593d36"
          UserImg="https://i.ibb.co/HdWQ9sz/bc17db83bdaa.jpg"
          PostDate="1 ноября 2021"
          PostImg="https://regnum.ru/uploads/pictures/news/2020/04/24/regnum_picture_1587718909376139_normal.jpg"
          PostText="Rick and Morty18+. Смешные и изобретательные приключения безумного гения и его внука.
          В озвучке Сыендука"
        />
      </div>
      {/* <Paginator */}
      {/*  page={users.page} */}
      {/*  limit={users.limit} */}
      {/*  total={users.total} */}
      {/*  setNewPage={setNewPage} */}
      {/*  setNewLimit={setNewLimit} */}
      {/* /> */}
    </div>
  );
};

// export default connect(
//   (state: State) => ({
//     users: state.users,
//   }),
//   (dispatch: Dispatch) => ({
//     getUsers: bindActionCreators(usersLoadAction, dispatch),
//   })
// )(Posts);

export default Posts;
