import { GetApi } from './localProxyAPI';
import { API_LIST_URL, API_POST_URL, API_USER_URL } from '../const/api/dummyapi.io';

export const getPosts = (page: number, limit?: number) =>
  GetApi(API_POST_URL.concat('/').concat(API_LIST_URL), page, limit || 20);

export const getPostsByUser = (id: string, page?: number, limit?: number) =>
  GetApi(API_USER_URL.concat('/').concat(id).concat('/').concat(API_POST_URL), page || 0, limit || 6);
