import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import {
  ThemeContext,
  ThemeContextProvider,
  ThemeContextState,
} from "./contexts/ThemeContext";

const App = () => (
  <ThemeContextProvider>
    <ThemeContext.Consumer>
      {(context: Partial<ThemeContextState>) => (
        <div
          className={`container ${context.darkTheme ? "container_dark" : ""}`}
        >
          <div className="body">
            <Header />
            <Main />
            <Footer />
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  </ThemeContextProvider>
);

export default App;
