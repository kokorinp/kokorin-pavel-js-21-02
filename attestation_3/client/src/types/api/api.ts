export interface ListResponseType<T> {
  data: Array<T>;
  total: number;
  page: number;
  limit: number;
  error?: string;
}

export interface UserPreview {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  error?: string;
  fullname?: string;
}

export interface ListResponseTypeUserPreview extends ListResponseType<UserPreview> {}

export interface LocationType {
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  timezone?: string;
}

export interface UserFullType {
  id?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  email?: string;
  dateOfBirth?: string;
  registerDate?: string;
  dateOfBirthRaw?: string;
  registerDateRaw?: string;
  phone?: string;
  picture?: string;
  location?: LocationType;
  error?: string;
  data?: any;
  fullname?: string;
}

export interface ResponseError {
  error: string;
}

// ----------------------- POST ----------------------------------
export interface PostPreview {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: Array<string>;
  publishDate: string;
  owner: UserPreview;
  error?: string;
}

export interface ListResponseTypePostPreview extends ListResponseType<PostPreview> {}

export interface PostFullType {
  id?: string;
  text?: string;
  image?: string;
  likes?: number;
  link?: string;
  tags?: Array<string>;
  publishDate?: string;
  owner?: UserPreview;
  error?: string;
}

// ----------- comments ---------------------

export interface CommentFullType {
  id?: string;
  message?: string; // max 500
  owner?: UserPreview;
  post?: string;
  publishDate?: string;
  error?: string;
}

export interface ListResponseTypeComments extends ListResponseType<CommentFullType> {}
