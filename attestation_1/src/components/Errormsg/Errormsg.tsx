import React, { ReactElement, useContext } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ErrorOffAction } from "../../actions/error";
import { State } from "../../types/state";
import "./Errormsg.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import ErrorState from "../../types/error/state";
import { ErrorActionFunc } from "../../types/error/action";

interface Props {
  isError: ErrorState;
  offError: ErrorActionFunc;
}

const Errormsg = ({ isError, offError }: Props): ReactElement => {
  console.log(isError);
  const handleOff = () => {
    offError();
  };
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className={`error_msg ${themeContext.darkTheme ? "error_msg_dark" : ""} ${
        isError.isError ? "" : "error_msg_hide"
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
        <div className="error_msg__modal__title">
          <div className="error_msg__modal__title__text">Ошибка!</div>
          <div className="error_msg__modal__title__close">
            <CloseOutlined onClick={handleOff} />
          </div>
        </div>
        <div className="error_msg__modal__body">
          <div className="error_msg__modal__body__img_wrapper">
            <img
              className="error_msg__modal__body__img"
              src="/error.png"
              alt="Ошибка"
            />
          </div>
          <div className="error_msg__modal__body__text">
            {isError.textError}
          </div>
        </div>
        <div className="error_msg__modal__footer">
          <button
            className="error_msg__modal__footer__button"
            type="button"
            onClick={handleOff}
          >
            Ясно, понятно!
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state: State) => ({
    isError: state.isError,
  }),
  (dispatch: Dispatch) => ({
    offError: bindActionCreators(ErrorOffAction, dispatch),
  })
)(Errormsg);

// export default Errormsg;
