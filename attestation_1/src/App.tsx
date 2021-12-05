import React, { ReactElement } from "react";

import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import {
  ThemeContext,
  ThemeContextProvider,
  ThemeContextState,
} from "./contexts/ThemeContext";
import Preloader from "./components/Preloader/Preloader";

const App = (): ReactElement => (
  <ThemeContextProvider>
    <ThemeContext.Consumer>
      {(context: Partial<ThemeContextState>) => (
        <div
          className={`container ${context.darkTheme ? "container_dark" : ""}`}
        >
          <Preloader />
          <div className="body">
            <BrowserRouter>
              <Route path="/">
                <Header />
                <Main />
                <Footer />
              </Route>
            </BrowserRouter>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  </ThemeContextProvider>
);

export default App;
