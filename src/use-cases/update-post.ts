import { Post } from "@/entities/post.entity";
import { IPostRepository } from "@/repositories/post.repository.interface";
import { PostUpdateType } from "@/types/post/post-update.type";

export class UpdatePostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async handler(postId: string, post: PostUpdateType): Promise<Post | null> {
    return this.postRepository.updatePost(postId, post);
  }
}
