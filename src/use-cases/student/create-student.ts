import { IStudentRepository } from "@/repositories/student.repository.interface";
import { IStudent } from "@/types/student/student.type";

export class CreateStudentUseCase {
  constructor(private readonly studentRepository: IStudentRepository) {}

  async handler(student: IStudent): Promise<IStudent> {
    return this.studentRepository.create(student);
  }
}
