import { postSummary } from "./post-summary";
import { PostTeacherType } from "./post-teacher.type";

export type postTeacherSummary = {
  currentPage: number | null;
  itemsPerPage: number | null;
  totalNumberOfPages: number | null;
  posts: PostTeacherType[];
};
