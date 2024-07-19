import { IPostUpdate } from "@/entities/models/post.update.interface";
import { makeGetOnePostUseCase } from "@/use-cases/factory/make-get-one-post";

export async function updatePostHander(
  postId: string,
  { title, content }: IPostUpdate
): Promise<IPostUpdate> {
  const getOnePostUseCase = makeGetOnePostUseCase();
  const originalPost = await getOnePostUseCase.handler(postId);

  let updatedTitle = title;
  let updatedContent = content;

  if (title === undefined || title === "") updatedTitle = originalPost?.title;
  if (content === undefined || title === "")
    updatedContent = originalPost?.content;

  let post = { title: updatedTitle, content: updatedContent };

  return post;
}
