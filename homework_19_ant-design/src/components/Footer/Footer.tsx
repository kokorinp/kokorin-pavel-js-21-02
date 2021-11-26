import React, { useContext } from "react";

import "./Footer.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const Footer = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <footer className={`footer ${themeContext.darkTheme ? "footer_dark" : ""}`}>
      <div className="footer__title">dummyapi</div>
      <div className="footer__copyright">&copy; 2021 Кокорин П.В.</div>
    </footer>
  );
};

export default Footer;
