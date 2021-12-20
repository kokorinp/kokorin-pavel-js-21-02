import React, { ReactElement, useContext } from "react";
import { connect } from "react-redux";
import { State } from "../../types/state";

import "./Preloader.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

interface Props {
  isLoading: boolean;
}

const Preloader = ({ isLoading }: Props): ReactElement => {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className={`preloader ${themeContext.darkTheme ? "preloader_dark" : ""} ${
        isLoading ? "" : "preloader_hide"
      }`}
    >
      <div className="preloader__wrapper">
        <img className="preloader__img" src="/preloader.png" alt="Загрузка" />
      </div>
    </div>
  );
};

export default connect((state: State) => ({
  isLoading: state.isLoading.isLoading,
}))(Preloader);
