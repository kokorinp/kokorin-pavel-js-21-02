import React from "react";
import "./Header.css";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Preloader from "../Preloader/Preloader";

export class Header extends React.Component<any, any> {
  render() {
    return (
      <header className="header">
        <HeaderTitle />
        <Preloader />
      </header>
    );
  }
}

export default Header;
