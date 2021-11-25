import React, { ReactElement, useContext } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";

import "./Regform.css";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { LocationType, UserFullType } from "../../../types/types";

const { Option } = Select;

interface ValuesFormType {
  firstName: string;
  lastName: string;
  dateOfBirth: any; // Moment {_isAMomentObject: true, _i: '11.05.1987', _f: 'DD.MM.YYYY', _l: 'ru_RU', _strict: true, …}
  email: string;
  gender: string;
  phone: string;
  state: string;
  street: string;
  title: string;
  city: string;
  country: string;
}

interface ErrorFieldsType {
  errors: Array<any>;
  name: Array<any>;
}

interface ErrorInfoType {
  errorFields: Array<ErrorFieldsType>;
  outOfDate: any;
  values: ValuesFormType;
}

const Regform = (): ReactElement => {
  const onFinish = (values: ValuesFormType) => {
    console.log("Success:", values);
    const user: UserFullType = {
      title: "",
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      dateOfBirth: "",
      phone: "",
      picture: "",
      // location: {},
    };
    const location: LocationType = {};
    Object.entries(values).forEach((e: Array<any>) => {
      const key: string = e[0] as string;
      if (Object.prototype.hasOwnProperty.call(user, key)) {
        let v: string = "";
        console.log(key);
        if (key === "dateOfBirth") {
          v = e[1].format("l") as string;
        } else {
          v = e[1] as string;
        }

        console.log(v);
        /* eslint-disable prefer-destructuring */
        // user[key] = v;
        /* eslint-enable prefer-destructuring */
      }
    });
    console.log(user);
  };

  const onFinishFailed = (errorInfo: ErrorInfoType) => {
    // тут что-то можно делать с ошибками... оповещать пользователя
    // errorInfo.errorFields.forEach((e: ErrorFieldsType) => {
    //   console.log("e:", e.name[0]);
    // });
    console.log("Failed:", errorInfo);
  };

  const themeContext = useContext(ThemeContext);

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "Поле <${label}> обязательно!",
    types: {
      email: "Введите email по образцу exampl@exampl.com",
    },
    string: {
      range: "Поле <${label}> должно быть между ${min} и ${max} символами",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  return (
    <div
      className={`regform ${themeContext.darkTheme ? "regform_dark" : ""}`}
      id="regform"
    >
      <Form
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
          label="Обращение"
          rules={[{ required: true, message: "Выберите обращение!" }]}
        >
          <Select placeholder="Выберите обращение">
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
        >
          <Input placeholder="Введите Имя" />
        </Form.Item>

        <Form.Item
          label="Фамилия"
          name="lastName"
          rules={[{ type: "string", required: true, min: 2, max: 50 }]}
        >
          <Input placeholder="Введите Фамилию" />
        </Form.Item>

        <Form.Item name="gender" label="Пол" rules={[{ required: true }]}>
          <Select placeholder="Выберите пол">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: "email", required: true }]}
        >
          <Input placeholder="Введите Email" />
        </Form.Item>

        <Form.Item
          label="Дата рождения"
          name="dateOfBirth"
          rules={[{ required: true }]}
        >
          <DatePicker format="DD.MM.YYYY" />
        </Form.Item>

        <Form.Item
          label="Телефон"
          name="phone"
          rules={[{ type: "string", required: true, min: 2, max: 50 }]}
        >
          <Input placeholder="Введите Телефон" />
        </Form.Item>

        <Form.Item label="Адрес">
          <p>&nbsp;</p>
        </Form.Item>

        <Form.Item
          label="Улица"
          name="street"
          rules={[{ type: "string", min: 5, max: 100 }]}
        >
          <Input placeholder="Введите Улицу" />
        </Form.Item>

        <Form.Item
          label="Город"
          name="city"
          rules={[{ type: "string", min: 2, max: 30 }]}
        >
          <Input placeholder="Введите Город" />
        </Form.Item>

        <Form.Item
          label="Штат/Край/Область"
          name="state"
          rules={[{ type: "string", min: 2, max: 30 }]}
        >
          <Input placeholder="Введите Штат/Край/Область" />
        </Form.Item>

        <Form.Item
          label="Страна"
          name="country"
          rules={[{ type: "string", min: 2, max: 30 }]}
        >
          <Input placeholder="Введите Страну" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Зарегистрировать
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Regform;
