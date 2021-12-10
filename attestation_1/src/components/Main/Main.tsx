import React, { ReactElement, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import User from "./User/User";
import "./Main.scss";
import Regform from "./Regform/Regform";
import Users from "./Users/Users";
import Posts from "./Posts/Posts";

const Main = (): ReactElement => (
  <main className="main">
    <Switch>
      <Route path="/posts">
        <h1 className="main__title">Посты</h1>
        <Posts />
      </Route>
      <Route path="/reg">
        <h1 className="main__title">Регистрация</h1>
        {/* <Regform /> */}
      </Route>
      <Route path="/user/:id">
        <h1 className="main__title">Пользователь</h1>
        <User />
      </Route>
      <Route path="/users">
        <h1 className="main__title">Пользователи</h1>
        <Users />
      </Route>
      <Redirect to="/users" />
    </Switch>
  </main>
);

export default Main;
