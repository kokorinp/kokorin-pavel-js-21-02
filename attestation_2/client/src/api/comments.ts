import { GetApi } from './localProxyAPI';
import { API_COMMENT_URL, API_POST_URL } from '../const/api/dummyapi.io';

export const getCommetsByPost = (id: string, page?: number, limit?: number) =>
  GetApi(API_POST_URL.concat('/').concat(id).concat('/').concat(API_COMMENT_URL), page || 0, limit || 50);
