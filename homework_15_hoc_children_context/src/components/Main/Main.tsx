import React, { ReactNode } from 'react';

import './Main.css';
import Top from './Cards/Cards';
import Paginator from './Paginator/Paginator';

interface State {}

interface Props {}

class Main extends React.Component<Props, State> {
  render(): ReactNode {
    return (
      <main className="main">
        <Top />
        <Paginator />
      </main>
    );
  }
}

export default Main;
