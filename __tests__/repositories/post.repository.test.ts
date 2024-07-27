import { Post } from "../../src/entities/post.entity";
import { PostRepository } from "../../src/repositories/pg/post.repository";
import { database } from "../../src/lib/pg/db";
import { PostUpdateType } from "../../src/types/post-update.type";
import { PostTeacherType } from "@/types/post-teacher.type";
import { PostListType } from "../../src/types/post-list-type";
import { PostSearchType } from "@/types/post-search-type";

jest.mock("../../src/lib/pg/db", () => ({
  database: {
    clientInstance: {
      query: jest.fn(),
    },
  },
}));

describe("PostRepository", () => {
  let postRepository: PostRepository;

  beforeEach(() => {
    postRepository = new PostRepository();
  });

  it("Create - Should create and returns a post", async () => {
    const post: Post = {
      id: "f590e0f8-fa84-4174-abf8-298f2770e557",
      title: "Leituras Bíblicas Parte 1",
      content: "Leituras Bíblicas Parte 1 content...",
      createdAt: new Date(),
      teacher_id: 10,
    };

    (database.clientInstance?.query as jest.Mock).mockResolvedValue({
      rows: [post],
    });

    const result = await postRepository.create(post);

    expect(result).toEqual(post);
    expect(result).toHaveProperty("id", "f590e0f8-fa84-4174-abf8-298f2770e557");
    expect(result).toBeInstanceOf(Object);
  });

  it("Update - Should updates and returns a post", async () => {
    const post: PostUpdateType = {
      title: "ALTERADO",
      content: "",
    };

    (database.clientInstance?.query as jest.Mock).mockResolvedValue({
      rows: [post],
    });

    const result = await postRepository.updatePost(
      "f590e0f8-fa84-4174-abf8-298f2770e557",
      post
    );

    expect(result).toEqual(post);
    expect(result).toHaveProperty("title", "ALTERADO");
    expect(result).toBeInstanceOf(Object);
  });

  it("Delete - Should removes a post", async () => {
    const post: Post = {
      id: "f590e0f8-fa84-4174-abf8-298f2770e557",
      title: "Leituras Bíblicas Parte 1",
      content: "Leituras Bíblicas Parte 1 content...",
      createdAt: new Date(),
      teacher_id: 10,
    };

    const postId: string = "f590e0f8-fa84-4174-abf8-298f2770e557";

    (database.clientInstance?.query as jest.Mock).mockResolvedValue({
      rows: [post],
    });

    const result = await postRepository.deletePost(
      "f590e0f8-fa84-4174-abf8-298f2770e557"
    );

    expect(result).toHaveProperty("id", "f590e0f8-fa84-4174-abf8-298f2770e557");
    expect(result).toBeInstanceOf(Object);
  });

  it("GetAll - Should returns all post", async () => {
    const posts: PostTeacherType[] = [
      {
        id: "1ec7583a-0747-43bc-8d06-e263c13e7f8e",
        title: "A guerra dos cem anos",
        content:
          "A Guerra dos Cem Anos é uma obra que conta uma série de conflitos travados entre os reinos da Inglaterra e da França durante o final da Idade Média ...",
        createdAt: new Date("2024-07-20"),
        teacher_id: 8,
        name: "Xuxa da Silva",
        school_subject: "História",
      },
      {
        id: "c8e1d575-00f3-4ceb-b2a8-f8cf3f940b79",
        title: "Os Lusíadas",
        content:
          "Os Lusíadas é uma obra de poesia épica do escritor português Luís Vaz de Camões, a primeira epopeia portuguesa publicada em versão impressa.",
        createdAt: new Date("2024-07-20"),
        teacher_id: 8,
        name: "Xuxa da Silva",
        school_subject: "História",
      },
    ];

    (database.clientInstance?.query as jest.Mock).mockResolvedValue({
      rows: [posts],
    });

    const result = await postRepository.getAll(1, 10);

    expect(result).toBeInstanceOf(Array);
    expect(result).toBeTruthy();
  });

  it("GetList - Should returns list of post", async () => {
    const posts: PostListType[] = [
      {
        id: "1ec7583a-0747-43bc-8d06-e263c13e7f8e",
        title: "A guerra dos cem anos",
        createdAt: new Date("2024-07-20"),
      },
      {
        id: "c8e1d575-00f3-4ceb-b2a8-f8cf3f940b79",
        title: "Os Lusíadas",
        createdAt: new Date("2024-07-20"),
      },
    ];

    (database.clientInstance?.query as jest.Mock).mockResolvedValue({
      rows: [posts],
    });

    const result = await postRepository.getList(1, 10);

    expect(result).toBeInstanceOf(Array);
    expect(result).toBeTruthy();
  });

  it("GetOne - Should returns one post by ID", async () => {
    const posts: PostTeacherType[] = [
      {
        id: "1ec7583a-0747-43bc-8d06-e263c13e7f8e",
        title: "A guerra dos cem anos",
        content:
          "A Guerra dos Cem Anos é uma obra que conta uma série de conflitos travados entre os reinos da Inglaterra e da França durante o final da Idade Média ...",
        createdAt: new Date("2024-07-20"),
        teacher_id: 8,
        name: "Xuxa da Silva",
        school_subject: "História",
      },
    ];

    const postId = "1ec7583a-0747-43bc-8d06-e263c13e7f8e";

    (database.clientInstance?.query as jest.Mock).mockResolvedValue({
      rows: [posts],
    });

    const result = await postRepository.getOne(
      "1ec7583a-0747-43bc-8d06-e263c13e7f8e"
    );

    expect(result).toBeInstanceOf(Object);
    expect(result).toBeTruthy();
    expect(result).toHaveLength(1);
  });

  it("Search - Should returns posts by terms", async () => {
    const posts: PostSearchType[] = [
      {
        title: "A guerra dos cem anos",
        content:
          "A Guerra dos Cem Anos é uma obra que conta uma série de conflitos travados entre os reinos da Inglaterra e da França durante o final da Idade Média ...",
      },
    ];

    const terms = "A guerra dos cem anos";

    (database.clientInstance?.query as jest.Mock).mockResolvedValue({
      rows: [posts],
    });

    const result = await postRepository.search(terms);

    expect(result).toBeInstanceOf(Object);
    expect(result).toBeTruthy();
    expect(result).toHaveLength(1);
  });
});
