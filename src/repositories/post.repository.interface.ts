import { Post } from "@/domain/entities/post.entity";
import { PostSearchType } from "@/domain/types/post-search-type";
import { postSummary } from "@/domain/types/post-summary";
import { postTeacherSummary } from "@/domain/types/post-teacher-summary-type";
import { PostTeacherType } from "@/domain/types/post-teacher.type";
import { PostUpdateType } from "@/domain/types/post-update.type";

export interface IPostRepository {
  getAll(page: number, limit: number): Promise<postTeacherSummary>;
  getList(page: number, limit: number): Promise<postSummary>;
  getOne(postId: string): Promise<PostTeacherType | null>;
  search(term: string): Promise<PostSearchType[] | []>;
  create(post: Post): Promise<Post>;
  updatePost(postId: string, post: PostUpdateType): Promise<Post | null>;
  deletePost(postId: string): Promise<Post | null>;
}
