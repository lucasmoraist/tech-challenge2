import { ITeacher } from "@/entities/models/teacher.interface";
import { ITeacherRepository } from "@/repositories/teacher.repository.interface";

export class CreateTeacherUseCase {
  constructor(private readonly teacherRepository: ITeacherRepository) {}

  async handler(teacher: ITeacher): Promise<ITeacher> {
    return this.teacherRepository.create(teacher);
  }
}
