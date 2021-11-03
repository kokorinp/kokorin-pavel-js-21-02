import React from "react";
import "./Cats.css";
import { apiCats } from "../../api-fake/api";
import { InterfaceApiCat } from "../../api-fake/api";

import CatsItem from "./CatsItem";

class Cats extends React.Component<any, any> {
  render() {
    return (
      <div className="cats">
        {apiCats.status === "ok"
          ? apiCats.result.map((e: InterfaceApiCat) => (
              <CatsItem
                title={e.title}
                id={e.id}
                url={e.url}
                text={e.text}
                key={e.id}
              />
            ))
          : "Ошибка запроса данных!"}
      </div>
    );
  }
}

export default Cats;
