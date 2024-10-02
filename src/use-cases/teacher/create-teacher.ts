import { Teacher } from "@/entities/teacher.entity";
import { ITeacherRepository } from "@/repositories/teacher.repository.interface";

export class CreateTeacherUseCase {
  constructor(private readonly teacherRepository: ITeacherRepository) {}

  async handler(teacher: Teacher): Promise<Teacher> {
    return this.teacherRepository.create(teacher);
  }
}
