import React, { ReactElement, useContext } from "react";
import { connect } from "react-redux";
import { State } from "../../types/state";

import "./Errormsg.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

interface Props {
  isLoading: boolean;
}

const Errormsg = (): ReactElement => {
  const isLoading = true;
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className={`error_msg ${themeContext.darkTheme ? "error_msg_dark" : ""} ${
        isLoading ? "" : "error_msg_hide"
      }`}
    >
      <div
        className={`error_msg__fog ${
          themeContext.darkTheme ? "error_msg__fog_dark" : ""
        }`}
      >
        {" "}
      </div>

      <div
        className={`error_msg__modal ${
          themeContext.darkTheme ? "error_msg__modal_dark" : ""
        }`}
      >
        <div className="error_msg__modal__title">Ошибка!</div>
        <div className="error_msg__modal__body">
          <div className="error_msg__modal__body__img_wrapper">
            <img
              className="error_msg__modal__body__img"
              src="/error.png"
              alt="Ошибка"
            />
          </div>
          <div className="error_msg__modal__body__text">Ошибка ололоев!</div>
        </div>
        <div className="error_msg__modal__footer">
          <button className="error_msg__modal__footer__button" type="button">
            Ясно, понятно
          </button>
        </div>
      </div>
    </div>
  );
};

/*
export default connect((state: State) => ({
  isLoading: state.isLoading.isLoading,
}))(Errormsg);
*/
export default Errormsg;
