import { Post } from "@/domain/entities/post.entity";

export type PostListType = Pick<Post, "id" | "title" | "createdAt">;
