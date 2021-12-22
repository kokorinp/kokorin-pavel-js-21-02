import { UserFullType } from "../api/api";

export interface UserState extends UserFullType {
  edit?: boolean;
  dateOfBirthRaw?: string;
  registerDateRaw?: string;
}
