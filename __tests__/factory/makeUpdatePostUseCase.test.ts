import { PostRepository } from "@/repositories/pg/post.repository";
import { UpdatePostUseCase } from "@/use-cases/update-post";
import { makeUpdatePostUseCase } from "@/use-cases/factory/make-update-post";

jest.mock("@/repositories/pg/post.repository", () => ({
  PostRepository: jest.fn(),
}));

describe("makeUpdatePostUseCase", () => {
  it("Should create an instance of CreatePostUseCase with a PostRepository", () => {
    const postRepository = new PostRepository();
    const updatePostUseCase = makeUpdatePostUseCase();

    expect(updatePostUseCase).toBeInstanceOf(UpdatePostUseCase);
  });
});
