import React, { ReactElement, useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { useHistory, useParams } from "react-router";
import "./User.scss";
import useScrollToTop from "../../../hooks/useScrollToTop";
import { ResponseError, UserFullType } from "../../../types/api/api";
import { getUserById } from "../../../api/api";
import { ThemeContext } from "../../../contexts/ThemeContext";

import { State } from "../../../types/state";

import { userLoadAction } from "../../../actions/user";
import { UserState } from "../../../types/user/state";

interface ParamsType {
  id: string;
}

interface Props {
  user: UserState;
  loadUser: (newid: string) => void;
}

const User = ({ user, loadUser }: Props): ReactElement => {
  const themeContext = useContext(ThemeContext);
  console.log(user);

  const params = useParams<ParamsType>();

  useEffect(() => {
    // getUsers(users.page, users.limit);
    loadUser(params.id);
  }, []);

  useScrollToTop();
  return <div>a</div>;
};

export default connect(
  (state: State) => ({
    user: state.user,
  }),
  (dispatch: Dispatch) => ({
    loadUser: bindActionCreators(userLoadAction, dispatch),
  })
)(User);
