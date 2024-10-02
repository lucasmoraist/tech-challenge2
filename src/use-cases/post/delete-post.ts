import { Post } from "@/domain/entities/post.entity";
import { IPostRepository } from "@/repositories/post.repository.interface";

export class DeletePostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async handler(postId: string): Promise<Post | null> {
    return this.postRepository.deletePost(postId);
  }
}
