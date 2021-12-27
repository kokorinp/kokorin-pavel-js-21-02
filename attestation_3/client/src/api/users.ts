import { GetApi } from './localProxyAPI';
import { API_LIST_URL, API_USER_URL } from '../const/api/dummyapi.io';

export const getUsers = (page: number, limit?: number) =>
  GetApi(API_USER_URL.concat('/').concat(API_LIST_URL), page, limit || 20);
