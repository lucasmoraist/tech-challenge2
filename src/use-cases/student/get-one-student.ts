import { IStudentRepository } from "@/repositories/student.repository.interface";
import { IStudent } from "@/types/student/student.type";

export class GetOneStudentUseCase {
  constructor(private readonly studentRepository: IStudentRepository) {}

  async handler(studentId: number): Promise<IStudent | null> {
    return this.studentRepository.getOne(studentId);
  }
}
