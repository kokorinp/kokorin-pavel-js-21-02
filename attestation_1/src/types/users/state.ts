import { UserPreview } from "../api/api";

export interface UsersState {
  users: Array<UserPreview>;
  page: number;
  limit: number;
  total: number;
}
