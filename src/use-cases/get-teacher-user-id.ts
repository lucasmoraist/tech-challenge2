import { ITeacherRepository } from "@/repositories/teacher.repository.interface";

export class GetTeacherByUserIdUseCase {
  constructor(private readonly teacherRepository: ITeacherRepository) {}

  async handler(idUser: number) {
    return this.teacherRepository.getTeacherByUserId(idUser);
  }
}
