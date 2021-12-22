import { GetApi } from './dummyapi.io';
import { API_USER_ID_URL, API_USER_URL } from '../const/api/dummyapi.io';

export const getUser = (id: string) => GetApi(API_USER_URL.concat('/').concat(API_USER_ID_URL).concat('/').concat(id));
