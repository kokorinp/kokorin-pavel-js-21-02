import React from "react";
import "./Footer.css";
import SwitchThem from "../SwitchThem/SwitchThem";

class Footer extends React.Component<any, any> {
  render() {
    return (
      <footer className="footer">
        <div className="footer__contact">Контакты</div>
        <SwitchThem />
        <div className="footer__copyright">&copy; 2021 ИП Рыбов О.А.</div>
      </footer>
    );
  }
}

export default Footer;
