import { IPostRepository } from "@/repositories/post.repository.interface";
import { PostSearchType } from "@/types/post/post-search-type";

export class SearchPostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async handler(term: string): Promise<PostSearchType[] | []> {
    return this.postRepository.search(term);
  }
}
