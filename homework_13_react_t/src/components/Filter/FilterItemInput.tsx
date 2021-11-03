import React from "react";
//import "./FilterItemInput.css";

class FilterItemInput extends React.Component<any, any> {
  render() {
    return (
      <div className="filter__input-checkbox" data-id={this.props.id}>
        <input id={"ch" + this.props.id} type="checkbox" />
        <label htmlFor={"ch" + this.props.id}>{this.props.name}</label>
      </div>
    );
  }
}

export default FilterItemInput;
