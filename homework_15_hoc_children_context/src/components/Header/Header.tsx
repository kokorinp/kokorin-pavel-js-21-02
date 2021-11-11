import React, { ReactNode } from 'react';

import './Header.css';

interface Props {
  darkTheme: boolean;
}

interface State {}

class Header extends React.Component<Props, State> {
  render(): ReactNode {
    return (
      <header className={`header ${this.props.darkTheme ? 'header_dark' : ''}`}>
        <h1 className="header__title">Тема 15. Методы жизненного цикла / HOC / Children / Context</h1>
        <section className="header__text">
          <p>
            Используя API{' '}
            <a
              href="https://dummyapi.io/"
              target="_blank"
              rel="noreferrer"
              className={`header__link ${this.props.darkTheme ? 'header__link_dark' : ''}`}
            >
              https://dummyapi.io/
            </a>{' '}
            реализовать страницу по макету{' '}
            <a
              href="https://ibb.co/gRrC7Hb"
              target="_blank"
              rel="noreferrer"
              className={`header__link ${this.props.darkTheme ? 'header__link_dark' : ''}`}
            >
              https://ibb.co/gRrC7Hb
            </a>
          </p>
          <ul>
            <li>
              При наведении мыши на имя пользователя, должна всплывать подсказка с его id, подобная подсказке,
              продемонстрированной в уроке. Использовать HOC или компонент-обёртку.
            </li>
            <li>
              При нажатии на кнопки перехода по страницам должна загружаться соответствующая информация о пользователях.
            </li>
            <li>Должна быть реализована тёмная тема (используя контекст).</li>
            <li>*Опционально: Добавить анимацию всплывающей подсказке</li>
            <li>*Опционально: реализовать select для выбора кол-ва отображаемых на странице пользователей</li>
          </ul>
        </section>
      </header>
    );
  }
}

export default Header;
