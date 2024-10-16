import { IStudentRepository } from "@/repositories/student.repository.interface";
import { studentSummary } from "@/types/student/student-summary.type";

export class GetAllStudentUseCase {
  constructor(private readonly repository: IStudentRepository) {}

  async handler(page: number, limit: number): Promise<studentSummary> {
    return this.repository.listAll(page, limit);
  }
}
