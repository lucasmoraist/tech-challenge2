import { Post } from "@/entities/post.entity";
import { IPostRepository } from "@/repositories/post.repository.interface";
import { PostSearchType } from "@/types/post/post-search-type";
import { postSummary } from "@/types/post/post-summary";
import { postTeacherSummary } from "@/types/post/post-teacher-summary-type";
import { PostTeacherType } from "@/types/post/post-teacher.type";
import { PostUpdateType } from "@/types/post/post-update.type";

const posts: PostTeacherType[] = [
  {
    id: "1ec7583a-0747-43bc-8d06-e263c13e7f8e",
    title: "A guerra dos cem anos",
    content:
      "A Guerra dos Cem Anos é uma obra que conta uma série de conflitos travados entre os reinos da Inglaterra e da França durante o final da Idade Média ...",
      urlImage: "https://www.google.com.br/image.png",
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
      urlImage: "https://www.google.com.br/image.png",
      createdAt: new Date("2024-07-20"),
    teacher_id: 8,
    name: "Xuxa da Silva",
    school_subject: "História",
  },
];

const pagesPosts: postTeacherSummary = {
  currentPage: 1,
  itemsPerPage: 10,
  totalNumberOfPages: 1,
  posts: posts,
}

let post: Post = {
  id: "",
  title: "",
  content: "",
  urlImage: "",
  createdAt: new Date(""),
  teacher_id: 0,
};

let _posts: Post[] = [];

export class PostRepositoryMock implements IPostRepository {
  getAll(page: number, limit: number): Promise<postTeacherSummary> {
    return Promise.resolve(pagesPosts);
  }
  getList(page: number, limit: number): Promise<postSummary> {
    return Promise.resolve(pagesPosts);
  }

  getOne(postId: string): Promise<PostTeacherType | null> {
    const onePost = posts.find((i) => i.id === postId) ?? null;

    return Promise.resolve(onePost) || null;
  }

  search(term: string): Promise<PostSearchType[] | []> {
    const titleAndContentFilterd = posts.filter(
      (i) => i.content.includes(term) || i.title.includes(term)
    );

    const result: PostSearchType[] = titleAndContentFilterd.map((i) => {
      return {
        title: i.title,
        content: i.content,
      };
    });

    return Promise.resolve(result) || [];
  }

  create(_post: Post): Promise<Post> {
    post.id = _post.id;
    post.title = _post.title;
    post.content = _post.content;
    post.createdAt = _post.createdAt;
    post.teacher_id = _post.teacher_id;

    _posts.push(post);
    return Promise.resolve(post);
  }

  updatePost(postId: string, _post: PostUpdateType): Promise<Post | null> {
    if (_post.title && _post.title != "") post.title = _post.title;
    if (_post.content && _post.content != "") post.content = _post.content;

    return Promise.resolve(post) || null;
  }

  deletePost(postId: string): Promise<Post | null> {
    const indexPost = _posts.findIndex((i) => i.id === postId);
    const deletedPost = _posts[indexPost];
    const result = _posts.slice(indexPost, 1);

    return Promise.resolve(deletedPost) || null;
  }
}
