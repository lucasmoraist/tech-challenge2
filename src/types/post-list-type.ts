import { Post } from "@/entities/post.entity";

export type PostListType = Pick<Post, "id" | "title" | "createdAt">;
