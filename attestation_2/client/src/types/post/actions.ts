import Action from "../action";
import { UserPreview } from "../api/api";

export interface PostAction extends Action {
  id?: string;
  text?: string;
  image?: string;
  likes?: number;
  link?: string;
  tags?: Array<string>;
  publishDate?: string;
  owner?: UserPreview;

  isLoading?: boolean;
}

export interface PostActionFunc {
  (id: string): PostAction;
}
