import { IPostRepository } from "@/repositories/post.repository.interface";
import { PostListType } from "@/types/post-list-type";

export class GetListPostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async handler(page: number, limit: number): Promise<PostListType[] | []> {
    return this.postRepository.getList(page, limit);
  }
}
