import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="body">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
