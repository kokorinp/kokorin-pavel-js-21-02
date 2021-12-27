import { UsersAction, UsersActionFunc } from '../types/users/actions';
import { USERS_LOAD, USERS_LOAD_SUCCESS } from '../const/users/actions';
import { ListResponseTypeUserPreview } from '../types/api/api';
import { getLimitInit, getPageInit, setToLocalStorage } from '../utils/PaginatorUtils';

export const usersLoadAction: UsersActionFunc = (page: number, limit: number) => {
  const p: number = page > -1 ? page : getPageInit('UsersPage');
  const l: number = limit > -1 ? limit : getLimitInit('UsersLimit');
  return {
    type: USERS_LOAD,
    page: p,
    limit: l,
  };
};

export const usersLoadActionSuccess = (resp: ListResponseTypeUserPreview): UsersAction => {
  setToLocalStorage('UsersPage', resp.page.toString());
  setToLocalStorage('UsersLimit', resp.limit.toString());
  setToLocalStorage('UsersTotal', resp.total.toString());

  return {
    type: USERS_LOAD_SUCCESS,
    total: resp.total,
    page: resp.page,
    limit: resp.limit,
    users: resp.data,
  };
};
