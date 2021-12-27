import { GetApi } from './localProxyAPI';
import { API_POST_URL } from '../const/api/dummyapi.io';

export const getPost = (id: string) => GetApi(API_POST_URL.concat('/').concat(id));
// export const getPost = (id: string) => GetApi(API_POST_URL.concat('/').concat(API_ID_URL).concat('/').concat(id));
