import React, { ReactElement, useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { useParams } from 'react-router';
import { EditOutlined } from '@ant-design/icons';
import './User.scss';
import useScrollToTop from '../../../hooks/useScrollToTop';
import { ThemeContext } from '../../../contexts/ThemeContext';

import { State } from '../../../types/state';

import { userLoadAction, userPostsLoadAction } from '../../../actions/user';
import { UserState } from '../../../types/user/state';
import PostsByUser from './PostsByUser/PostsByUser';
import { PostsState } from '../../../types/posts/state';
import { UserActionFunc, UserPostsActionFunc } from '../../../types/user/actions';
import { userEditOnAction } from '../../../actions/useredit';

interface ParamsType {
  id: string;
}

interface Props {
  user: UserState;
  auth: UserState;
  posts: PostsState;
  loadUser: UserActionFunc;
  loadUserPosts: UserPostsActionFunc;
  openUserEdit: () => void;
}

const User = ({ user, auth, posts, loadUser, loadUserPosts, openUserEdit }: Props): ReactElement => {
  const themeContext = useContext(ThemeContext);
  const params = useParams<ParamsType>();

  useEffect(() => {
    // getUsers(users.page, users.limit);
    loadUser(params.id);
  }, [params.id]);

  const handleGetPosts = (page: number, limit: number): void => {
    loadUserPosts(params.id, page, limit);
  };

  const handleUserEdit = (): void => {
    openUserEdit();
  };

  useScrollToTop();
  return (
    <div className="user_wrapper">
      <div className={`user ${themeContext.darkTheme ? 'user_dark' : ''}`}>
        <div className="user__left">
          <div className="user__left__img_wrapper">
            <img
              className="user__left__img"
              src={user.picture}
              alt={`${user.title}. ${user.lastName} ${user.firstName}`}
              title={user.id}
            />
          </div>
        </div>
        <div className="user__right">
          <div className="user__right__userinfo">
            <div className="user__right__userinfo__title">
              <h3 className="user__right__userinfo__title__text">
                {`${user.title}. ${user.lastName} ${user.firstName}`}
              </h3>

              {auth.id === user.id ? (
                <div onClick={handleUserEdit} className="user__right__userinfo__title__edit">
                  <EditOutlined /> Редактировать
                </div>
              ) : (
                <></>
              )}
            </div>
            <p>
              <strong>Пол: </strong>
              {user.gender}
            </p>
            <p>
              <strong>Дата рождения: </strong>
              {user.dateOfBirth}
            </p>
            <p>
              <strong>Дата регистрации: </strong>
              {user.registerDate}
            </p>
            <p>
              <strong>Email: </strong>
              {user.email}
            </p>
            <p>
              <strong>Телефон: </strong>
              {user.phone}
            </p>
          </div>
          <div className="user__right__userid">
            <p>
              <strong>ID: </strong>
              {user.id}
            </p>
          </div>
        </div>
      </div>
      <div className="user_posts">
        <PostsByUser
          // key={posts.limit + posts.total + posts.page}
          posts={posts}
          getPosts={handleGetPosts}
        />
      </div>
    </div>
  );
};

export default connect(
  (state: State) => ({
    user: state.user,
    auth: state.auth,
    posts: state.posts,
  }),
  (dispatch: Dispatch) => ({
    loadUser: bindActionCreators(userLoadAction, dispatch),
    loadUserPosts: bindActionCreators(userPostsLoadAction, dispatch),
    openUserEdit: bindActionCreators(userEditOnAction, dispatch),
  }),
)(User);
