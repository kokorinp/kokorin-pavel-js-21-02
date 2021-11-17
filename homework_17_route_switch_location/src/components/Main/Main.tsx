import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Main.css";
import Paginator from "./Paginator/Paginator";
import Cards from "./Cards/Cards";
import Themeswitcher from "./Themeswitcher/Themeswitcher";
import { getListUsers } from "../../api/api";
import { ListResponseTypeUserPreview, UserPreview } from "../../types/types";

const Main = () => {
  const p: number = localStorage.getItem("page")
    ? Number.isNaN(localStorage.getItem("page"))
      ? 0
      : Number(localStorage.getItem("page"))
    : 0;
  const [page, setPage] = useState(p);

  const l: number = localStorage.getItem("limit")
    ? Number.isNaN(localStorage.getItem("limit"))
      ? 20
      : Number(localStorage.getItem("limit"))
    : 20;
  const [limit, setLimit] = useState(l);

  const t: number = localStorage.getItem("total")
    ? Number.isNaN(localStorage.getItem("total"))
      ? 99
      : Number(localStorage.getItem("total"))
    : 99;
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
      console.error
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
        <Switch>
          <Route path="/user">
            <h1 className="main__title">Пользователи</h1>
          </Route>
          <Route path="/">
            <h1 className="main__title">Главная</h1>
          </Route>
        </Switch>
      </BrowserRouter>
      <Cards ListUsers={ListUsers} />
      <Paginator
        page={page}
        limit={limit}
        total={total}
        setNewPage={setNewPage}
        setNewLimit={setNewLimit}
      />
      <Themeswitcher />
    </main>
  );
};

export default Main;
