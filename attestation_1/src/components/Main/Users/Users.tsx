import React, { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { State } from "../../../types/state";
import { UsersState } from "../../../types/users/state";
import { usersLoadAction } from "../../../actions/users";
import Paginator from "../../Paginator/Paginator";
import Cards from "./Cards/Cards";

import "./Users.scss";
import useScrollToTop from "../../../hooks/useScrollToTop";

interface Props {
  users: UsersState;
  getUsers: (page: number, limit: number) => void;
}

const Users = ({ users, getUsers }: Props): ReactElement => {
  // console.log(users);
  const setNewPage = (newp: number): void => {
    getUsers(newp, users.limit);
  };

  const setNewLimit = (newl: number): void => {
    getUsers(0, newl);
  };

  useEffect(() => {
    // getUsers(users.page, users.limit);
    getUsers(-1, -1);
  }, []);

  // console.group("component ListUsers");
  // console.log(users);
  // console.groupEnd();
  useScrollToTop();
  return (
    <div className="users">
      <Cards ListUsers={users.users} />
      <Paginator
        key={users.limit + users.total + users.page}
        page={users.page}
        limit={users.limit}
        total={users.total}
        setNewPage={setNewPage}
        setNewLimit={setNewLimit}
      />
    </div>
  );
};

export default connect(
  (state: State) => ({
    users: state.users,
  }),
  (dispatch: Dispatch) => ({
    getUsers: bindActionCreators(usersLoadAction, dispatch),
  })
)(Users);
