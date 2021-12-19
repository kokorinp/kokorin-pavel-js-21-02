import React, { ReactElement, useContext } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { State } from "../../../types/state";
import { UserState } from "../../../types/user/state";

import { ThemeContext } from "../../../contexts/ThemeContext";

import "./Usermenu.scss";

interface Props {
  auth: UserState;
}

const Usermenu = ({ auth }: Props): ReactElement => {
  const themeContext = useContext(ThemeContext);

  const userMenuAuth = (): ReactElement => (
    <Link
      className={`user_menu__auth ${
        themeContext.darkTheme ? "user_menu__auth_dark" : ""
      }`}
      to={`/user/${auth.id}`}
    >
      <div className="user_menu__auth__img_wrapper">
        <img
          className="user_menu__auth__img"
          src={auth.picture}
          alt={auth.firstName}
          title={`${auth.title}. ${auth.lastName} ${auth.firstName}`}
        />
      </div>
      <div
        className="user_menu__auth__name"
        title={`${auth.title}. ${auth.lastName} ${auth.firstName}`}
      >
        {auth.firstName}
      </div>
    </Link>
  );

  return (
    <div
      className={`user_menu ${themeContext.darkTheme ? "user_menu_dark" : ""}`}
    >
      {auth.id === "" ? (
        <Link className="user_menu__link" to="/signin">
          Вход
        </Link>
      ) : (
        userMenuAuth()
      )}
      <div className="user_menu__divider"> | </div>

      {auth.id === "" ? (
        <Link className="user_menu__link" to="/reg">
          Регистрация
        </Link>
      ) : (
        <Link className="user_menu__link" to="/logout">
          Выход
        </Link>
      )}
    </div>
  );
};

export default connect((state: State) => ({
  auth: state.auth,
}))(Usermenu);
// export default Usermenu;
