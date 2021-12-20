import React, { ReactElement, useContext, useEffect, useState } from "react";
import { CloseOutlined, UploadOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { Button, DatePicker, Form, Input, Select, Upload } from "antd";
import { bindActionCreators, Dispatch } from "redux";
import moment, { Moment } from "moment";
import { State } from "../../types/state";
import { UserState } from "../../types/user/state";

import "./UserEditModal.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

import uploadBase64IMGBB from "../../api/imgbbapi";
import { ErrorInfoType, ValuesFormType } from "../../types/reg/form";
import { UserFullType } from "../../types/api/api";
import { UserEditState } from "../../types/useredit/state";
import {
  userEditOffAction,
  userEditUpdateAction,
} from "../../actions/useredit";
import { RegistrationActionFunc } from "../../types/reg/actions";

const { Option } = Select;

interface Props {
  auth: UserState;
  userEdit: UserEditState;
  closeUserEdit: () => void;
  updateUserEdit: RegistrationActionFunc;
}

const UserEditModal = ({
  closeUserEdit,
  auth,
  userEdit,
  updateUserEdit,
}: Props): ReactElement => {
  const themeContext = useContext(ThemeContext);

  const handleClose = () => {
    closeUserEdit();
  };

  const onFinish = (values: ValuesFormType) => {
    // console.log("Success:", values);

    const dateOfBirth: string = values.dateOfBirth
      ? (values.dateOfBirth.format("YYYY-MM-DD") as string)
      : "";
    const picture: string = values.picture ? values.picture[0].response : "";

    const user: UserFullType = {
      id: auth.id, // в данный момент разницы нет как ложить ID в этот объект... можно протащить и через скрытое поле в форме
      title: values.title || "",
      firstName: values.firstName || "",
      lastName: values.lastName || "",
      gender: values.gender || "",
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
    updateUserEdit(filterUser);
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

  // console.log(auth);

  const renderForm = (): ReactElement => (
    <Form
      className={`user-edit__form ${
        themeContext.darkTheme ? "user-edit__form_dark" : ""
      }`}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 12 }}
      scrollToFirstError={{ behavior: "smooth" }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size="small"
      initialValues={{
        title: auth.title,
        firstName: auth.firstName,
        lastName: auth.lastName,
        gender: auth.gender,
        email: auth.email,
        dateOfBirth: moment(
          auth.dateOfBirthRaw === "" ? undefined : auth.dateOfBirthRaw
        ),
        phone: auth.phone,
      }}
    >
      <Form.Item
        name="title"
        label="Обращение"
        className="user-edit__form__label"
      >
        <Select
          placeholder="Выберите обращение"
          className="user-edit__form__select"
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
        className="user-edit__form__label"
      >
        <Input className="user-edit__form__input" />
      </Form.Item>

      <Form.Item
        label="Фамилия"
        name="lastName"
        rules={[{ type: "string", required: true, min: 2, max: 50 }]}
        className="user-edit__form__label"
      >
        <Input className="user-edit__form__input" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        className="user-edit__form__label"
        rules={[{ required: true }]}
      >
        <Input disabled className="user-edit__form__input" />
      </Form.Item>

      <Form.Item name="gender" label="Пол" className="user-edit__form__label">
        <Select placeholder="Выберите пол" className="user-edit__form__select">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Дата рождения"
        name="dateOfBirth"
        className="user-edit__form__label"
      >
        <DatePicker
          format="DD.MM.YYYY"
          className="user-edit__form__datepicker"
        />
      </Form.Item>

      <Form.Item
        label="Телефон"
        name="phone"
        rules={[
          {
            pattern: new RegExp(/^\+79\d{9}$/i),
            message: "Телефон должен начинаться с +79 и содержать 11 цифр",
          },
        ]}
        className="user-edit__form__label"
      >
        <Input className="user-edit__form__input" />
      </Form.Item>

      <Form.Item
        name="picture"
        label="Фото"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Выберите фото"
        className="user-edit__form__label"
      >
        <Upload
          customRequest={uploadBase64IMGBB}
          listType="picture"
          maxCount={1}
          className="user-edit__form__upload"
        >
          <Button icon={<UploadOutlined />} className="user-edit__form__input">
            Загрузить фото
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item label="Отправить форму" className="user-edit__form__label">
        <Button type="primary" htmlType="submit">
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );

  return userEdit.edit ? (
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
        {/* <div className="user-edit__modal__footer">footer</div> */}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default connect(
  (state: State) => ({
    auth: state.auth,
    userEdit: state.userEdit,
  }),
  (dispatch: Dispatch) => ({
    closeUserEdit: bindActionCreators(userEditOffAction, dispatch),
    updateUserEdit: bindActionCreators(userEditUpdateAction, dispatch),
  })
)(UserEditModal);

// export default UserEditModal;
