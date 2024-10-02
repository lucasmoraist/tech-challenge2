import { Teacher } from "@/domain/entities/teacher.entity";
import { ITeacherRepository } from "@/repositories/teacher.repository.interface";
import { database } from "@/lib/pg/db";
import { Post } from "@/domain/entities/post.entity";
import { TeacherType } from "@/domain/types/teacher.type";
import { teacherSummary } from "@/domain/types/teacher-summary.type";
import { TeacherUpdateType } from "@/domain/types/teacher-update.type";

export class TeacherRepository implements ITeacherRepository {
  async listAll(page: number, limit: number): Promise<teacherSummary> {
    const offset = (page - 1) * limit;

    const result = await database.clientInstance?.query(
      `
      SELECT t.id, t.name, t.school_subject FROM teacher t
      LIMIT $1 OFFSET $2
    `,
      [limit, offset]
    );

    const totalPages = await database.clientInstance?.query(`
      SELECT COUNT(*) AS total FROM teacher
    `);

    const items: TeacherType[] = result?.rows || [];

    const summary: teacherSummary = {
      currentPage: page,
      itemsPerPage: items.length,
      totalNumberOfPages: Math.ceil(totalPages?.rows[0].total / limit),
      teachers: items.length > 0 ? items : [],
    };

    return summary;
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

  async getTeacherById(
    teacherId: number
  ): Promise<Teacher & { posts: Post[] }> {
    const teacherResult = await database.clientInstance?.query(
      `
      SELECT * FROM teacher WHERE id = $1
    `,
      [teacherId]
    );

    const teacher = teacherResult?.rows[0];

    if (!teacher) {
      throw new Error("Teacher not found");
    }

    const postsResult = await database.clientInstance?.query(
      `
      SELECT * FROM post WHERE teacher_id = $1
    `,
      [teacherId]
    );

    const posts = postsResult?.rows || [];

    // Adiciona os posts diretamente no objeto do professor
    return { ...teacher, posts };
  }
  async create({ name, school_subject, user_id }: Teacher): Promise<Teacher> {
    const result = await database.clientInstance?.query(
      `
      INSERT INTO "teacher" (name, school_subject, user_id) VALUES ($1, $2, $3) RETURNING *
      `,
      [name, school_subject, user_id]
    );

    return result?.rows[0];
  }
  async updateTeacher(
    teacherId: number,
    { name, school_subject }: TeacherUpdateType
  ): Promise<Teacher | null> {
    const result = await database.clientInstance?.query(
      `
      UPDATE teacher 
      SET name = $1, school_subject = $2 
      WHERE id = $3 RETURNING *
      `,
      [name, school_subject, teacherId]
    );

    return result?.rows[0] || null;
  }
  async deleteTeacher(teacherId: number): Promise<Teacher | null> {
    const result = await database.clientInstance?.query(
    `
      DELETE FROM teacher 
      WHERE id = $1 
      RETURNING *
    `,
      [teacherId]
    );

    return result?.rows[0] || null;
  }
}
