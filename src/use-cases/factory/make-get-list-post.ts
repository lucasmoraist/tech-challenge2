import { PostRepository } from "@/repositories/pg/post.repository";
import { GetListPostUseCase } from "../post/get-list-post";

export function makeGetListPostUseCase() {
  const postRepository = new PostRepository();
  const getListPostUseCase = new GetListPostUseCase(postRepository);

  return getListPostUseCase;
}
