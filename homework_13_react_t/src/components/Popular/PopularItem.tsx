import React from "react";
import "./PopularItem.css";
import gfish from "../../img/Green_Fish_Icon_128.png";

class PopularItem extends React.Component<any, any> {
  render() {
    return (
      <div
        className="popular__item popular__item-animation"
        data-fishid={this.props.id}
      >
        <div className="popular__img-wrapper">
          <img
            src={
              this.props.img && this.props.img !== "" ? this.props.img : gfish
            }
            className="popular__img"
            alt="fish"
          />
        </div>
        <div className="popular__link">
          <a href={this.props.url} className="popular__link-a">
            {this.props.name}
          </a>
          <button
            className="popular__link-button"
            type="button"
            data-fishid={this.props.id}
          >
            Купить
          </button>
        </div>
      </div>
    );
  }
}

export default PopularItem;
