import { Post } from "@/entities/post.entity";

export type PostSearchType = Pick<Post, "title" | "content">;
