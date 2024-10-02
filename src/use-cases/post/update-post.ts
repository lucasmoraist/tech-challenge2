import { Post } from "@/domain/entities/post.entity";
import { IPostRepository } from "@/repositories/post.repository.interface";
import { PostUpdateType } from "@/domain/types/post-update.type";

export class UpdatePostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async handler(postId: string, post: PostUpdateType): Promise<Post | null> {
    return this.postRepository.updatePost(postId, post);
  }
}
