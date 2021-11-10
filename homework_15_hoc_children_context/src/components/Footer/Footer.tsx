import React, { ReactNode } from 'react';

import './Footer.css';

class Footer extends React.Component<{}, {}> {
  render(): ReactNode {
    return (
      <footer className="footer">
        <div className="footer__title">dummyapi</div>

        <div className="footer__copyright">&copy; 2021 Кокорин П.В.</div>
      </footer>
    );
  }
}

export default Footer;
