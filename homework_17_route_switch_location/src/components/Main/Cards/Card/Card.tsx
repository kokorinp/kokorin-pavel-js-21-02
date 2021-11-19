import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import UserNameWithHelper from "../../../../wrappers/UserNameWithHelper/UserNameWithHelper";
import { ThemeContext } from "../../../../contexts/ThemeContext";

interface Props {
  img: string;
  img_alt: string;
  name: string;
  id: string;
}

const Card = ({ img, img_alt, name, id }: Props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={`card ${themeContext.darkTheme ? "card_dark" : ""}`}>
      <div
        className={`card__img_wrapper ${
          themeContext.darkTheme ? "card__img_wrapper_dark" : ""
        }`}
      >
        <img className="card__img" src={img} alt={img_alt} />
      </div>
      <div className="card__user_name">
        <UserNameWithHelper
          user_id={id}
          darkTheme={themeContext.darkTheme ? themeContext.darkTheme : false}
        >
          <Link to={`/user/${id}`} className="card__user_name__link">
            {name}
          </Link>
        </UserNameWithHelper>
      </div>
    </div>
  );
};

export default Card;
