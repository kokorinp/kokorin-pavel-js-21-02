import { PostApi } from './localProxyAPI';
import { API_REG_URL, API_USER_URL } from '../const/api/dummyapi.io';
import { UserFullType } from '../types/api/api';

export const regUser = (user: UserFullType) => PostApi(API_USER_URL.concat('/').concat(API_REG_URL), user);
