import React from "react";

import "./Cards.scss";
import Card from "./Card/Card";
import { UserPreview } from "../../../../types/api/api";

interface Props {
  ListUsers: Array<UserPreview>;
}

const Cards = ({ ListUsers }: Props) => (
  <div className="cards">
    {ListUsers.map((e) => (
      <Card
        key={e.id}
        id={e.id}
        img={e.picture}
        img_alt={`${e.title}. ${e.firstName} ${e.lastName}`}
        name={`${e.title}. ${e.firstName} ${e.lastName}`}
      />
    ))}
  </div>
);

export default Cards;
