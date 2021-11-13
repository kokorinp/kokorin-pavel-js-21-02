import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { ThemeContextConsumer, ThemeContextProvider, ThemeContextState } from './contexts/ThemeContext';

class App extends React.Component<any, any> {
  render() {
    return (
      <ThemeContextProvider>
        <ThemeContextConsumer>
          {(context: Partial<ThemeContextState>) => (
            <div className={`container ${context.darkTheme ? 'container_dark' : ''}`}>
              <div className="body">
                <Header darkTheme={context.darkTheme ? context.darkTheme : false} />
                <Main darkTheme={context.darkTheme ? context.darkTheme : false} />
                <Footer darkTheme={context.darkTheme ? context.darkTheme : false} />
              </div>
            </div>
          )}
        </ThemeContextConsumer>
      </ThemeContextProvider>
    );
  }
}

export default App;
