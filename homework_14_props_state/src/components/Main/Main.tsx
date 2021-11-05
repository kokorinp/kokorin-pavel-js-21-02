import React from 'react';

import './Main.css';
import Left from './Left/Left';
import Right from './Right/Right';

class Main extends React.Component<any, any> {
  render() {
    return (
      <main className="main">
        <Left />
        <Right />
      </main>
    );
  }
}

export default Main;
