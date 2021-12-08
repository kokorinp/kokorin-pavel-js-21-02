import React, { ReactElement, useContext } from "react";
import { Form, Input, Button, Select, DatePicker, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { useHistory } from "react-router";
import "./Regform.css";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { LocationType, UserFullType } from "../../../types/api/api";
import { TIME_ZONE_LIST } from "../../../const/const";
import { userRegistration } from "../../../api/api";
import uploadBase64IMGBB from "../../../api/imgbbapi";

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
  const history = useHistory();
  const onFinish = (values: ValuesFormType) => {
    // console.log("Success:", values);
    const loc: LocationType = {
      street: "",
      city: "",
      state: "",
      country: "",
      timezone: "",
    };

    const user: UserFullType = {
      title: "",
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      dateOfBirth: "",
      phone: "",
      picture:
        "https://static5.depositphotos.com/1000128/420/i/600/depositphotos_4209631-stock-photo-blue-dice.jpg",
      location: loc,
      registerDate: "",
      id: "",
    };

    // Object.entries(values).forEach((e: Array<any>) => {
    //   if (Object.prototype.hasOwnProperty.call(loc, e[0])) {
    //     loc[e[0]] = e[1] as string;
    //   }
    //
    //   if (Object.prototype.hasOwnProperty.call(user, e[0])) {
    //     let v: string = "";
    //     if (e[0] === "dateOfBirth") {
    //       // v = e[1].format("l") as string;
    //       v = e[1].format("YYYY-MM-DD") as string;
    //     }
    //     if (e[0] === "picture") {
    //       v = (e[1] as Array<{ response: string }>)[0].response;
    //     } else {
    //       v = e[1] as string;
    //     }
    //     user[e[0]] = v;
    //   }
    // });
    // console.log(user);

    userRegistration(
      user,
      (resp: UserFullType) => {
        console.log(resp);
        // history.push("/user/".concat(resp.id));
      },
      (resp: any) => console.error(resp)
    );
  };

  const onFinishFailed = (errorInfo: ErrorInfoType) => {
    // тут что-то можно делать с ошибками... оповещать пользователя
    // errorInfo.errorFields.forEach((e: ErrorFieldsType) => {
    //   console.log("e:", e.name[0]);
    // });
    console.log("Failed:", errorInfo);
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

        <Form.Item
          name="picture"
          label="Фото"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="Выберите фото"
          rules={[{ required: true }]}
        >
          <Upload
            customRequest={uploadBase64IMGBB}
            listType="picture"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Загрузить фото</Button>
          </Upload>
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

        <Form.Item
          name="timezone"
          label="Часовой пояс"
          rules={[{ message: "Выберите часовой пояс!" }]}
        >
          <Select placeholder="Выберите часовой пояс">
            {TIME_ZONE_LIST.map((t: string) => (
              <Option key={t} value={t}>
                {t}
              </Option>
            ))}
          </Select>
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
