import {
  ListResponseTypeUserPreview,
  ResponseError,
  UserFullType,
} from "../types/types";
import {
  API_GET_LIST_USERS,
  APP_ID_FIELD,
  METHOD_GET,
  PAGE_FIELD,
  LIMIT_FIELD,
  APP_TOKEN,
  API_BASE_URL,
} from "../const/const";

const doGetRequest = <T>(
  path: string,
  callback: (resp: T) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void,
  searchParams?: Record<string, any>
) => {
  const url = new URL(path, API_BASE_URL);
  searchParams &&
    Object.entries(searchParams).forEach((params) => {
      url.searchParams.append(params[0], params[1].toString());
    });
  // url.search = new URLSearchParams(searchParams).toString();
  fetch(url.toString(), {
    method: METHOD_GET,
    headers: new Headers({
      [APP_ID_FIELD]: APP_TOKEN,
    }),
  })
    .then((resp) => resp.json())
    .then(callback)
    .catch(errorCallback)
    .finally(finalCallback);
};

export const getListUsers = (
  page: number,
  limit: number,
  callback: (resp: ListResponseTypeUserPreview) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void
) => {
  doGetRequest(API_GET_LIST_USERS, callback, errorCallback, finalCallback, {
    [PAGE_FIELD]: page,
    [LIMIT_FIELD]: limit,
  });
};

export const getUserById = (
  id: string,
  callback: (resp: UserFullType) => void,
  errorCallback?: (resp: ResponseError) => void,
  finalCallback?: () => void
) => {
  doGetRequest(
    `${API_GET_LIST_USERS}/${id}`,
    callback,
    errorCallback,
    finalCallback
  );
};

/*
export const getListUsers = (
  page: number,
  limit: number,
  callback: (resp: ListResponseTypeUserPreview) => void,
  errorCallback?: (resp: any) => void
) =>
  fetch(
    API_GET_LIST_USERS.concat("?")
      .concat(LIMIT_FIELD)
      .concat("=")
      .concat(limit.toString())
      .concat("&")
      .concat(PAGE_FIELD)
      .concat("=")
      .concat(page.toString()),
    {
      method: METHOD_GET,
      headers: new Headers({
        [APP_ID_FIELD]: APP_TOKEN,
      }),
    }
  )
    .then((response) => response.json())
    .then((response: ListResponseTypeUserPreview) => callback(response))
    .catch(errorCallback);
*/
