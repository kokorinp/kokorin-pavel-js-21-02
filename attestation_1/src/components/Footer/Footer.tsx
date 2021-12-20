import React, { useContext } from "react";

import "./Footer.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import Themeswitcher from "./Themeswitcher/Themeswitcher";

const Footer = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <footer className={`footer ${themeContext.darkTheme ? "footer_dark" : ""}`}>
      <div className="footer__copyright">&copy; 2021 Кокорин П.В.</div>
      <Themeswitcher />
    </footer>
  );
};

export default Footer;
