import Action from "../action";
import { LocationType } from "../api/api";

export interface UserAction extends Action {
  edit?: boolean;
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

export interface UserActionFunc {
  (id: string): UserAction;
}
