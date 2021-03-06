import React, { ReactElement, useContext } from "react";
import { Form, Input, Button, Select, DatePicker, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { useHistory } from "react-router";
import { State } from "../../../types/state";
import { RegistrationActionFunc } from "../../../types/reg/actions";
import { UserFullType } from "../../../types/api/api";
import uploadBase64IMGBB from "../../../api/imgbbapi";
import { RegistrationOnAction } from "../../../actions/reg";
import "./Regform.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { UserState } from "../../../types/user/state";
import {
  ErrorFieldsType,
  ErrorInfoType,
  ValuesFormType,
} from "../../../types/reg/form";
import { ErrorOnAction } from "../../../actions/error";
import { ErrorActionFunc } from "../../../types/error/action";

const { Option } = Select;

interface Props {
  auth: UserState;
  regUser: RegistrationActionFunc;
  ErrorOn: ErrorActionFunc;
}

const Regform = ({ ErrorOn, auth, regUser }: Props): ReactElement => {
  const history = useHistory();
  auth.id !== "" && history.push(`/user/${auth.id}`);
  const onFinish = (values: ValuesFormType) => {
    // console.log("Success:", values);

    // const loc: LocationType = {
    //   street: values.street || "",
    //   city: values.city || "",
    //   state: values.state || "",
    //   country: values.country || "",
    //   timezone: values.timezone || "",
    // };

    const dateOfBirth: string = values.dateOfBirth
      ? (values.dateOfBirth.format("YYYY-MM-DD") as string)
      : "";
    const picture: string = values.picture ? values.picture[0].response : "";

    const user: UserFullType = {
      title: values.title || "",
      firstName: values.firstName || "",
      lastName: values.lastName || "",
      gender: values.gender || "",
      email: values.email || "",
      phone: values.phone || "",
      dateOfBirth,
      picture,
      // location: loc,
      // registerDate: "",
      // id: "",
    };

    const map = new Map(Object.entries(user));

    map.forEach((v, k, m) => {
      // ?????????? location ?????? ?????? string
      if (v === "") {
        m.delete(k);
      }
    });

    const filterUser: UserFullType = Object.fromEntries(map);

    // console.log(filterUser);
    regUser(filterUser);
  };

  const onFinishFailed = (errorInfo: ErrorInfoType) => {
    const err: Array<string> = [];
    errorInfo.errorFields.forEach((e: ErrorFieldsType) => {
      err.push(
        e.errors.reduce(
          (acc: string, val: string) => acc.concat(val).concat(" | "),
          ""
        )
      );
    });
    // console.log("Failed:", err.toString());
    ErrorOn(err.toString());
  };

  const normFile = (e: any): any => {
    // console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const themeContext = useContext(ThemeContext);

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "???????? <${label}> ??????????????????????!",
    types: {
      email: "?????????????? email ???? ?????????????? exampl@exampl.com",
    },
    string: {
      range: "???????? <${label}> ???????????? ???????? ?????????? ${min} ?? ${max} ??????????????????",
    },
    pattern: {
      mismatch: "<${name}> ???????????? ?????????????????????????????? ?????????????????? ${pattern}",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  return (
    <div
      className={`regform ${themeContext.darkTheme ? "regform_dark" : ""}`}
      id="regform"
    >
      <div className="regform__form__title">??????????????????????</div>
      <div className="regform__form__body">
        <Form
          className="regform__form"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
          // initialValues={{
          //   remember: true,
          // }}
          scrollToFirstError={{ behavior: "smooth" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          validateMessages={validateMessages}
        >
          <Form.Item
            name="title"
            label="??????????????????"
            // rules={[{ required: true, message: "???????????????? ??????????????????!" }]}
            className="regform__form__label"
          >
            <Select
              placeholder="???????????????? ??????????????????"
              className="regform__form__select"
            >
              <Option value="mr">mr</Option>
              <Option value="ms">ms</Option>
              <Option value="mrs">mrs</Option>
              <Option value="miss">miss</Option>
              <Option value="dr">dr</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="??????"
            name="firstName"
            rules={[{ type: "string", required: true, min: 2, max: 50 }]}
            className="regform__form__label"
          >
            <Input className="regform__form__input" />
          </Form.Item>

          <Form.Item
            label="??????????????"
            name="lastName"
            rules={[{ type: "string", required: true, min: 2, max: 50 }]}
            className="regform__form__label"
          >
            <Input className="regform__form__input" />
          </Form.Item>

          <Form.Item
            name="gender"
            label="??????"
            // rules={[{ required: true }]}
            className="regform__form__label"
          >
            <Select
              placeholder="???????????????? ??????"
              className="regform__form__select"
            >
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true },
              {
                pattern: new RegExp(
                  /^[A-z0-9._-]+@[A-z0-9._-]+\.[A-z0-9._-]{1,3}$/i
                ),
              },
            ]}
            className="regform__form__label"
          >
            <Input className="regform__form__input" />
          </Form.Item>

          <Form.Item
            label="???????? ????????????????"
            name="dateOfBirth"
            // rules={[{ required: true }]}
            className="regform__form__label"
          >
            <DatePicker
              format="DD.MM.YYYY"
              className="regform__form__datepicker"
            />
          </Form.Item>

          <Form.Item
            label="??????????????"
            name="phone"
            rules={[
              // {
              //   type: "string",
              //   // required: true,
              //   min: 2,
              //   max: 50,
              // },
              {
                pattern: new RegExp(/^\+79\d{9}$/i),
                message: "?????????????? ???????????? ???????????????????? ?? +79 ?? ?????????????????? 11 ????????",
              },
            ]}
            className="regform__form__label"
          >
            <Input className="regform__form__input" />
          </Form.Item>

          <Form.Item
            name="picture"
            label="????????"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="???????????????? ????????"
            // rules={[{ required: true }]}
            className="regform__form__label"
          >
            <Upload
              customRequest={uploadBase64IMGBB}
              listType="picture"
              maxCount={1}
              className="regform__form__upload"
            >
              <Button
                icon={<UploadOutlined />}
                className="regform__form__input"
              >
                ?????????????????? ????????
              </Button>
            </Upload>
          </Form.Item>

          <Form.Item label="?????????????????? ??????????" className="regform__form__label">
            <Button type="primary" htmlType="submit">
              ????????????????????????????????
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
// export default Regform;

export default connect(
  (state: State) => ({
    auth: state.auth,
  }),
  (dispatch: Dispatch) => ({
    regUser: bindActionCreators(RegistrationOnAction, dispatch),
    ErrorOn: bindActionCreators(ErrorOnAction, dispatch),
  })
)(Regform);
