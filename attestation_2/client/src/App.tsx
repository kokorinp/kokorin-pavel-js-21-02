import React, { ReactElement } from "react";

import "./App.scss";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import {
  ThemeContext,
  ThemeContextProvider,
  ThemeContextState,
} from "./contexts/ThemeContext";
import Preloader from "./components/Preloader/Preloader";
import Errormsg from "./components/Errormsg/Errormsg";
import PostModal from "./components/PostModal/PostModal";
import UserEditModal from "./components/UserEditModal/UserEditModal";

const App = (): ReactElement => (
  <ThemeContextProvider>
    <ThemeContext.Consumer>
      {(context: Partial<ThemeContextState>) => (
        <div
          className={`container ${context.darkTheme ? "container_dark" : ""}`}
        >
          <div className="body">
            <BrowserRouter>
              <Switch>
                <Route path="/:link">
                  <Header />
                  <Main />
                  <Footer />
                </Route>
                <Redirect to="/users" />
              </Switch>
            </BrowserRouter>
          </div>
          <PostModal />
          <UserEditModal />
          <Preloader />
          <Errormsg />
        </div>
      )}
    </ThemeContext.Consumer>
  </ThemeContextProvider>
);

export default App;
