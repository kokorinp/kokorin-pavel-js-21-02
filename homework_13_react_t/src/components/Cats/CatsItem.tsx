import React from "react";
import "./CatsItem.css";

class CatsItem extends React.Component<any, any> {
  render() {
    return (
      <div className="cats__item cats__item-animation" data-cat={this.props.id}>
        <a href={this.props.url}>{this.props.title}</a>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default CatsItem;
