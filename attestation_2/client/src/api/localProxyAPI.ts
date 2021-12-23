import { API_BASE_URL, METHOD_GET, METHOD_POST, METHOD_PUT } from '../const/api/dummyapi.io';

export const GetApi = (path: string, page?: number, limit?: number) => {
  let url: string = API_BASE_URL.concat(path);
  // имутабельность? )
  let p: string = '';
  if (typeof page === 'number') {
    p = page.toString();
    if (page === 0) {
      p = '0';
    }
    url = url.concat('/').concat(p);
  }

  let l: string = '';
  if (limit) {
    l = limit.toString();
    if (limit === 0) {
      l = '0';
    }
    url = url.concat('/').concat(l);
  }

  // console.group('GET URL');
  // console.log(url);
  // console.groupEnd();

  return fetch(url, {
    method: METHOD_GET,
    // headers: new Headers({
    //   [APP_ID_FIELD]: APP_TOKEN,
    // }),
  }).then((resp: Response) => resp.json());
};

export const PostApi = (path: string, data: Record<string, any>) => {
  const url = new URL(path, API_BASE_URL);
  return fetch(url.toString(), {
    method: METHOD_POST,
    headers: new Headers({
      // [APP_ID_FIELD]: APP_TOKEN,
      'Content-Type': 'application/json',
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
      // [APP_ID_FIELD]: APP_TOKEN,
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(data),
  }).then((resp: Response) => resp.json());
};
