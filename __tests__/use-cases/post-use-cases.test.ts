import { GetOnePostUseCase } from "@/use-cases/post/get-one-post";
import { GetAllPostUseCase } from "@/use-cases/post/get-all-post";
import { PostRepositoryMock } from "../mocks/post-repository-mock";
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-fount-error";
import { CreatePostUseCase } from "@/use-cases/post/create-post";
import { Post } from "@/entities/post.entity";
import { UpdatePostUseCase } from "@/use-cases/post/update-post";
import { PostUpdateType } from "@/types/post/post-update.type";
import { DeletePostUseCase } from "@/use-cases/post/delete-post";
import { GetListPostUseCase } from "@/use-cases/post/get-list-post";
import { SearchPostUseCase } from "@/use-cases/post/search-post";

describe("Post Use Cases", () => {
  it("GetAllPostUseCase - Should return a valid list of posts", async () => {
    const postRepository = new PostRepositoryMock();
    const getAllPostUseCase = new GetAllPostUseCase(postRepository);

    const result = await getAllPostUseCase.handler(1, 10);

    expect(result).toBeInstanceOf(Object);
    expect(result).toBeTruthy();
  });

  it("GetListPostUseCase - Should return a valid list of posts", async () => {
    const postRepository = new PostRepositoryMock();
    const getListPostUseCase = new GetListPostUseCase(postRepository);

    const result = await getListPostUseCase.handler(1, 10);

    expect(result).toBeTruthy();
    expect(result).toBeInstanceOf(Object);
  });

  it("GetOnePostUseCase - Should return one post by ID", async () => {
    const postRepository = new PostRepositoryMock();
    const getOnePostUseCase = new GetOnePostUseCase(postRepository);

    const result = await getOnePostUseCase.handler(
      "1ec7583a-0747-43bc-8d06-e263c13e7f8e"
    );

    expect(result).toBeInstanceOf(Object);
    expect(result).toBeTruthy();
    expect(result).toHaveProperty("id", "1ec7583a-0747-43bc-8d06-e263c13e7f8e");
  });

  it("SearchPostUseCase - It should return all posts for a specific term", async () => {
    const postRepository = new PostRepositoryMock();
    const searchPostUseCase = new SearchPostUseCase(postRepository);

    const term = "obra";

    const result = await searchPostUseCase.handler(term);

    expect(result).toBeTruthy();
    expect(result).toBeInstanceOf(Array);
  });

  it("GetOnePostUseCase - Should return ResourceNotFound for non-existent id", async () => {
    const postRepository = new PostRepositoryMock();
    const getOnePostUseCase = new GetOnePostUseCase(postRepository);

    const id = "1ec7583a-0747-43bc-8d06-e263c13e7f81";

    try {
      const result = await getOnePostUseCase.handler(id);
    } catch (error) {
      expect(error).toBeInstanceOf(ResourceNotFoundError);
    }
  });

  it("CreatePostUseCase - Should return a new created post", async () => {
    const postRepository = new PostRepositoryMock();
    const createPostUseCase = new CreatePostUseCase(postRepository);

    const post: Post = {
      id: "eb106388-27ed-4764-8de2-fad08496403d",
      title: "Leituras Bíblicas Parte 8882",
      content: "Content Leituras Bíblicas.....",
      urlImage: "https://www.google.com.br",
      createdAt: new Date(),
      teacher_id: 1,
    };

    const result = await createPostUseCase.handler(post);

    expect(result).toBeInstanceOf(Object);
    expect(result).toBeTruthy();
    expect(result).toHaveProperty("id", "eb106388-27ed-4764-8de2-fad08496403d");
  });

  it("UpdatePostUseCase - Should return an updated post", async () => {
    const postRepository = new PostRepositoryMock();
    const updatePostUseCase = new UpdatePostUseCase(postRepository);

    let postId = "eb106388-27ed-4764-8de2-fad08496403d";
    let updatedPost: PostUpdateType = {
      title: "ALTERADO",
      content: "",
    };

    const result = await updatePostUseCase.handler(postId, updatedPost);

    expect(result).toBeInstanceOf(Object);
    expect(result).toHaveProperty("title", "ALTERADO");
    expect(result).toBeTruthy();
    expect(result).toHaveProperty("content", "Content Leituras Bíblicas.....");
  });

  it("DeletePostUseCase - Should return the id of the removed post", async () => {
    const postRepository = new PostRepositoryMock();
    const deletePostUseCase = new DeletePostUseCase(postRepository);

    const postId = "eb106388-27ed-4764-8de2-fad08496403d";

    const result = await deletePostUseCase.handler(postId);

    expect(result).toHaveProperty("id", "eb106388-27ed-4764-8de2-fad08496403d");
    expect(result).toBeTruthy();
  });
});
