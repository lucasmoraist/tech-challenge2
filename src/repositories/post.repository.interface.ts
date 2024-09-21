import { Post } from "@/entities/post.entity";
import { PostListType } from "@/types/post-list-type";
import { PostSearchType } from "@/types/post-search-type";
import { postSummary } from "@/types/post-summary";
import { postTeacherSummary } from "@/types/post-teacher-summary-type";
import { PostTeacherType } from "@/types/post-teacher.type";
import { PostUpdateType } from "@/types/post-update.type";

export interface IPostRepository {
  getAll(page: number, limit: number): Promise<postTeacherSummary>;
  getList(page: number, limit: number): Promise<postSummary>;
  getOne(postId: string): Promise<PostTeacherType | null>;
  search(term: string): Promise<PostSearchType[] | []>;
  create(post: Post): Promise<Post>;
  updatePost(postId: string, post: PostUpdateType): Promise<Post | null>;
  deletePost(postId: string): Promise<Post | null>;
}
