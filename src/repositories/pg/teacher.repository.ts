import { Teacher } from "@/entities/teacher.entity";
import { ITeacherRepository } from "@/repositories/teacher.repository.interface";
import { database } from "@/lib/pg/db";

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

  async getName(id: number): Promise<string> {
    const result = await database.clientInstance?.query(
      `
      SELECT name FROM teacher WHERE teacher.user_id = $1
      `,
      [id]
    );

    const name = result?.rows[0].name;

    return name;
  }
}
