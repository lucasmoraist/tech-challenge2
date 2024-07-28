import { database } from "@/lib/pg/db";
import { IPostRepository } from "@/repositories/post.repository.interface";
import { PostTeacherType } from "@/types/post-teacher.type";
import { Post } from "@/entities/post.entity";
import { PostUpdateType } from "@/types/post-update.type";
import { PostListType } from "@/types/post-list-type";
import { PostSearchType } from "@/types/post-search-type";

export class PostRepository implements IPostRepository {
  async getAll(page: number, limit: number): Promise<PostTeacherType[] | []> {
    const offset = (page - 1) * limit;

    const result = await database.clientInstance?.query(
      `
      SELECT post.id, post.title, post.content, post.createdAt, teacher.id as idTeacher, teacher.name, teacher.school_subject
      FROM post
      INNER JOIN teacher
      ON post.teacher_id = teacher.id
      LIMIT $1 OFFSET $2
      `,
      [limit, offset]
    );

    return result?.rows || [];
  }

  async getList(page: number, limit: number): Promise<PostListType[] | []> {
    const offset = (page - 1) * limit;
    const result = await database.clientInstance?.query(
      `
      SELECT post.id, post.title, post.createdat FROM post
      LIMIT $1 OFFSET $2
      `,
      [limit, offset]
    );

    return result?.rows || [];
  }

  async getOne(postId: string): Promise<PostTeacherType | null> {
    const result = await database.clientInstance?.query(
      `
      SELECT post.id, post.title, post.content, post.createdAt, teacher.id as idTeacher, teacher.name, teacher.school_subject
      FROM post
      INNER JOIN teacher
      ON post.teacher_id = teacher.id
      WHERE post.id = $1
      `,
      [postId]
    );
    return result?.rows[0] || null;
  }

  async search(term: string): Promise<PostSearchType[] | []> {
    const result = await database.clientInstance?.query(
      `
      SELECT post.id, post.title, post.content
      FROM post
      WHERE post.title ILIKE $1 OR post.content ILIKE $1
      `,
      [`%${term}%`]
    );

    return result?.rows || [];
  }

  async create({ title, content, teacher_id }: Post): Promise<Post> {
    const now = new Date();

    const result = await database.clientInstance?.query(
      `
      INSERT INTO "post" (title, content, createdAt, teacher_id)
      VALUES ($1, $2, $3, $4) RETURNING *
      `,
      [title, content, now, teacher_id]
    );
    return result?.rows[0];
  }

  async updatePost(
    postId: string,
    { title, content }: PostUpdateType
  ): Promise<Post | null> {
    const result = await database.clientInstance?.query(
      `
      UPDATE post
      SET title = COALESCE($1, title), content = COALESCE($2, content)
      WHERE post.id = $3
      RETURNING *
      `,
      [title, content, postId]
    );

    return result?.rows[0] || null;
  }

  async deletePost(postId: string): Promise<Post | null> {
    const result = await database.clientInstance?.query(
      `
      DELETE FROM post
      WHERE post.id = $1
      RETURNING *
      `,
      [postId]
    );

    return result?.rows[0] || null;
  }
}
