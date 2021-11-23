import React, { ReactElement, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Paginator from "./Paginator/Paginator";
import Cards from "./Cards/Cards";
import Themeswitcher from "./Themeswitcher/Themeswitcher";
import { getListUsers } from "../../api/api";
import {
  ListResponseTypeUserPreview,
  ResponseError,
  UserPreview,
} from "../../types/types";
import Formuser from "./Formuser/Formuser";
import "./Main.css";
import Menuapp from "./Menuapp/Menuapp";

const Main = (): ReactElement => {
  let p: number = 0;
  if (localStorage.getItem("page")) {
    if (Number.isNaN(localStorage.getItem("page"))) {
      p = 0;
    } else {
      p = Number(localStorage.getItem("page"));
    }
  }
  const [page, setPage] = useState(p);

  let l: number = 20;
  if (localStorage.getItem("limit")) {
    if (Number.isNaN(localStorage.getItem("limit"))) {
      l = 20;
    } else {
      l = Number(localStorage.getItem("limit"));
    }
  }
  const [limit, setLimit] = useState(l);

  let t: number = 99;
  if (localStorage.getItem("total")) {
    if (Number.isNaN(localStorage.getItem("total"))) {
      t = 99;
    } else {
      t = Number(localStorage.getItem("total"));
    }
  }
  const [total, setTotal] = useState(t);

  const [ListUsers, setListUsers] = useState([] as Array<UserPreview>);

  const getData = (): void => {
    getListUsers(
      page,
      limit,
      (resp: ListResponseTypeUserPreview) => {
        setLimit(resp.limit);
        setPage(resp.page);
        setTotal(resp.total);
        setListUsers(resp.data);
        localStorage.setItem("page", resp.page.toString());
        localStorage.setItem("limit", resp.limit.toString());
        localStorage.setItem("total", resp.total.toString());
      },
      ({ error }: ResponseError) => console.error(error)
    );
  };

  useEffect(() => {
    // Похож на componentDidMount
    getData();
    // return () => console.log("Форма размонтирована"); // Будет выполнено, по аналогии с componentWillUnmount
  }, []);

  useEffect(() => {
    getData();
  }, [limit, page]); // Выполнится при изменении значений, переданных, как элемент массива, во втором параметре

  const setNewPage = (newp: number): void => {
    setPage(newp);
  };

  const setNewLimit = (newl: number): void => {
    setPage(0);
    setLimit(newl);
  };

  return (
    <main className="main">
      <BrowserRouter>
        <Route path="/">
          <Menuapp />
          <Switch>
            <Route path="/reg">
              <h1 className="main__title">Регистрация</h1>
            </Route>
            <Route path="/user/:id">
              <h1 className="main__title">Пользователь</h1>
              <Formuser />
            </Route>
            <Route path="/user">
              <h1 className="main__title">Пользователи</h1>
              <Cards ListUsers={ListUsers} />
              <Paginator
                page={page}
                limit={limit}
                total={total}
                setNewPage={setNewPage}
                setNewLimit={setNewLimit}
              />
            </Route>
            <Redirect to="/user" />
          </Switch>
        </Route>
      </BrowserRouter>
      <Themeswitcher />
    </main>
  );
};

export default Main;
