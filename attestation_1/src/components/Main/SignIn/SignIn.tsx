import React, { ReactElement, useContext } from "react";
import { useHistory } from "react-router";
import { Button, Form, Input } from "antd";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import { Store as StoreANTD } from "antd/lib/form/interface";
import { ErrorOnAction } from "../../../actions/error";
import { authLoginAction } from "../../../actions/auth";
import { State } from "../../../types/state";
import { UserState } from "../../../types/user/state";

import "./SignIn.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";

interface Props {
  auth: UserState;
  errorOn: (text: string) => void;
  login: (text: string) => void;
}

const SignIn = ({ auth, errorOn, login }: Props): ReactElement => {
  const history = useHistory();
  auth.id !== "" && history.push(`/user/${auth.id}`);
  const themeContext = useContext(ThemeContext);

  // console.log(auth);

  const onFinish = (values: StoreANTD) => {
    // console.log("Success:", values.id);
    login(values.id);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<any>) => {
    // console.log("Failed:", errorInfo);

    const err = errorInfo.errorFields.map((e) => {
      const ee = e.errors;
      return ee.map((eee: string) => eee);
    });
    errorOn(err.toString());
    // console.log("err:", err.toString());
  };

  return (
    <div className={`signin ${themeContext.darkTheme ? "signin_dark" : ""}`}>
      <div className="signin__form">
        <div className="signin__form__title">Вход</div>
        <div className="signin__form__body">
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="form"
          >
            <p className="form__label">ID:</p>
            <Form.Item
              name="id"
              label="id"
              rules={[
                {
                  required: true,
                  message: "Введите ID!",
                },
                {
                  pattern: new RegExp(/^[a-z0-9]+$/),
                  message: "Только английские буквы в нижнем регистре и цифры!",
                },
              ]}
              noStyle
            >
              <Input className="form__input" />
            </Form.Item>

            <Form.Item noStyle>
              <Button className="form__button" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="signin__form__footer">
          Ещё нет аккаунта? Зарегистрироваться
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state: State) => ({
    auth: state.auth,
  }),
  (dispatch: Dispatch) => ({
    errorOn: bindActionCreators(ErrorOnAction, dispatch),
    login: bindActionCreators(authLoginAction, dispatch),
  })
)(SignIn);
// export default SignIn;
