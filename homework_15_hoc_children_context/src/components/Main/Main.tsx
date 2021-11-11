import React, { ReactNode } from 'react';

import './Main.css';
import Paginator from './Paginator/Paginator';
import Cards from './Cards/Cards';
import Themeswitcher from './Themeswitcher/Themeswitcher';

interface State {}

interface Props {
  darkTheme: boolean;
}

class Main extends React.Component<Props, State> {
  render(): ReactNode {
    return (
      <main className="main">
        <h1 className="main__title">Пользователи</h1>
        <Cards darkTheme={this.props.darkTheme ? this.props.darkTheme : false} />
        <Paginator darkTheme={this.props.darkTheme ? this.props.darkTheme : false} />
        <Themeswitcher />
      </main>
    );
  }
}

export default Main;
