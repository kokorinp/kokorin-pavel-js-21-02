export interface ListResponseType<T> {
  data: Array<T>;
  total: number;
  page: number;
  limit: number;
}

export interface UserPreview {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface ListResponseTypeUserPreview
  extends ListResponseType<UserPreview> {}

export interface LocationType {
  // [key: string]: string;
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
  phone?: string;
  picture?: string;
  location?: LocationType;
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
}

export interface ListResponseTypePostPreview
  extends ListResponseType<PostPreview> {}
