import { Moment } from "moment";

export interface ValuesFormType {
  firstName: string;
  lastName: string;
  dateOfBirth?: Moment;
  email: string;
  gender?: string;
  phone?: string;
  state?: string;
  street?: string;
  title?: string;
  city?: string;
  country?: string;
  timezone?: string;
  picture?: Array<{ response: string }>;
}

export interface ErrorFieldsType {
  errors: Array<any>;
  name: Array<any>;
}

export interface ErrorInfoType {
  errorFields: Array<ErrorFieldsType>;
  outOfDate: any;
  values: ValuesFormType;
}
