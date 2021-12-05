import React, { useContext } from "react";
import "./Themeswitcher.scss";
import { Switch } from "antd";
import { ThemeContext } from "../../../contexts/ThemeContext";

const Themeswitcher = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="themeswitcher">
      <label className="themeswitcher__label" htmlFor="Themeswitcher">
        тёмная тема
      </label>
      <Switch
        id="Themeswitcher"
        defaultChecked={themeContext.darkTheme}
        onChange={themeContext.toggleTheme}
      />
    </div>
  );
};

export default Themeswitcher;
