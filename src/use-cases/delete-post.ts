import { IPost } from "@/entities/models/post.interface";
import { IPostRepository } from "@/repositories/post.repository.interface";

export class DeletePostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async handler(postId: string): Promise<IPost | null> {
    return this.postRepository.deletePost(postId);
  }
}
