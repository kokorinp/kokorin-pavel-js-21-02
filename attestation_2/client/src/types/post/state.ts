// import { UserPreview } from "../api/api";

import { PostFullType } from "../api/api";

export interface PostState extends PostFullType {
  isLoading?: boolean;
}
// export interface PostState {
//   id: string;
//   text: string;
//   image: string;
//   likes: number;
//   link: string;
//   tags: Array<string>;
//   publishDate: string;
//
//   isLoading: boolean;
//   // owner: UserPreview | {};
//   owner?: UserPreview;
// }
