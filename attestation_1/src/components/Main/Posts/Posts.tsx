import React, { ReactElement, useContext, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { State } from "../../../types/state";
import { PostsState } from "../../../types/posts/state";

import "./Posts.scss";
import PostsItem from "./PostsItem/PostsItem";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { postsLoadAction } from "../../../actions/posts";
import { PostPreview } from "../../../types/api/api";
import Paginator from "../../Paginator/Paginator";
import { PostsPagArrSelectOptions } from "../../../const/posts/const";

interface Props {
  posts: PostsState;
  getPosts: (page: number, limit: number) => void;
}

const Posts = ({ posts, getPosts }: Props): ReactElement => {
  const setNewPage = (newp: number): void => {
    getPosts(newp, posts.limit);
  };

  const setNewLimit = (newl: number): void => {
    getPosts(0, newl);
  };

  useEffect(() => {
    // getUsers(users.page, users.limit);
    getPosts(-1, -1);
  }, []);

  // console.group("component posts");
  // console.log(posts);
  // console.groupEnd();
  const themeContext = useContext(ThemeContext);

  return (
    <div className="posts_wrapper">
      <div className="posts">
        {posts.posts.map((e: PostPreview) => (
          <PostsItem
            key={e.id}
            darkTheme={themeContext.darkTheme ? themeContext.darkTheme : false}
            UserName={`${e.owner.title} ${e.owner.lastName} ${e.owner.firstName}`}
            UserID={e.owner.id}
            UserImg={e.owner.picture}
            PostDate={e.publishDate}
            PostImg={e.image}
            PostText={e.text}
            PostID={e.id}
            // PostID={e.owner.id} //имитация ошибки 404
          />
        ))}
      </div>
      <Paginator
        key={posts.limit + posts.total + posts.page}
        page={posts.page}
        limit={posts.limit}
        total={posts.total}
        setNewPage={setNewPage}
        setNewLimit={setNewLimit}
        arroptions={PostsPagArrSelectOptions}
      />
    </div>
  );
};

export default connect(
  (state: State) => ({
    posts: state.posts,
  }),
  (dispatch: Dispatch) => ({
    getPosts: bindActionCreators(postsLoadAction, dispatch),
  })
)(Posts);

// export default Posts;
