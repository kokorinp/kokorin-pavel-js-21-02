import {
  API_BASE_URL,
  APP_ID_FIELD,
  APP_TOKEN,
  METHOD_GET,
  METHOD_POST,
  METHOD_PUT,
} from "../const/api/dummyapi.io";

export const GetApi = (path: string, searchParams?: Record<string, any>) => {
  const url = new URL(path, API_BASE_URL);
  searchParams &&
    Object.entries(searchParams).forEach((params) => {
      url.searchParams.append(params[0], params[1].toString());
    });
  return fetch(url.toString(), {
    method: METHOD_GET,
    headers: new Headers({
      [APP_ID_FIELD]: APP_TOKEN,
    }),
  }).then((resp: Response) => resp.json());
};

export const PostApi = (path: string, data: Record<string, any>) => {
  const url = new URL(path, API_BASE_URL);
  return fetch(url.toString(), {
    method: METHOD_POST,
    headers: new Headers({
      [APP_ID_FIELD]: APP_TOKEN,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  }).then((resp: Response) => resp.json());
};

// один в один как post разница в методе
export const PutApi = (path: string, data: Record<string, any>) => {
  const url = new URL(path, API_BASE_URL);
  return fetch(url.toString(), {
    method: METHOD_PUT,
    headers: new Headers({
      [APP_ID_FIELD]: APP_TOKEN,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  }).then((resp: Response) => resp.json());
};
