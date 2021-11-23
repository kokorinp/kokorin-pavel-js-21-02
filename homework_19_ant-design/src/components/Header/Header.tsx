import React, { ReactElement, useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./Header.css";

const Header = () => {
  const themeContext = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const handleShow = (): void => {
    setShow(!show);
  };

  const headerText = (): ReactElement => (
    <section className="header__text">
      <p>
        Доработать домашнее задание занятия 17. Реализовать вверху страницы меню
        с двумя пунктами: &quot;пользователи&quot; и &quot;регистрация&quot;.
      </p>
      <p>
        При реализации можно пользоваться готовыми компонентами (например Menu и
        Layout библиотеки ant-design).
      </p>
      <p>
        При помощи библиотеки ant-design, разработать форму регистрации
        пользователя
      </p>
      <p>
        (использовать метод создания пользователя https://dummyapi.io/docs/user
        ).
      </p>
      <p>
        Все элементы ввода на форме регистрации должны быть управляемыми.
        Предусмотреть валидацию обязательных полей (согласно описанию API) После
        отправки формы регистрации пользователь должен быть перенаправлен на
        форму профиля зарегистрированного пользователя
      </p>
      <p>(форму из домашнего задания занятия 17).</p>
    </section>
  );

  return (
    <header className={`header ${themeContext.darkTheme ? "header_dark" : ""}`}>
      <h1 className="header__title">
        Тема 19. Библиотека готовых компонентов Ant-design
      </h1>

      {show ? headerText() : ""}

      <button
        className={`header__button ${
          themeContext.darkTheme ? "header__button_dark" : ""
        }`}
        type="button"
        onClick={handleShow}
      >
        {` ${show ? "скрыть " : "показать"} задание`}
      </button>
    </header>
  );
};

export default Header;
