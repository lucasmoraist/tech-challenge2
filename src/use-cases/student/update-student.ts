import { IStudentRepository } from "@/repositories/student.repository.interface";
import { IStudent } from "@/types/student/student.type";

export class UpdateStudentUseCase {
  constructor(private readonly studentRepository: IStudentRepository) {}

  async handler(
    studentId: number,
    student: IStudent
  ): Promise<IStudent | null> {
    return this.studentRepository.updateStudent(studentId, student);
  }
}
