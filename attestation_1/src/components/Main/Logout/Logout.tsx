import React, { ReactElement, useEffect } from "react";
import { useHistory } from "react-router";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { authLogoutAction } from "../../../actions/auth";

import "./Logout.scss";

interface Props {
  logout: () => void;
}

const Logout = ({ logout }: Props): ReactElement => {
  const history = useHistory();
  useEffect(() => {
    // выход
    logout();
    history.push("/users");
  }, []);

  return <></>;
};

export default connect(
  () => {},
  (dispatch: Dispatch) => ({
    logout: bindActionCreators(authLogoutAction, dispatch),
  })
)(Logout);
// export default Logout;
