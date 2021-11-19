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
      <p>Доработка предыдущего домашнего задания.</p>
      <p>
        При клике по карточке пользователя из предыдущего домашнего задания,
        должен совершаться переход на форму пользователя, содержащую полную
        информацию о пользователе.
      </p>
      <p>
        На форме пользователя реализовать кнопку &quot;назад&quot;, реализующую
        функционал кнопки &quot;назад&quot; браузера.
      </p>
      <p>*Опционально: Доработать форму списка пользователей.</p>
      <p>
        Компонент переключения по страницам должен отображать реальное кол-во
        страниц (например, если найдено 100 пользователей, при отображении 10-и
        пользователей на странице, должно быть десять кнопок для перехода по
        страницам). В случае если кол-во страниц превышает 10, должны
        отображаться кнопки первой, второй, третей страниц, знак троеточия,
        плитка предыдущей, текущей и следующей страниц, троеточие и плитки
        последних трёх страниц страницы.
      </p>
      <p>
        Пример (всего 20 странниц, активна страница 11):
        <br />
        |1|2|3|…|10|11|12|…|18|19|20|
        <br />
      </p>
      <p>
        Если, при вышеописанных условиях активна страница 5, троеточие между
        кнопками 3 и 4 не отображать
        <br />
        Пример (всего 20 страниц, активна 5-я страница):
        <br />
        |1|2|3|4|5|6|…|18|19|20|
      </p>
      <p>
        Если, при вышеописанных условиях активна страница n-3 (где n – общее
        число страниц), троеточие после кнопки следующей страницы не отображать
        <br />
        Пример (всего 20 страниц, активна 17-я страница):
        <br />
        |1|2|3|…|16|17|18|19|20|
      </p>
    </section>
  );

  return (
    <header className={`header ${themeContext.darkTheme ? "header_dark" : ""}`}>
      <h1 className="header__title">
        Тема 17. React-router: BrowserRouter, switch, withRouter. Объект
        location, работа с URL
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
