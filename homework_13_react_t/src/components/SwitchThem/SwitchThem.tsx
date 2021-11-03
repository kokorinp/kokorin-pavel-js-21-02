import React from "react";
import "./SwitchThem.css";
import "./SwitchActiv";

class SwitchThem extends React.Component<any, any> {
  render() {
    return (
      <div className="footer__switch-them">
        <input
          className="switch-them__input"
          type="checkbox"
          id="switch-them"
        />
        <label className="switch-them__label" htmlFor="switch-them">
          тёмная тема
        </label>
      </div>
    );
  }
}

export default SwitchThem;
