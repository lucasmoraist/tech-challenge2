import { Post } from "@/entities/post.entity";
import { PostListType } from "@/types/post-list-type";
import { PostSearchType } from "@/types/post-search-type";
import { PostTeacherType } from "@/types/post-teacher.type";
import { PostUpdateType } from "@/types/post-update.type";

export interface IPostRepository {
  getAll(page: number, limit: number): Promise<PostTeacherType[] | []>;
  getList(page: number, limit: number): Promise<PostListType[] | []>;
  getOne(postId: string): Promise<PostTeacherType | null>;
  search(term: string): Promise<PostSearchType[] | []>;
  create(post: Post): Promise<Post>;
  updatePost(postId: string, post: PostUpdateType): Promise<Post | null>;
  deletePost(postId: string): Promise<Post | null>;
}
