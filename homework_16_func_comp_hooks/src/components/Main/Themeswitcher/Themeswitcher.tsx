import React, { useContext } from "react";

import "./Themeswitcher.css";
import { ThemeContext } from "../../../contexts/ThemeContext";

const Themeswitcher = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="themeswitcher">
      <label className="themeswitcher__label" htmlFor="Themeswitcher">
        тёмная тема
      </label>
      <input
        className="themeswitcher__input"
        type="checkbox"
        id="Themeswitcher"
        defaultChecked={themeContext.darkTheme}
        onClick={themeContext.toggleTheme}
      />
    </div>
  );
};

export default Themeswitcher;
