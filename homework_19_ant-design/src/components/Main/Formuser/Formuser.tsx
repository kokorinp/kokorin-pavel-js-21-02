import React, { ReactElement, useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "./Formuser.css";
import useScrollToTop from "../../../hooks/useScrollToTop";
import { ResponseError, UserFullType } from "../../../types/types";
import { getUserById } from "../../../api/api";
import { ThemeContext } from "../../../contexts/ThemeContext";

interface ParamsType {
  id: string;
}

const Formuser = (): ReactElement => {
  const [user, setUser] = useState({} as UserFullType);
  const [loading, setLoading] = useState(true);
  const params = useParams<ParamsType>();
  const history = useHistory();
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    setLoading(true);
    getUserById(
      params.id,
      setUser,
      ({ error }: ResponseError) => console.error(error),
      () => setLoading(false)
    );
  }, []);

  const formatDate = (s: string): string => {
    const d: Date = new Date(s);
    const day: string =
      d.getDate() < 10
        ? "0".concat(d.getDate().toString())
        : d.getDate().toString();
    const month: string =
      d.getMonth() < 10
        ? "0".concat(d.getMonth().toString())
        : d.getMonth().toString();
    return day
      .concat(".")
      .concat(month)
      .concat(".")
      .concat(d.getFullYear().toString());
  };

  const renderLocation = (): ReactElement => {
    if (user.location) {
      return (
        <section>
          <p>
            <strong>Location</strong>
          </p>
          <p>Country: {user.location.country}</p>
          <p>City: {user.location.city}</p>
          <p>State: {user.location.state}</p>
          <p>Street: {user.location.street}</p>
          <p>Timezone: {user.location.timezone}</p>
        </section>
      );
    }
    return <span />;
  };

  useScrollToTop();

  const renderFormUser = (): ReactElement => (
    <div
      className={`form_user ${themeContext.darkTheme ? "form_user_dark" : ""}`}
    >
      <div className="form_user__img">
        <div
          className={`form_user__img__wrapper ${
            themeContext.darkTheme ? "form_user__img__wrapper_dark" : ""
          }`}
        >
          <img
            className="form_user__img__img"
            src={user.picture}
            alt={`${user.title} ${user.firstName} ${user.lastName}`}
          />
        </div>
      </div>
      <div className="form_user__text">
        <p>User_ID: {user.id}</p>
        <p>Name: {`${user.title}. ${user.firstName} ${user.lastName}`}</p>
        <p>Gender: {user.gender}</p>
        <p>Born date: {formatDate(user.dateOfBirth as string)}</p>
        <p>Register date: {formatDate(user.registerDate as string)}</p>
        <p>Phone: {user.phone}</p>
        {renderLocation()}
      </div>
    </div>
  );

  return (
    <div>
      <div className="button_back">
        <button
          className={`button_back__button ${
            themeContext.darkTheme ? "button_back__button_dark" : ""
          }`}
          type="button"
          onClick={history.goBack}
        >
          Назад
        </button>
      </div>
      {loading ? "Идёт загрузка..." : renderFormUser()}
    </div>
  );
};

export default Formuser;
