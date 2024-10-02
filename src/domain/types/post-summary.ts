import { Post } from "@/domain/entities/post.entity";

export type postSummary = {
  currentPage: number | null;
  itemsPerPage: number | null;
  totalNumberOfPages: number | null;
  posts?: Post[];
};
