import { Post } from "@/domain/entities/post.entity";

type PartialPost = Partial<Post>;

export type PostUpdateType = Pick<PartialPost, "title" | "content" | "urlImage">;
