import React, { ReactElement, useContext, useEffect, useState } from "react";
import { CloseOutlined, UploadOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { Button, DatePicker, Form, Input, Select, Upload } from "antd";
import { bindActionCreators, Dispatch } from "redux";
import { Moment } from "moment";
import { State } from "../../types/state";
import { UserState } from "../../types/user/state";

import "./UserEditModal.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

import uploadBase64IMGBB from "../../api/imgbbapi";
import { ErrorInfoType, ValuesFormType } from "../../types/reg/form";
import { UserFullType } from "../../types/api/api";

const { Option } = Select;

interface Props {
  auth: UserState;
}

const UserEditModal = ({ auth }: Props): ReactElement => {
  const themeContext = useContext(ThemeContext);

  const handleClose = () => {
    // closePost();
    console.log("close UserEditModal");
  };

  const onFinish = (values: ValuesFormType) => {
    console.log("Success:", values);

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
    };

    const map = new Map(Object.entries(user));

    map.forEach((v, k, m) => {
      // кроме location тут всё string
      if (v === "") {
        m.delete(k);
      }
    });

    const filterUser: UserFullType = Object.fromEntries(map);

    console.log(filterUser);
    // regUser(filterUser);
  };

  const onFinishFailed = (errorInfo: ErrorInfoType) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e: any): any => {
    // console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const renderForm = (): ReactElement => (
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
      // autoComplete="off"
      // validateMessages={validateMessages}
    >
      <Form.Item
        name="title"
        label="Обращение"
        // rules={[{ required: true, message: "Выберите обращение!" }]}
        className="regform__form__label"
      >
        <Select
          placeholder="Выберите обращение"
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
        label="Имя"
        name="firstName"
        rules={[{ type: "string", required: true, min: 2, max: 50 }]}
        className="regform__form__label"
      >
        <Input className="regform__form__input" />
      </Form.Item>

      <Form.Item
        label="Фамилия"
        name="lastName"
        rules={[{ type: "string", required: true, min: 2, max: 50 }]}
        className="regform__form__label"
      >
        <Input className="regform__form__input" />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Пол"
        // rules={[{ required: true }]}
        className="regform__form__label"
      >
        <Select placeholder="Выберите пол" className="regform__form__select">
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
        label="Дата рождения"
        name="dateOfBirth"
        // rules={[{ required: true }]}
        className="regform__form__label"
      >
        <DatePicker format="DD.MM.YYYY" className="regform__form__datepicker" />
      </Form.Item>

      <Form.Item
        label="Телефон"
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
            message: "Телефон должен начинаться с +79 и содержать 11 цифр",
          },
        ]}
        className="regform__form__label"
      >
        <Input className="regform__form__input" />
      </Form.Item>

      <Form.Item
        name="picture"
        label="Фото"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Выберите фото"
        // rules={[{ required: true }]}
        className="regform__form__label"
      >
        <Upload
          customRequest={uploadBase64IMGBB}
          listType="picture"
          maxCount={1}
          className="regform__form__upload"
        >
          <Button icon={<UploadOutlined />} className="regform__form__input">
            Загрузить фото
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item label="Отправить форму" className="regform__form__label">
        <Button type="primary" htmlType="submit">
          Зарегистрировать
        </Button>
      </Form.Item>
    </Form>
  );

  return auth.id !== "" ? (
    <div
      className={`user-edit ${themeContext.darkTheme ? "user-edit_dark" : ""}`}
    >
      <div
        className={`user-edit__fog ${
          themeContext.darkTheme ? "user-edit__fog_dark" : ""
        }`}
        onClick={handleClose}
      />
      <div
        className={`user-edit__close ${
          themeContext.darkTheme ? "user-edit__close_dark" : ""
        }`}
      >
        <CloseOutlined onClick={handleClose} />
      </div>
      <div
        className={`user-edit__modal ${
          themeContext.darkTheme ? "user-edit__modal_dark" : ""
        }`}
      >
        <div className="user-edit__modal__header">
          <div className="user-edit__modal__header__img_wrapper">
            <img
              src={auth.picture}
              className="user-edit__modal__header__img"
              alt={`${auth.title}. ${auth.lastName} ${auth.firstName}`}
            />
          </div>
        </div>
        <div className="user-edit__modal__body">
          <div className="user-edit__modal__body__form">{renderForm()}</div>
        </div>
        <div className="user-edit__modal__footer">footer</div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default connect(
  (state: State) => ({
    auth: state.auth,
  })
  // ,
  // (dispatch: Dispatch) => ({
  //   closePost: bindActionCreators(postCloseAction, dispatch),
  // })
)(UserEditModal);

// export default UserEditModal;
