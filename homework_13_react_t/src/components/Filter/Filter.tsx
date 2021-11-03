import React from "react";
import "./Filter.css";
import FilterItem from "./FilterItem";
import { apiFilters, interfaceApiFiltersArr } from "../../api-fake/api";

class Filter extends React.Component<any, any> {
  render() {
    return (
      <div className="filter">
        {apiFilters.status === "ok"
          ? apiFilters.result.map((e: interfaceApiFiltersArr) => {
              return (
                <FilterItem
                  name={e.name}
                  key={e.id}
                  id={e.id}
                  filters={e.filters}
                />
              );
            })
          : "Нет данных"}
      </div>
    );
  }
}

export default Filter;
