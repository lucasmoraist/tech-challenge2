import { PostRepository } from "@/repositories/pg/post.repository";
import { GetAllPostUseCase } from "../get-all-post";

export function makeFindAllPostUseCase() {
  const postRepository = new PostRepository();
  const getAllPostUseCase = new GetAllPostUseCase(postRepository);
  return getAllPostUseCase;
}
