import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./Header.css";

const Header = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <header className={`header ${themeContext.darkTheme ? "header_dark" : ""}`}>
      <h1 className="header__title">
        Тема 16. Функциональные компоненты, React Hooks: useState, useEffect,
        custom Hooks
      </h1>
      <section className="header__text">
        <p>
          Используя API{" "}
          <a
            href="https://dummyapi.io/"
            target="_blank"
            rel="noreferrer"
            className={`header__link ${
              themeContext.darkTheme ? "header__link_dark" : ""
            }`}
          >
            https://dummyapi.io/
          </a>{" "}
          реализовать страницу по макету{" "}
          <a
            href="https://ibb.co/gRrC7Hb"
            target="_blank"
            rel="noreferrer"
            className={`header__link ${
              themeContext.darkTheme ? "header__link_dark" : ""
            }`}
          >
            https://ibb.co/gRrC7Hb
          </a>
        </p>
        <ul>
          <li>
            При наведении мыши на имя пользователя, должна всплывать подсказка с
            его id, подобная подсказке, продемонстрированной в уроке.
            Использовать HOC или компонент-обёртку.
          </li>
          <li>
            При нажатии на кнопки перехода по страницам должна загружаться
            соответствующая информация о пользователях.
          </li>
          <li>Должна быть реализована тёмная тема (используя контекст).</li>
          <li>*Опционально: Добавить анимацию всплывающей подсказке</li>
          <li>
            *Опционально: реализовать select для выбора кол-ва отображаемых на
            странице пользователей
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
