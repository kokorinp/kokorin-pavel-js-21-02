import { ListResponseTypeUserPreview } from '../types/types';
import { API_GET_LIST_USERS, APP_ID_FIELD, METHOD_GET, PAGE_FIELD, LIMIT_FIELD, APP_TOKEN } from '../const/const';

export const getListUsers = (
  page: number,
  limit: number,
  callback: (resp: ListResponseTypeUserPreview) => void,
  errorCallback?: (resp: any) => void
) =>
  fetch(
    API_GET_LIST_USERS.concat('?')
      .concat(LIMIT_FIELD)
      .concat('=')
      .concat(limit.toString())
      .concat('&')
      .concat(PAGE_FIELD)
      .concat('=')
      .concat(page.toString()),
    {
      method: METHOD_GET,
      headers: new Headers({
        [APP_ID_FIELD]: APP_TOKEN
      })
    }
  )
    .then((response) => response.json())
    .then((response: ListResponseTypeUserPreview) => callback(response))
    .catch(errorCallback);
