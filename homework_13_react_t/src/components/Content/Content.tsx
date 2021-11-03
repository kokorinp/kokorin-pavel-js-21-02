import React from "react";
//import "./Content.css";
import ContentTitle from "./ContentTitle";
import Cats from "../Cats/Cats";
import Popular from "../Popular/Popular";

class Content extends React.Component<any, any> {
  render() {
    return (
      <div>
        <ContentTitle
          title="Рыбы на любой вкус!!!"
          text="Мы продаём рыбов, а не только показываем!"
        />
        <Cats />
        <Popular />
      </div>
    );
  }
}

export default Content;
