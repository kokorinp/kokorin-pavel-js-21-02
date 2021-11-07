import React from 'react';

import './Header.css';

class Header extends React.Component<any, any> {
  render() {
    return (
      <header className="header">
        <h1 className="header__title">Тема 14. Props, State</h1>
        <p className="header__text">
          Разработка ToDo-листа (списка дел) на react. Предусмотреть минимальный функционал, т.е. у пользователя должна
          быть возможность добавлять и удалять записи. Записи должны сохраняться при перезагрузки страницы.
        </p>
      </header>
    );
  }
}

export default Header;
