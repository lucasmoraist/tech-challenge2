import { Post } from "@/domain/entities/post.entity";

export type PostSearchType = Pick<Post, "title">;
