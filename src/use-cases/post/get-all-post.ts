import { IPostRepository } from "@/repositories/post.repository.interface";

export class GetAllPostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async handler(page: number, limit: number) {
    return this.postRepository.getAll(page, limit);
  }
}
