import { studentSummary } from "@/types/student/student-summary.type";
import { IStudent } from "@/types/student/student.type";
import { IStudentRepository } from "../student.repository.interface";
import { database } from "@/lib/pg/db";

export class StudentRepository implements IStudentRepository {
  async create({ name, user_id }: IStudent): Promise<IStudent> {
    const result = await database.clientInstance?.query(
      `
            INSERT INTO student (name, user_id)
            VALUES ($1, $2)
            RETURNING *    
        `,
      [name, user_id]
    );

    return result?.rows[0];
  }
  async listAll(page: number, limit: number): Promise<studentSummary> {
    const offset = (page - 1) * limit;

    const result = await database.clientInstance?.query(
      `
            SELECT * 
            FROM student
            LIMIT $1 OFFSET $2
        `,
      [limit, offset]
    );

    const totalPages = await database.clientInstance?.query(`
            SELECT COUNT(*) AS total FROM student    
        `);

    const items: IStudent[] = result?.rows || [];

    return {
      currentPage: page,
      itemsPerPage: items.length,
      totalNumberOfPages: Math.ceil(totalPages?.rows[0].total / limit),
      students: items.length > 0 ? items : [],
    };
  }
  async getOne(userId: number): Promise<IStudent | null> {
    const result = await database.clientInstance?.query(
      `
        SELECT s.id, s.name
        FROM student s
        WHERE s.user_id = $1
    `,
      [userId]
    );

    return result?.rows[0] || null;
  }
  async updateStudent(
    studentId: number,
    { name }: IStudent
  ): Promise<IStudent | null> {
    const result = await database.clientInstance?.query(
      `
        UPDATE student
        SET name = $1
        WHERE id = $2
        RETURNING *
    `,
      [name, studentId]
    );

    return result?.rows[0] || null;
  }
  async deleteStudent(studentId: number): Promise<IStudent | null> {
    const result = await database.clientInstance?.query(
      `
        DELETE FROM student
        WHERE id = $1
        RETURNING *
    `,
      [studentId]
    );

    return result?.rows[0] || null;
  }
}
