import { Teacher } from "@/entities/teacher.entity";
import { ITeacherRepository } from "@/repositories/teacher.repository.interface";
import { database } from "@/lib/pg/db";
import { ITeacher } from "@/types/teacher/teacher-type";
import { TeacherUpdateType } from "@/types/teacher/teacher-update.type";
import { TeacherListType } from "@/types/teacher/teacher-list.type";

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

  async getOne(user_id: number): Promise<ITeacher | null> {
    const result = await database.clientInstance?.query(
      `
      SELECT 
        t.id, 
        t.name, 
        t.school_subject,
        COALESCE(
          json_agg(
            json_build_object(
              'title', p.title, 
              'createdAt', p.createdAt
            )
          ) FILTER (WHERE p.id IS NOT NULL), '[]'
        ) AS posts
      FROM teacher t
      LEFT JOIN post p ON p.teacher_id = t.id
      WHERE t.user_id = $1
      GROUP BY t.id
    `,
      [user_id]
    );

    if (!result?.rows[0]) {
      return null;
    }

    return {
      id: result.rows[0].id,
      name: result.rows[0].name,
      school_subject: result.rows[0].school_subject,
      posts: result.rows[0].posts || [],
    };
  }

  async updateTeacher(
    teacherId: number,
    { name, school_subject }: TeacherUpdateType
  ): Promise<Teacher | null> {
    const result = await database.clientInstance?.query(`
      UPDATE teacher
      SET name = COALESCE($1, name), school_subject = COALESCE($2, school_subject)
      WHERE teacher.id = $3
      RETURNING *
    `, [name, school_subject, teacherId]);

    return result?.rows[0] || null;
  }

  async getAll(): Promise<TeacherListType[]> {
    const result = await database.clientInstance?.query(
      `
      SELECT id, name, school_subject FROM teacher
      `
    );

    return result?.rows || [];
  }
  async deleteTeacher(teacherId: number): Promise<Teacher | null> {
    const result = await database.clientInstance?.query(
      `
      DELETE FROM teacher WHERE id = $1
      RETURNING *
      `,
      [teacherId]
    );

    return result?.rows[0] || null;
  }
}
