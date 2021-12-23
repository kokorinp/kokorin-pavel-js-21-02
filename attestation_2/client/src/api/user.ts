import { GetApi } from './localProxyAPI';
import { API_USER_URL } from '../const/api/dummyapi.io';

export const getUser = (id: string) => GetApi(API_USER_URL.concat('/').concat(id));
// export const getUser = (id: string) => GetApi(API_USER_URL.concat('/').concat(API_ID_URL).concat('/').concat(id));
