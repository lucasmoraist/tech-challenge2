import { PostRepository } from "@/repositories/pg/post.repository";
import { CreatePostUseCase } from "@/use-cases/create-post";
import { makeCreatePostUseCase } from "@/use-cases/factory/make-create-post";

jest.mock("@/repositories/pg/post.repository", () => ({
  PostRepository: jest.fn(),
}));

describe("makeCreatePostUseCase", () => {
  it("Should create an instance of CreatePostUseCase with a PostRepository", () => {
    const postRepository = new PostRepository();
    const createPostUseCase = makeCreatePostUseCase();

    expect(createPostUseCase).toBeInstanceOf(CreatePostUseCase);
  });
});
