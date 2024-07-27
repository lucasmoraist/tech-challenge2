import { Post } from "@/entities/post.entity";

type PartialPost = Partial<Post>;

export type PostUpdateType = Pick<PartialPost, "title" | "content">;
