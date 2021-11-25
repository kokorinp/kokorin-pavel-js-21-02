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
