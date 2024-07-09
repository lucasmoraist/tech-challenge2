import { ITeacher } from "@/entities/models/teacher.interface";
import { ITeacherRepository } from "../teacher.repository.interface";
import { database } from "@/lib/pg/db";

export class TeacherRepository implements ITeacherRepository {
  async create({ name, school_subject, user_id }: ITeacher): Promise<ITeacher> {
    const result = await database.clientInstance?.query(
      `
      INSERT INTO "teacher" (name, school_subject, user_id) VALUES ($1, $2, $3) RETURNING *
      `,
      [name, school_subject, user_id]
    );

    return result?.rows[0];
  }
}
