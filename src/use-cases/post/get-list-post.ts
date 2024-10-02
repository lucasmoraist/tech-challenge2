import { IPostRepository } from "@/repositories/post.repository.interface";
import { PostListType } from "@/domain/types/post-list-type";
import { postSummary } from "@/domain/types/post-summary";

export class GetListPostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async handler(page: number, limit: number): Promise<postSummary> {
    return this.postRepository.getList(page, limit);
  }
}
