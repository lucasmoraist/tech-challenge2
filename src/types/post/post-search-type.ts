import { Post } from "@/entities/post.entity";

export type PostSearchType = Pick<Post, "id" | "title" | "urlImage">;
