import { IPostRepository } from "@/repositories/post.repository.interface";

export class DeletePostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async handler(postId: string): Promise<any> {
    return this.postRepository.deletePost(postId);
  }
}
