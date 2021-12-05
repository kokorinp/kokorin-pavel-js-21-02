import React, { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./Header.scss";
import Menuapp from "./Menuapp/Menuapp";
import Logo from "./Logo/Logo";
import Usermenu from "./Usermenu/Usermenu";

const Header = (): ReactElement => {
  const themeContext = useContext(ThemeContext);

  return (
    <header className={`header ${themeContext.darkTheme ? "header_dark" : ""}`}>
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__menu">
        <Menuapp />
      </div>
      <div className="header__user_menu">
        <Usermenu />
      </div>
    </header>
  );
};

export default Header;
