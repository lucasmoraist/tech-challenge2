import { Teacher } from "@/entities/teacher.entity";
import { ITeacherRepository } from "@/repositories/teacher.repository.interface";
import { database } from "@/lib/pg/db";
import { Post } from "@/entities/post.entity";

export class TeacherRepository implements ITeacherRepository {
  async create({ name, school_subject, user_id }: Teacher): Promise<Teacher> {
    const result = await database.clientInstance?.query(
      `
      INSERT INTO "teacher" (name, school_subject, user_id) VALUES ($1, $2, $3) RETURNING *
      `,
      [name, school_subject, user_id]
    );

    return result?.rows[0];
  }

  async getTeacherByUserId(userId: number): Promise<number> {
    const result = await database.clientInstance?.query(
      `
        SELECT t.id FROM teacher t WHERE t.user_id = $1
      `,
      [userId]
    );

    return result?.rows[0].id;
  }

  async getTeacherById(teacherId: number): Promise<Teacher & { posts: Post[] }> {
    const teacherResult = await database.clientInstance?.query(`
      SELECT * FROM teacher WHERE id = $1
    `, [teacherId]);
  
    const teacher = teacherResult?.rows[0];
  
    if (!teacher) {
      throw new Error('Teacher not found');
    }
  
    const postsResult = await database.clientInstance?.query(`
      SELECT * FROM post WHERE teacher_id = $1
    `, [teacherId]);
  
    const posts = postsResult?.rows || [];
  
    // Adiciona os posts diretamente no objeto do professor
    return { ...teacher, posts };
  }
  
}
