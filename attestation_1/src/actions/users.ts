import { UsersAction, UsersActionFunc } from "../types/users/actions";
import { USERS_LOAD, USERS_LOAD_SUCCESS } from "../const/users/actions";
import { ListResponseTypeUserPreview } from "../types/api/api";

const getPageInit = (): number => {
  if (localStorage.getItem("page")) {
    if (!Number.isNaN(localStorage.getItem("page"))) {
      return Number(localStorage.getItem("page"));
    }
  }
  return 0;
};

const getLimitInit = (): number => {
  if (localStorage.getItem("limit")) {
    if (!Number.isNaN(localStorage.getItem("limit"))) {
      return Number(localStorage.getItem("limit"));
    }
  }
  return 20;
};

// const getTotalInit = ():number => {
//   if (localStorage.getItem("total")) {
//     if (Number.isNaN(localStorage.getItem("total"))) {
//       return 99;
//     } else {
//       return Number(localStorage.getItem("total"));
//     }
//   }
//   return 99;
// }

export const usersLoadAction: UsersActionFunc = (
  page: number,
  limit: number
) => {
  const p: number = page > -1 ? page : getPageInit();
  const l: number = limit > -1 ? limit : getLimitInit();
  return {
    type: USERS_LOAD,
    page: p,
    limit: l,
  };
};

// console.group("Action USERS_LOAD");
// console.log(page);
// console.log(pageSize);
// console.groupEnd();

export const usersLoadActionSuccess = (
  resp: ListResponseTypeUserPreview
): UsersAction => {
  localStorage.setItem("limit", resp.limit.toString());
  localStorage.setItem("page", resp.page.toString());
  localStorage.setItem("total", resp.total.toString());
  return {
    type: USERS_LOAD_SUCCESS,
    total: resp.total,
    page: resp.page,
    limit: resp.limit,
    users: resp.data,
  };
};
