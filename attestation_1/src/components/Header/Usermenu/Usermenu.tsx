import React, { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../contexts/ThemeContext";

import "./Usermenu.scss";

const Usermenu = (): ReactElement => {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className={`user_menu ${themeContext.darkTheme ? "user_menu_dark" : ""}`}
    >
      <Link className="user_menu__link" to="/signin">
        Вход
      </Link>
      <div className="user_menu__divider"> | </div>
      <Link className="user_menu__link" to="/reg">
        Регистрация
      </Link>
    </div>
  );
};

export default Usermenu;
