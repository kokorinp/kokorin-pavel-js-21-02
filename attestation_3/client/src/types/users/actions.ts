import Action from "../action";
import { UserPreview } from "../api/api";

export interface UsersAction extends Action {
  users?: Array<UserPreview>;
  total?: number;
  page?: number;
  limit?: number;
}

export interface UsersActionFunc {
  (page: number, limit: number): UsersAction;
}
