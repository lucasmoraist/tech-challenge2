import { Post } from "@/entities/post.entity";
import { IPostRepository } from "@/repositories/post.repository.interface";

export class CreatePostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async handler(post: Post): Promise<Post> {
    return this.postRepository.create(post);
  }
}
