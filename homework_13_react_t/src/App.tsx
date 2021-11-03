import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

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
