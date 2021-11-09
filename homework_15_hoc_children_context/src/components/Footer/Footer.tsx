import React from 'react';

import './Footer.css';

class Footer extends React.Component<any, any> {
  render() {
    return (
      <footer className="footer">
        <div className="footer__title">ToDoList</div>

        <div className="footer__copyright">&copy; 2021 Кокорин П.В.</div>
      </footer>
    );
  }
}

export default Footer;
