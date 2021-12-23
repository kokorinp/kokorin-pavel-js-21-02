import React, { ReactElement, useContext } from "react";
import { NavLink } from "react-router-dom";

import { ThemeContext } from "../../../contexts/ThemeContext";

import "./Logo.scss";

const Logo = (): ReactElement => {
  const themeContext = useContext(ThemeContext);
  const Wubbalubbadubdub = "Wubba lubba dub dub!";
  return (
    <NavLink to="/" className="logo" title={Wubbalubbadubdub}>
      <div className="logo__img_wrapper">
        <img
          className="logo__img"
          src="/logo.png"
          alt={Wubbalubbadubdub}
          title={Wubbalubbadubdub}
        />
      </div>
      <p
        className={`logo__text ${
          themeContext.darkTheme ? "logo__text_dark" : ""
        }`}
        title={Wubbalubbadubdub}
      >
        Rick Land
      </p>
    </NavLink>
  );
};

export default Logo;
