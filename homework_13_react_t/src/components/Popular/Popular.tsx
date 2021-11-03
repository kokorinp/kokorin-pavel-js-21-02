import React from "react";
import "./Popular.css";
import PopularItem from "./PopularItem";
import { apiPopulars } from "../../api-fake/api";
import { InterfaceApiPopulars } from "../../api-fake/api";

class Popular extends React.Component<any, any> {
  render() {
    return (
      <div className="popular">
        <div className="popular__title">
          <h3 className="popular__title-text">Популярные</h3>
        </div>
        <div className="popular__row">
          {apiPopulars.status === "ok"
            ? apiPopulars.result.map((e: InterfaceApiPopulars) => (
                <PopularItem
                  name={e.name}
                  key={e.id}
                  id={e.id}
                  url={e.url}
                  img={e.img}
                />
              ))
            : "Ошибка запроса данных"}
        </div>
      </div>
    );
  }
}

export default Popular;
