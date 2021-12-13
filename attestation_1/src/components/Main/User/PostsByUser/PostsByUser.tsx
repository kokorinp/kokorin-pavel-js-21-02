import React, { ReactElement, useContext } from "react";
import { PostsState } from "../../../../types/posts/state";
import "./PostsByUser.scss";
import PostsByUserItem from "./PostsByUserItem/PostsByUserItem";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { PostPreview } from "../../../../types/api/api";
import Paginator from "../../../Paginator/Paginator";

interface Props {
  posts: PostsState;
  getPosts: (page: number, limit: number) => void;
}

const PostsByUser = ({ posts, getPosts }: Props): ReactElement => {
  const setNewPage = (newp: number): void => {
    getPosts(newp, posts.limit);
  };

  const setNewLimit = (newl: number): void => {
    getPosts(0, newl);
  };

  // useEffect(() => {
  //   getPosts(-1, -1);
  // }, []);

  // console.group("component PostsByUser");
  // console.log(posts);
  // console.groupEnd();
  const themeContext = useContext(ThemeContext);

  return posts.posts.length > 0 ? (
    <div className="posts_wrapper">
      <div className="posts">
        {posts.posts.map((e: PostPreview) => (
          <PostsByUserItem
            key={e.id}
            darkTheme={themeContext.darkTheme ? themeContext.darkTheme : false}
            // UserName={`${e.owner.title} ${e.owner.lastName} ${e.owner.firstName}`}
            // UserID={e.owner.id}
            // UserImg={e.owner.picture}
            // PostDate={e.publishDate}
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
      />
    </div>
  ) : (
    <></>
  );
};

export default PostsByUser;
