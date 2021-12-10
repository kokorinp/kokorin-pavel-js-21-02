import React, { ReactElement, useContext, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { useParams } from "react-router";
import { EditOutlined } from "@ant-design/icons";
import "./User.scss";
import useScrollToTop from "../../../hooks/useScrollToTop";
import { ThemeContext } from "../../../contexts/ThemeContext";

import { State } from "../../../types/state";

import { userLoadAction } from "../../../actions/user";
import { UserState } from "../../../types/user/state";

interface ParamsType {
  id: string;
}

interface Props {
  user: UserState;
  loadUser: (newid: string) => void;
}

const User = ({ user, loadUser }: Props): ReactElement => {
  const themeContext = useContext(ThemeContext);
  console.log(user);

  const params = useParams<ParamsType>();

  useEffect(() => {
    // getUsers(users.page, users.limit);
    loadUser(params.id);
  }, []);

  useScrollToTop();
  return (
    <div className={`user ${themeContext.darkTheme ? "user_dark" : ""}`}>
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
            <div className="user__right__userinfo__title__edit">
              <EditOutlined /> Редактировать
            </div>
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
  );
};

export default connect(
  (state: State) => ({
    user: state.user,
  }),
  (dispatch: Dispatch) => ({
    loadUser: bindActionCreators(userLoadAction, dispatch),
  })
)(User);
