import { PostRepository } from "@/repositories/pg/post.repository";
import { GetOnePostUseCase } from "../../post/get-one-post";

export function makeGetOnePostUseCase() {
  const postRepository = new PostRepository();
  const getOnePostUseCase = new GetOnePostUseCase(postRepository);
  return getOnePostUseCase;
}
