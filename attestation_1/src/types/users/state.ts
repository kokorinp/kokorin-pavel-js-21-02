import { UserPreview } from "../api/api";

export interface UsersState {
  error?: string;
  edit?: boolean;
  users: Array<UserPreview>;
  page: number;
  limit: number;
  total: number;
}
