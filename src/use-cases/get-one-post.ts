import { IPost } from "@/entities/models/post.interface";
import { ITeacher } from "@/entities/models/teacher.interface";
import { IPostRepository } from "@/repositories/post.repository.interface";
import { ResourceNotFoundError } from "./errors/resource-not-fount-error";

export class GetOnePostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async handler(postId: string): Promise<(IPost & ITeacher) | null> {
    const post = await this.postRepository.getOne(postId);
    if (!post) throw new ResourceNotFoundError();
    return post;
  }
}
