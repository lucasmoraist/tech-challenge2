import { IPostRepository } from "@/repositories/post.repository.interface";
import { ResourceNotFoundError } from "./errors/resource-not-fount-error";
import { PostTeacherType } from "@/types/post-teacher.type";

export class GetOnePostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async handler(postId: string): Promise<PostTeacherType | null> {
    const post = await this.postRepository.getOne(postId);
    if (!post) {
      throw new ResourceNotFoundError();
    }
    return post;
  }
}
