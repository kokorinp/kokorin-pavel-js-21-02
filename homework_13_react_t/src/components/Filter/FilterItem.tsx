import React from "react";
import "./FilterItem.css";
import FilterItemInput from "./FilterItemInput";
import { interfaceApiFilters } from "../../api-fake/api";

class FilterItem extends React.Component<any, any> {
  render() {
    return (
      <div className="filter__item" id={this.props.id}>
        <p className="filter__title">{this.props.name}</p>
        <div className="filter__inputs">
          {this.props.filters.map((e: interfaceApiFilters) => {
            return <FilterItemInput key={e.id} id={e.id} name={e.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default FilterItem;
