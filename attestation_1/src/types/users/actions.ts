import Action from "../action";
import { UserPreview } from "../api/api";

export interface UsersAction extends Action {
  avatar?: Blob;
  users?: Array<UserPreview>;
  id?: string;
  total?: number;
  page?: number;
  limit?: number;
  error?: string;
  edit?: boolean;
}

export interface UsersActionFunc {
  (page: number, limit: number): UsersAction;
}
