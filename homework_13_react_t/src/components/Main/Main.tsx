import React from "react";
import "./Main.css";
import Filter from "../Filter/Filter";
import Content from "../Content/Content";

class Main extends React.Component<any, any> {
  render() {
    return (
      <main className="main">
        <aside className="main__left">
          <Filter />
        </aside>

        <div className="main__right">
          <Content />
        </div>
      </main>
    );
  }
}

export default Main;
