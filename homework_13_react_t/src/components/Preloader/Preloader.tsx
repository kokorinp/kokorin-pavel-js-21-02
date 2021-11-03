import React from "react";
import gfish from "../../img/Green_Fish_Icon_128.png";
import "./HeaderTitle.css";

export class Preloader extends React.Component<any, any> {
  render() {
    return (
      <div className="preloader">
        <img
          className="preloader__fish"
          src={gfish}
          alt="fish preloader"
          title="fish preloader"
        />
      </div>
    );
  }
}

export default Preloader;
