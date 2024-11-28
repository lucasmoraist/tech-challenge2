import { ITeacherRepository } from "@/repositories/teacher.repository.interface";

export class GetNameTeacherUseCase {
  constructor(private readonly teacherRepository: ITeacherRepository) {}

  async handler(id?: number) {
    return this.teacherRepository.getName(id);
  }
}
