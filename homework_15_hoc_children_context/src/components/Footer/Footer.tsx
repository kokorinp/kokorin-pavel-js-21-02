import React, { ReactNode } from 'react';

import './Footer.css';

interface Props {
  darkTheme: boolean;
}

interface State {}

class Footer extends React.Component<Props, State> {
  render(): ReactNode {
    return (
      <footer className={`footer ${this.props.darkTheme ? 'footer_dark' : ''}`}>
        <div className="footer__title">dummyapi</div>
        <div className="footer__copyright">&copy; 2021 Кокорин П.В.</div>
      </footer>
    );
  }
}

export default Footer;
